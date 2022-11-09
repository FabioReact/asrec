import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Hero } from '../../types/hero'

export interface ProfileState {
	favoriteHero: Hero | null
	username: string | null
	connected: boolean
}

const initialState: ProfileState = {
	favoriteHero: null,
	username: null,
	connected: false,
}

export const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		setFavoriteHero: (state, action: PayloadAction<Hero | null>) => {
			state.favoriteHero = action.payload
		},
		login: (state, action: PayloadAction<string>) => {
			state.username = action.payload
			state.connected = true
		},
		logout: (state) => {
			state.username = null
			state.connected = false
		},
	},
})

// Action creators are generated for each case reducer function
export const { setFavoriteHero, login, logout } = profileSlice.actions

export default profileSlice.reducer
