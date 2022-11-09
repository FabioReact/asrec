import { createContext } from 'react'
import { Hero } from '../types/hero'

const ProfileContext = createContext<{
	favoriteHero: Hero | null
	setFavoriteHero: React.Dispatch<React.SetStateAction<Hero | null>>
}>({
	favoriteHero: null,
	setFavoriteHero: () => {
		null
	},
})

export default ProfileContext
