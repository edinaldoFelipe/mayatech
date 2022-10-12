const { Client } = require('pg')

/**
 * Try connection to database
 * 
 * @returns {Client}
 */
const connect = async function() {
	const client = new Client()
	try {
		await client.connect()
		return client
	} catch (err) {
		client.end()
		throw new Error("Database don't connected!")
	}
};

module.exports = connect;