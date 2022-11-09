import React, { useRef, useState } from 'react'
import { getHeroes } from '../api/heroes'
import HeroCard from '../components/HeroCard/HeroCard'
import Spinner from '../components/Spinner/Spinner'
import { useSearchHeroes } from '../hooks/useSearchHeroes'
import { Hero } from '../types/hero'

const Search = () => {
	const nameRef = useRef<HTMLInputElement>(null)
	const intRef = useRef<HTMLInputElement>(null)
	const strRef = useRef<HTMLInputElement>(null)
	const { heroes, error, isLoading, searchHeroes } = useSearchHeroes()
	// const [heroes, setHeroes] = useState<Hero[]>([])

	const onSubmitHandler = async (e: React.SyntheticEvent) => {
		e.preventDefault()
		const name = nameRef.current?.value || ''
		const intelligence = intRef.current?.value || ''
		const strength = strRef.current?.value || ''
		searchHeroes({
			name,
			intelligence,
			strength,
		})
		// const result = await getHeroes({ name, intelligence, strength })
		// setHeroes(result)
	}
	return (
		<section>
			<h1>Search</h1>
			<form onSubmit={onSubmitHandler}>
				<fieldset>
					<label htmlFor="name">Name</label>
					<input type="text" id="name" name="name" ref={nameRef} />
				</fieldset>
				<fieldset>
					<label htmlFor="int">Intelligence</label>
					<input type="range" id="int" name="int" max="99" ref={intRef} />
				</fieldset>
				<fieldset>
					<label htmlFor="str">Strength</label>
					<input type="range" id="str" name="str" max="99" ref={strRef} />
				</fieldset>
				<button>Search</button>
			</form>
			{error && <p className='text-red-500'>{error}</p>}
			{isLoading && <Spinner />}
			{heroes && 
				<div className='flex flex-wrap justify-center gap-6'>
					{heroes.map(hero => <HeroCard key={hero.id} hero={hero} /> )}
				</div>
			}
		</section>
	)
}

export default Search