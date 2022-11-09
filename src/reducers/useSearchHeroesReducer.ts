import { Hero } from '../types/hero'

export enum ActionNames {
	SET_HEROES = 'SET_HEROES',
	SET_ERROR = 'SET_ERROR',
	SET_LOADING = 'SET_LOADING',
}

type ReducerAction = {
	type: ActionNames.SET_HEROES
	payload: Hero[]
} | {
	type: ActionNames.SET_ERROR
	payload: string
} | {
	type: ActionNames.SET_LOADING
}

type State = {
	heroes: Hero[] | null
	isLoading: boolean
	error: string
}

export const useSearchHeroesReducer = (state: State, action: ReducerAction): State => {
	switch (action.type) {
		case ActionNames.SET_LOADING:
			return {
				error: '',
				isLoading: true,
				heroes: null,
			}
		case ActionNames.SET_HEROES:
			return {
				...state,
				isLoading: false,
				heroes: action.payload,
			}
		case ActionNames.SET_ERROR:
			return {
				...state,
				error: action.payload,
				isLoading: false,
			}
		default:
			throw new Error('useSearchHeroes - Invalid Action Type')
	}
}
