import { useReducer } from 'react'
import { Hero } from '../types/hero'
import { BASE_URL, fetcher } from '../api/fetcher'
import { ActionNames, useSearchHeroesReducer } from '../reducers/useSearchHeroesReducer'

const useSearchHeroes = () => {
	const initialState = {
		error: '',
		isLoading: false,
		heroes: null,
	}
	const [{ error, heroes, isLoading }, dispatch] = useReducer(useSearchHeroesReducer, initialState)

	const searchHeroes = ({
		name,
		intelligence,
		strength,
		speed,
		combat,
		durability,
		power,
	}: {
		name: string
		intelligence?: string
		strength?: string
		speed?: string
		combat?: string
		durability?: string
		power?: string
	}) => {
		// name_like=hulk&powerstats.intelligence_gte=50&powerstats.speed_gte=50
		// name_like=hulk&powerstats.intelligence_gte=17&powerstats.strength_gte=16
		dispatch({ type: ActionNames.SET_LOADING })
		let query = `name_like=${name}`
		if (intelligence) query += `&powerstats.intelligence_gte=${intelligence}`
		if (strength) query += `&powerstats.strength_gte=${strength}`
		if (speed) query += `&powerstats.speed_gte=${speed}`
		if (combat) query += `&powerstats.combat_gte=${combat}`
		if (durability) query += `&powerstats.durability_gte=${durability}`
		if (power) query += `&powerstats.power_gte=${power}`
		fetcher
			.get<Hero[]>(`${BASE_URL}/heroes?${query}`)
			.then((res) => {
				dispatch({
					type: ActionNames.SET_HEROES,
					payload: res.data,
				})
			})
			.catch((e) => {
				dispatch({
					type: ActionNames.SET_ERROR,
					payload: e.message,
				})
			})
	}

	return {
		searchHeroes,
		heroes,
		error,
		isLoading,
	}
}

export { useSearchHeroes }
