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
		const client = await dbConnect()
		try {
			const response = await client.query("INSERT INTO urls (short, url) VALUES ($1::text, $2::text) RETURNING id;", fields)

			return response.rows[0].id
		} catch (error) {
			throw error
		} finally {
			client.end()
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
		const client = await dbConnect()
		try {
			const urls = await client.query(query, fields)
			
			if (!urls.rows)
				return null

			if (first)
				return urls.rows.shift()

			return urls.rows
		} catch (error) {
			throw error
		} finally {
			client.end()
		}
	}

	/**
	 * Delete row
	 * 
	 * @param {Array | String} ids
	 * @returns {Boolean}
	 */
	async destroy(ids) {
		const client = await dbConnect()
		try {
			const completment = Array.isArray(ids) ? 'ANY ($1)' : '$1'

			await client.query(`DELETE FROM urls WHERE id = ${completment}`, [ids])

			return true
		} catch (error) {
			throw error
		} finally {
			client.end()
		}
	}
}

module.exports = new Urls()