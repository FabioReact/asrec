import { useContext, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import HeroCard from '../components/HeroCard/HeroCard'
import SelectPlayer from '../components/SelectPlayer/SelectPlayer'
import ProfileContext from '../context/profile-context'
import { useAppSelector } from '../redux/hooks'
import { logout } from '../redux/slices/profileSlice'

const Profile = () => {
	const { favoriteHero, setFavoriteHero } = useContext(ProfileContext)
	const { connected } = useAppSelector((state) => state.profile)
	const navigate = useNavigate()

	useEffect(() => {
		if (!connected) {
			navigate('/login')
		}
	}, [connected])

	const dispatch = useDispatch()
	const onLogout = () => {
		dispatch(logout())
	}

	return (
		<section className='max-w-md mx-auto text-center'>
			<h1>Profile</h1>
			<button onClick={onLogout}>Logout</button>
			<div>
				{favoriteHero && <HeroCard hero={favoriteHero} />}
				<SelectPlayer onSelect={setFavoriteHero} />
			</div>
		</section>
	)
}

export default Profile
