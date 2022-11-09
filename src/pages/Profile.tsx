import { useContext } from 'react'
import HeroCard from '../components/HeroCard/HeroCard'
import SelectPlayer from '../components/SelectPlayer/SelectPlayer'
import ProfileContext from '../context/profile-context'

const Profile = () => {
	const { favoriteHero, setFavoriteHero } = useContext(ProfileContext)
	return (
		<section>
			<h1>Profile</h1>
			<div className='max-w-md mx-auto text-center'>
				{favoriteHero && <HeroCard hero={favoriteHero} />}
				<SelectPlayer onSelect={setFavoriteHero} />
			</div>
		</section>
	)
}

export default Profile
