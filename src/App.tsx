import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { lazy, Suspense } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { getHeroById } from './api/heroes'
import './App.css'
import Spinner from './components/Spinner/Spinner'
import Layout from './hoc/Layout'

const Heroes = lazy(() => import('./pages/Heroes'))
const Battle = lazy(() => import('./pages/Battle'))
const HeroDetails = lazy(() => import('./pages/HeroDetails'))
const Counter = lazy(() => import('./pages/Counter/Counter'))

const queryClient = new QueryClient()

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="heroes" element={<Heroes />} />
      <Route
        path="heroes/:id"
        element={<HeroDetails />}
        loader={async ({ params }) => {
          const id = params.id || ''
          const hero = await getHeroById(id)
          return hero
        }}
        errorElement={<p>Oops, we have a problem :/</p>}
      />
      <Route path="battle" element={<Battle />} />
      <Route path="counter" element={<Counter />} />
    </Route>
  )
);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<Spinner />}>
        <RouterProvider router={router} />
      </Suspense>
    </QueryClientProvider>
  )
}

export default App
