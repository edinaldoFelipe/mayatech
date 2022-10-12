const Urls = require('./../models/Urls')
const Validation = require('./../utils/Validation')

class UrlController {

	/**
	 * All rows
	 * 
	 * @param {*} req 
	 * @param {*} res 
	 * @returns {res}
	 */
	async index(req, res) {
		try {
			const urls = await Urls.all()

			if (!urls)
				return res.status(404).end();

			return res.json(urls);
		} catch (err) {
			return res.status(400).end(err.message)
		}
	}

	/**
	 * Find a row by param short
	 * 
	 * @param {*} req 
	 * @param {*} res 
	 * @returns {res}
	 */
	async show(req, res) {
		try {
			const short = req.params.short

			Validation.alphaNumeric(short)

			const { url } = await Urls.findByShort(short) || {}

			if (!url)
				return res.status(404).send("Url don't found!")

			return res.json({ url })
		} catch (error) {
			return res.status(400).send(error.message)
		}
	}

	/**
	 * Save Url
	 * 
	 * @param {*} req 
	 * @param {*} res 
	 * @returns {res}
	 */
	async create(req, res) {
		try {
			let { short, full } = req.body

			Validation.required(full, 'Url')
			Validation.validateUrl(full)

			if (short) {
				Validation.alphaNumeric(short)
				await Validation.existShort(short)
			} else
				short = await UrlController.generateRandomShort()

			await Validation.existUrl(full)

			if (!await Urls.store([short, full]))
				return res.status(304).end()

			return res.status(201).json({ url: `${process.env.BASE_URL}${short}` })
		} catch (error) {
			return res.status(400).end(error.message)
		}
	}

	/**
	 * Generate Random Short
	 * 
	 * @param {Number} length 
	 * @returns {String}
	 */
	static async generateRandomShort(length = 6) {
		const short = (Math.random()).toString(36).substr(2, length),
			url = await Urls.findByShort(short)

		if (url)
			return await UrlController.generateRandomShort(length)

		return short
	}
}

module.exports = {
	UrlController: new UrlController(),
	GenerateRandomShort: UrlController.generateRandomShort
}