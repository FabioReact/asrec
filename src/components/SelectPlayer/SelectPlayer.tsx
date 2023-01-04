import { useQuery } from '@tanstack/react-query'
import { useRef } from 'react'
import { getHeroes } from '../../api/heroes'
import { Hero } from '../../types/hero'
import HeroLabel from '../HeroLabel/HeroLabel'
import Spinner from '../Spinner/Spinner'

type SelectPlayerProps = {
	label?: string
	onSelect?: (hero: Hero) => void
}

const SelectPlayer = ({
	label = '',
	onSelect = (hero) => {
		void hero
	},
}: SelectPlayerProps) => {
	const inputRef = useRef<HTMLInputElement>(null)
	const { data, error, refetch, isFetching, isLoading } = useQuery(
		['getHeroes', inputRef.current?.value, label],
		() =>
			getHeroes({
				name: inputRef.current?.value || '',
			}),
		{
			enabled: !!inputRef.current?.value,
			cacheTime: 0,
		},
	)

	const onSubmitHandler = (e: React.SyntheticEvent) => {
		e.preventDefault()
		// const searchedHero = inputRef.current?.value
		refetch()
	}

	return (
		<section>
			<form onSubmit={onSubmitHandler} className='flex flex-col'>
				<label htmlFor={`player${label}`} className='uppercase font-thin tracking-widest text-lg'>
					Select Player {label}
				</label>
				<input type='text' id={`player${label}`} name={`player${label}`} ref={inputRef} />
				<button>Search</button>
			</form>
			<div className='flex flex-col'>
				{!!error && <p className='text-red-500'>{(error as Error).message}</p>}
				{isFetching && isLoading && <Spinner />}
				{data &&
					data.length &&
					data.map((hero) => (
						<HeroLabel key={hero.id} id={hero.id} name={hero.name} onClick={() => onSelect(hero)} />
					))}
			</div>
		</section>
	)
}

export default SelectPlayer
