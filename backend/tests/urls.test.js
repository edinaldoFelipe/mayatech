const Urls = require('./../models/Urls')

process.env = {
	PGUSER: 'root',
	PGHOST: 'postgres',
	PGPASSWORD: 'admin',
	PGDATABASE: 'maya',
	PGPORT: '5432'
}

describe('Urls Model', () => {

	test('All Successfully', async () => {
		const ids = []

		ids.push(await Urls.store(['abcd', 'https://test3.com']))
		ids.push(await Urls.store(['1234', 'https://test4.com']))

		expect(await Urls.all()).toBeInstanceOf(Array)

		await Urls.destroy(ids)

	})

	test('Store Successfully', async () => {
		const id = await Urls.store(['xyz', 'http://'])

		expect(`${id}`).toMatch(/[0-9]+$/)

		await Urls.destroy(id)
	})

	test('Select Exception', async () => {
		await expect(() => Urls.select('SELECT * FROM urlds')).rejects.toThrow()
	})

	test('Store Exception', async () => {
		await expect(() => Urls.store(['qwertyuiopasdfg', 'http://'])).rejects.toThrow()
	})

	test('Destroy Exception', async () => {
		await expect(() => Urls.destroy("asd")).rejects.toThrow()
	})
})