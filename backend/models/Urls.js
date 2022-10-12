const dbConnect = require('./../database/connection')

class Urls {

	/**
	 * Select all rows
	 * 
	 * @returns {Array | null}
	 */
	async all() {
		return await this.select('SELECT * FROM urls')
	}

	/**
	 * Save to database
	 * 
	 * @param {Array} fields 
	 * @returns {Number}
	 */
	async store(fields) {
		try {
			const client = await dbConnect()
			const response = await client.query("INSERT INTO urls (short, url) VALUES ($1::text, $2::text);", fields)
			client.end()

			return response.rowCount
		} catch (error) {
			throw error
		}
	}

	/**
	 * Select unique row by short field
	 * 
	 * @param {String} short
	 * @returns {Object | Null}
	 */
	async findByShort(short) {
		return await this.select('SELECT * FROM urls WHERE short LIKE $1::text', [short], true)
	}

	/**
	 * Select unique row by url field
	 * 
	 * @param {String} url
	 * @returns {Object | null}
	 */
	async findByUrl(url) {
		return await this.select('SELECT * FROM urls WHERE url LIKE $1::text', [url], true)
	}

	/**
	 * Select database rows
	 * 
	 * @param {String} query 
	 * @param {String} fields 
	 * @param {Boolean} first 
	 * @returns {Array | Object | Null}
	 */
	async select(query, fields = '', first = false) {
		try {
			const client = await dbConnect()
			const urls = await client.query(query, fields)
			client.end()

			if (!urls.rows)
				return null

			if (first)
				return urls.rows.shift()

			return urls.rows
		} catch (error) {
			throw error
		}
	}
}

module.exports = new Urls()