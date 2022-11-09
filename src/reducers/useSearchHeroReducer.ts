import { Hero } from '../types/hero'

export enum ActionNames {
	SET_HERO = 'SET_HERO',
	SET_ERROR = 'SET_ERROR',
}

type ReducerAction =
	| {
			type: ActionNames.SET_HERO
			payload: Hero
	  }
	| {
			type: ActionNames.SET_ERROR
			payload: string
	  }

type State = {
	hero: Hero | null
	isLoading: boolean
	error: string
}

export const useSearchHeroReducer = (state: State, action: ReducerAction): State => {
	switch (action.type) {
		case ActionNames.SET_HERO:
			return {
				error: '',
				isLoading: false,
				hero: action.payload,
			}
		case ActionNames.SET_ERROR:
			return {
				error: action.payload,
				isLoading: false,
				hero: null,
			}
		default:
			throw new Error('useSearchHero - Invalid Action Type')
	}
}
