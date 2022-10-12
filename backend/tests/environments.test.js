describe('Environments', () => {
	process.env.PGUSER = 'root'

	test('Test PGUSER Successfully', () => {
		expect(process.env.PGUSER).toMatch('root');
	})
})