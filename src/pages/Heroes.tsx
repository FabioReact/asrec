import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import HeroCard from '../components/HeroCard/HeroCard'
// import HeroLabel from "../components/HeroLabel/HeroLabel"
import Spinner from '../components/Spinner/Spinner'
import { Hero } from '../types/hero'

const Heroes = () => {
	const [searchParams, setSearchParams] = useSearchParams()
	const mountedRef = useRef(false)
	const [selectedLetter, setSelectedLetter] = useState(searchParams.get('q') || 'A')
	const [heroes, setHeroes] = useState<Hero[]>([])
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState('')

	useEffect(() => {
		console.log('Creation du composant Heroes')
		return () => {
			console.log('Destruction avec tableau de dependance vide')
		}
	}, [])

	useEffect(() => {
		console.log('Création et Mise à jour de selectedLetter')
		if (mountedRef.current) {
			console.log('Uniquement mise à jour de selectedLetter')
		}
		const controller = new AbortController()
		if (error.length) {
			setError('')
		}
		axios
			.get(`http://localhost:4000/heroes?name_like=^${selectedLetter}`, {
				signal: controller.signal,
			})
			.then((res) => {
				setHeroes(res.data)
				setIsLoading(false)
			})
			.catch((e) => {
				if (e.name !== 'CanceledError') setError(e.message)
			})
		mountedRef.current = true
		return () => {
			// Ne pas oublier de se désabonner / annuler les appels http en cours
			controller.abort()
			console.log('Destruction lors du changement de selectedLetter')
		}
	}, [selectedLetter])

	const onClickLetter = (letter: string) => {
		if (letter !== selectedLetter) {
			setSearchParams({
				q: letter,
			})
			setSelectedLetter(letter)
			setIsLoading(true)
		}
	}

	const letters = []
	for (let i = 65; i < 91; i++) {
		letters.push(String.fromCharCode(i))
	}

	return (
		<>
			<h1>Heroes List</h1>
			<ul className='flex justify-center gap-2 font-semibold text-xl mb-5'>
				{letters.map((letter) => (
					<li
						className={selectedLetter === letter ? 'text-red-600 cursor-pointer' : 'cursor-pointer'}
						key={letter}
						onClick={() => onClickLetter(letter)}
					>
						{letter}
					</li>
				))}
			</ul>
			<div className='flex flex-col items-center'>
				{error && <p className='text-red-500'>Houston, we have a problem: {error}</p>}
				{isLoading && <Spinner />}
			</div>
			<div className='flex flex-wrap gap-4 justify-center'>
				{!isLoading &&
					heroes.map((hero) => (
						// <HeroLabel
						// 	key={hero.id}
						// 	id={hero.id}
						// 	name={hero.name}
						// 	onClick={() => navigate(hero.id)}
						// />
						<Link to={`${hero.id}`} key={hero.id}>
							<HeroCard hero={hero} />
						</Link>
					))}
			</div>
		</>
	)
}

export default Heroes
