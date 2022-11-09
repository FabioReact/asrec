import { useEffect, useReducer } from 'react'
import { Hero } from '../types/hero'
import { BASE_URL, fetcher } from '../api/fetcher'
import { ActionNames, useSearchHeroReducer } from '../reducers/useSearchHeroReducer'

const useSearchHero = (id: string) => {
	const initialState = {
		error: '',
		isLoading: true,
		hero: null,
	}
	const [{ error, hero, isLoading }, dispatch] = useReducer(useSearchHeroReducer, initialState)
	useEffect(() => {
		fetcher
			.get<Hero>(`${BASE_URL}/heroes/${id}`)
			.then((res) => {
				dispatch({
					type: ActionNames.SET_HERO,
					payload: res.data,
				})
			})
			.catch((e) => {
				dispatch({
					type: ActionNames.SET_ERROR,
					payload: e.message,
				})
			})
	}, [])

	return {
		hero,
		error,
		isLoading,
	}
}

export { useSearchHero }
