import React, { useRef } from 'react'
import HeroCard from '../components/HeroCard/HeroCard'
import Spinner from '../components/Spinner/Spinner'
import { useSearchHeroes } from '../hooks/useSearchHeroes'

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
			<form onSubmit={onSubmitHandler} className='flex flex-col items-center'>
				<fieldset>
					<label htmlFor='name'>Name</label>
					<input type='text' id='name' name='name' ref={nameRef} />
				</fieldset>
				<fieldset>
					<label htmlFor='int'>Intelligence</label>
					<input type='range' id='int' name='int' min='1' max='100' ref={intRef} />
				</fieldset>
				<fieldset>
					<label htmlFor='str'>Strength</label>
					<input type='range' id='str' name='str' min='1' max='100' ref={strRef} />
				</fieldset>
				<button>Search</button>
			</form>
			<div className='flex justify-center'>
				{error && <p className='text-red-500'>{error}</p>}
				{isLoading && <Spinner />}
			</div>
			{heroes && (
				<div className='flex flex-wrap justify-center gap-6'>
					{heroes.map((hero) => (
						<HeroCard key={hero.id} hero={hero} />
					))}
				</div>
			)}
		</section>
	)
}

export default Search
