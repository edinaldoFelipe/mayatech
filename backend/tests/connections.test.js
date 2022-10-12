const dbConnect = require('./../database/connection')

process.env = {
	PGUSER: 'root',
	PGHOST: 'postgres',
	PGPASSWORD: 'admin',
	PGDATABASE: 'maya',
	PGPORT: '5432'
}

describe('Connections', () => {
	test('Database Exception', async () => {
		process.env.PGUSER = ''

		await expect(dbConnect()).rejects.toThrow("Database don't connected!")
	})
})