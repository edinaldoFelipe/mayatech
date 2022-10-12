import axios from "axios";

export function getFullUrl() {
	return axios.get(`${process.env.VUE_APP_API_URL}${location.pathname}`)
}

export function createUrl(data = {}) {
	return axios.post(process.env.VUE_APP_API_URL, data)
}
