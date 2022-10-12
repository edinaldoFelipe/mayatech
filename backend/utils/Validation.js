const Urls = require('./../models/Urls')
const ValidUrl = require('valid-url');

class Validation {

	/**
	 * Check string has only numbers or letters
	 * 
	 * @param {String} string 
	 */
	alphaNumeric(string) {
		if (!`${string}`.match(/^[0-9a-zA-Z]+$/))
			throw new Error("Short Code Invalid! Allow only numbers and letters")
	}

	/**
	 * Check exist string
	 * 
	 * @param {String} string 
	 * @param {String} stringName 
	 */
	required(string, stringName) {
		if (!string)
			throw new Error(`${stringName} Field is Required!`)
	}

	/**
	 * Check is valid url
	 * 
	 * @param {String} url 
	 */
	validateUrl(url) {
		try {
			if (!ValidUrl.isUri(url))
				throw 0
		} catch (error) {
			throw new Error('Url Field Invalid!')
		}
	}

	/**
	 * Check if exist full url
	 * 
	 * @param {String} full 
	 */
	async existUrl(full) {
		const url = await Urls.findByUrl(full)

		if (url)
			throw new Error(`Url always registred! Short Code: ${url.short}`)
	}

	/**
	 * Check if exist short code
	 * 
	 * @param {String} short 
	 */
	async existShort(short) {
		if (await Urls.findByShort(short))
			throw new Error('Short always registred!')
	}
}

module.exports = new Validation();