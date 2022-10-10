const { Client } = require('pg')

/**
 * Try connection to database
 * 
 * @returns {Client}
 */
const connect = async function() {
	try {
		const client = new Client()
		await client.connect()
		return client
	} catch (err) {
		console.error(err.message)
		throw new Error("Database don't connected!")
	}
};

module.exports = connect;