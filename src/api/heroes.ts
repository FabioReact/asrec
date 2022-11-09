import { Hero } from '../types/hero'
import { fetcher, BASE_URL } from './fetcher'

export const getHeroes = ({
	name,
	intelligence,
	strength,
	speed,
	combat,
	power,
	durability,
}: {
	name: string
	intelligence?: string
	strength?: string
	speed?: string
	combat?: string
	power?: string
	durability?: string
}) => {
	let query = `name_like=${name}`
	if (intelligence) query += `&powerstats.intelligence_gte=${intelligence}`
	if (strength) query += `&powerstats.strength_gte=${strength}`
	if (speed) query += `&powerstats.speed_gte=${speed}`
	if (combat) query += `&powerstats.combat_gte=${combat}`
	if (power) query += `&powerstats.power_gte=${power}`
	if (durability) query += `&powerstats.durability_gte=${durability}`
	return fetcher
		.get<Hero[]>(`${BASE_URL}/heroes?${query}`)
		.then((res) => {
			return res.data
		})
		.catch((e) => {
			throw new Error('Server error', e.message)
		})
}

export const getHeroById = (id: string) => {
	return fetcher
		.get<Hero>(`${BASE_URL}/heroes/${id}`)
		.then((res) => {
			return res.data
		})
		.catch((e) => {
			throw new Error('Server error', e.message)
		})
}
