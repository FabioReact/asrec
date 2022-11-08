import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './hoc/Layout'
import HeroDetails from './pages/HeroDetails'
// import Counter from './components/Counter/Counter'
import Heroes from './pages/Heroes'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="heroes" element={<Heroes />} />
      <Route path="heroes/:id" element={<HeroDetails />} />
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
