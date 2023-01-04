import { useLoaderData, useParams } from 'react-router-dom'
import HeroCard from '../components/HeroCard/HeroCard'
import Spinner from '../components/Spinner/Spinner'
import { useSearchHero } from '../hooks/useSearchHero'
import { useGetHeroByIdQuery } from '../redux/api'
import { Hero } from '../types/hero'

const HeroDetails = () => {
	// const hero = useLoaderData() as Hero
	const { id } = useParams()
	const { isLoading, error, data: hero } = useGetHeroByIdQuery(id || '')
	// const { error, hero, isLoading } = useSearchHero(id!)
	return (
		<section className='flex flex-col items-center'>
			<h1>Hero Details</h1>
			{isLoading && <Spinner />}
			{error && <p className='text-red-500'>{error as string}</p>}
			{hero && <HeroCard hero={hero} />}
			{/* <HeroCard hero={hero} /> */}
		</section>
	)
}

export default HeroDetails
