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
		if(!string)
			throw new Error(`${stringName} Field is Required!`)
	}

	/**
	 * Check is valid url
	 * 
	 * @param {String} url 
	 */
	validateUrl(url) {
		try {
			new URL(url)
		} catch (error) {
			throw new Error('Url Field Invalid!')
		}
	}
}

module.exports = new Validation();