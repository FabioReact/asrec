import { Fragment, useState } from 'react'
import './App.css'
import Counter from './components/Counter/Counter'
import Heroes from './pages/Heroes'

function App() {
  return (
    <Fragment>
      <Counter />
      <Heroes />
    </Fragment>
  )
}

export default App
