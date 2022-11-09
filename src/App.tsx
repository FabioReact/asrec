import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { lazy, Suspense, useState } from 'react'
import { Provider } from 'react-redux'
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom'
import { getHeroById } from './api/heroes'
import './App.css'
import Spinner from './components/Spinner/Spinner'
import ProfileContext from './context/profile-context'
import Layout from './hoc/Layout'
import { store } from './redux/store'
import { Hero } from './types/hero'

const Heroes = lazy(() => import('./pages/Heroes'))
const Battle = lazy(() => import('./pages/Battle'))
const HeroDetails = lazy(() => import('./pages/HeroDetails'))
const Counter = lazy(() => import('./pages/Counter/Counter'))
const Profile = lazy(() => import('./pages/Profile'))
const Search = lazy(() => import('./pages/Search'))
const Login = lazy(() => import('./pages/Login'))
const Register = lazy(() => import('./pages/Register'))

const queryClient = new QueryClient()

// import { redirect } from "react-router-dom";

// const loader = async () => {
//   const user = await getUser();
//   if (!user) {
//     return redirect("/login");
//   }
// };

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<Layout />}>
			<Route path='heroes' element={<Heroes />} />
			<Route
				path='heroes/:id'
				element={<HeroDetails />}
				loader={async ({ params }) => {
					const id = params.id || ''
					const hero = await getHeroById(id)
					return hero
				}}
				errorElement={<p>Oops, we have a problem :/</p>}
			/>
			<Route path='battle' element={<Battle />} />
			<Route path='search' element={<Search />} />
			<Route path='counter' element={<Counter />} />
			<Route path='profile' element={<Profile />} />
			<Route path='login' element={<Login />} />
			<Route path='register' element={<Register />} />
		</Route>,
	),
)

function App() {
	const [favoriteHero, setFavoriteHero] = useState<Hero | null>(null)
	return (
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<Suspense fallback={<Spinner />}>
					<ProfileContext.Provider
						value={{
							favoriteHero,
							setFavoriteHero,
						}}
					>
						<RouterProvider router={router} />
					</ProfileContext.Provider>
				</Suspense>
			</QueryClientProvider>
		</Provider>
	)
}

export default App
