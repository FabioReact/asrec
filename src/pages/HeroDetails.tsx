import { useLoaderData, useParams } from "react-router-dom"
import HeroCard from '../components/HeroCard/HeroCard'
import Spinner from '../components/Spinner/Spinner'
import { useSearchHero } from '../hooks/useSearchHero'
import { Hero } from '../types/hero'

const HeroDetails = () => {
	const hero = useLoaderData() as Hero
	// const { id } = useParams()
	// const { error, hero, isLoading } = useSearchHero(id!)
	return (
		<section>
			<h1>Hero Details</h1>
			{/* {isLoading && <Spinner />} */}
			{/* {error && <p className="text-red-500">{error}</p>} */}
			{/* {hero && <HeroCard hero={hero} />} */}
			<HeroCard hero={hero} />
		</section>
	)
}

export default HeroDetails
