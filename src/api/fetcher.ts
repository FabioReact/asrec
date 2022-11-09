import axios from 'axios'

const BASE_URL = 'http://localhost:4000'

const fetcher = {
	get<T>(url: string, options?: any) {
		return axios.get<T>(url, options)
	},
}

export { fetcher, BASE_URL }
