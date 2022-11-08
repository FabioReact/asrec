import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './hoc/Layout'
import Battle from './pages/Battle'
import HeroDetails from './pages/HeroDetails'
// import Counter from './components/Counter/Counter'
import Heroes from './pages/Heroes'

const queryClient = new QueryClient()

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="heroes" element={<Heroes />} />
      <Route path="heroes/:id" element={<HeroDetails />} />
      <Route path="battle" element={<Battle />} />
    </Route>
  )
);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App
