import { useEffect } from 'react'
import { Hero } from './../types/hero'
import { useState } from 'react'
import { BASE_URL, fetcher } from '../api/fetcher'

const useSearchHero = (id: string) => {
	const [hero, setHero] = useState<Hero | null>(null)
	const [error, setError] = useState(null)
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		fetcher
			.get<Hero>(`${BASE_URL}/heroes/${id}`)
			.then((res) => {
				setHero(res.data)
			})
			.catch((e) => {
				setError(e.message)
			})
			.finally(() => {
				setIsLoading(false)
			})
	}, [])

	return {
		hero,
		error,
		isLoading,
	}
}

export { useSearchHero }