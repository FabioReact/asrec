import { Hero } from '../types/hero'
import { fetcher, BASE_URL } from './fetcher'

export const getHeroes = (name: string) => {
	return fetcher
		.get<Hero[]>(`${BASE_URL}/heroes?name_like=${name}`)
		.then(res => {
			return res.data
		})
		.catch(e => {
			throw new Error('Server error', e.message)
		})
}

export const getHeroById = (id: string) => {
	return fetcher
		.get<Hero>(`${BASE_URL}/heroes/${id}`)
		.then(res => {
			return res.data
		})
		.catch(e => {
			throw new Error('Server error', e.message)
		})
}