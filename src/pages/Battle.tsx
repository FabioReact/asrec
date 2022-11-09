import { useContext, useState } from 'react'
import HeroCard from '../components/HeroCard/HeroCard'
import SelectPlayer from '../components/SelectPlayer/SelectPlayer'
import ProfileContext from '../context/profile-context'
import { Hero } from '../types/hero'

const Battle = () => {
	const { favoriteHero } = useContext(ProfileContext)
	const [playerOne, setPlayerOne] = useState<Hero | null>(favoriteHero)
	const [playerTwo, setPlayerTwo] = useState<Hero | null>(null)

	return (
		<section>
			<h1>Battle</h1>
			<div className='flex justify-center gap-24'>
				<SelectPlayer label='One' onSelect={setPlayerOne} />
				<SelectPlayer label='Two' onSelect={setPlayerTwo} />
			</div>
			<div className='flex justify-center gap-24'>
				{playerOne && <HeroCard hero={playerOne} />}
				{playerTwo && <HeroCard hero={playerTwo} />}
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
