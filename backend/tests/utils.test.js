const Validation = require('./../utils/Validation')
const Urls = require('./../models/Urls')

process.env = {
	PGUSER: 'root',
	PGHOST: 'postgres',
	PGPASSWORD: 'admin',
	PGDATABASE: 'maya',
	PGPORT: '5432'
}

describe('Utils Validation', () => {
	test('Test AlphaNumeric Successfully', () => {
		expect(Validation.alphaNumeric("asd123")).toBeUndefined();
	})

	test('Test AlphaNumeric Exception', () => {
		expect(() => Validation.alphaNumeric("!@#$%ˆ&")).toThrow(Error);
	})

	test('Test Required Successfully', () => {
		expect(Validation.required("asd123")).toBeUndefined();
	})

	test('Test Required Exception', () => {
		expect(() => Validation.required('', 'CPF')).toThrow('CPF Field is Required!');
	})

	test('Test Valid Url Successfully', () => {
		expect(Validation.validateUrl("https://test.com")).toBeUndefined();
	})

	test('Test Valid Url Exception', () => {
		expect(() => Validation.validateUrl('www.test.com')).toThrow();
	})

	test('Test Exist Url Successfully', async () => {
		await expect(Validation.existUrl("https://test.com")).resolves.toBeUndefined();
	})

	test('Test Exist Url Exception', async () => {
		const id = await Urls.store(['abc', 'https://test.com'])
		
		await expect(Validation.existUrl("https://test.com")).rejects.toThrow('Url always registred! Short Code: abc')

		await Urls.destroy(id)
	})

	test('Test Exist Short Successfully', async () => {
		await expect(Validation.existShort("abc")).resolves.toBeUndefined();
	})

	test('Test Exist Short Exception', async () => {
		const id = await Urls.store(['abc', 'https://test.com'])

		await expect(Validation.existShort('abc')).rejects.toThrow('Short always registred!');

		await Urls.destroy(id)
	})
})