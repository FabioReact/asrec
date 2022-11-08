import { useQuery } from "@tanstack/react-query"
import React, { useRef } from "react"
import { getHeroes } from "../api/heroes"
import HeroLabel from '../components/HeroLabel/HeroLabel'
import { Hero } from "../types/hero"

type SelectPlayerProps = {
	label: string
}

const SelectPlayer = ({ label }: SelectPlayerProps) => {
	const inputRef = useRef<HTMLInputElement>(null)
	const { data, error, isLoading, refetch } = useQuery(
		["getHeroes", inputRef.current?.value],
		() => getHeroes(inputRef.current?.value || ""),
		{
			enabled: false,
		},
	)

	const onSubmitHandler = (e: React.SyntheticEvent) => {
		e.preventDefault()
		// const searchedHero = inputRef.current?.value
		refetch()
	}

	return (
		<>
		<form onSubmit={onSubmitHandler} className='flex flex-col'>
			<label htmlFor={`player${label}`} className='uppercase font-thin tracking-widest text-lg'>Select Player {label}</label>
			{/* <input type="text" id={`player${label}`} name={`player${label}`} value={player} onChange={onChangeHandler} /> */}
			<input
				type="text"
				id={`player${label}`}
				name={`player${label}`}
				ref={inputRef}
			/>
			<button>Search</button>
		</form>
		{data && data.length && data.map(hero => <HeroLabel key={hero.id} id={hero.id} name={hero.name} /> )}
		</>
	)
}

const Battle = () => {
	return (
		<section>
			<h1>Battle</h1>
			<div className="flex justify-center gap-24">
				<SelectPlayer label="One" />
				<SelectPlayer label="Two" />
			</div>
		</section>
	)
}

export default Battle
