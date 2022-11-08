import { useQuery } from "@tanstack/react-query"
import React, { useRef, useState } from "react"
import { getHeroes } from "../api/heroes"
import HeroLabel from "../components/HeroLabel/HeroLabel"
import { Hero } from "../types/hero"

type SelectPlayerProps = {
	label: string
	onSelect?: any
}

const SelectPlayer = ({ label, onSelect }: SelectPlayerProps) => {
	const inputRef = useRef<HTMLInputElement>(null)
	const { data, error, isLoading, refetch } = useQuery(
		["getHeroes", inputRef.current?.value],
		() => getHeroes(inputRef.current?.value || ""),
		{
			enabled: !!inputRef.current?.value,
		},
	)

	const onSubmitHandler = (e: React.SyntheticEvent) => {
		e.preventDefault()
		// const searchedHero = inputRef.current?.value
		refetch()
	}

	return (
		<>
			<form onSubmit={onSubmitHandler} className="flex flex-col">
				<label
					htmlFor={`player${label}`}
					className="uppercase font-thin tracking-widest text-lg"
				>
					Select Player {label}
				</label>
				{/* <input type="text" id={`player${label}`} name={`player${label}`} value={player} onChange={onChangeHandler} /> */}
				<input
					type="text"
					id={`player${label}`}
					name={`player${label}`}
					ref={inputRef}
				/>
				<button>Search</button>
			</form>
			<div className="flex flex-col">
				{data &&
					data.length &&
					data.map((hero) => (
						<HeroLabel key={hero.id} id={hero.id} name={hero.name} onClick={() => onSelect(hero.id)} />
					))}
			</div>
		</>
	)
}

const Battle = () => {
	const [playerOne, setPlayerOne] = useState(null)
	const [playerTwo, setPlayerTwo] = useState(null)
	return (
		<section>
			<h1>Battle</h1>
			<div className="flex justify-center gap-24">
				<SelectPlayer label="One" onSelect={setPlayerOne} />
				<SelectPlayer label="Two" onSelect={setPlayerTwo} />
			</div>
			{playerOne && playerTwo && (
				<div>
					<button>Battle</button>
				</div>
			)}
		</section>
	)
}

export default Battle
