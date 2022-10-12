const { UrlController, GenerateRandomShort } = require('../controllers/UrlController')

process.env = {
	BASE_URL: 'http://localhost:8080/',
	PGUSER: 'root',
	PGHOST: 'postgres',
	PGPASSWORD: 'admin',
	PGDATABASE: 'maya',
	PGPORT: '5432'
}

describe('Url Controller', () => {
	test('Test Generate Random Short', async () => {
		expect(await GenerateRandomShort()).toMatch(/[0-9a-zA-Z]+$/);
	})
})


