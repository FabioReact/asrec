import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Hero } from '../types/hero'
import { UserRequest, UserResponse } from '../types/user'

// Define a service using a base URL and expected endpoints
export const heroesApi = createApi({
	reducerPath: 'heroesApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000' }),
	endpoints: (builder) => ({
		getHeroById: builder.query<Hero, string>({
			query: (id) => `heroes/${id}`,
		}),
		register: builder.mutation<UserResponse, UserRequest>({
			query: (user) => ({
				url: 'users',
				method: 'POST',
				body: user,
			}),
		}),
	}),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetHeroByIdQuery, useRegisterMutation } = heroesApi
