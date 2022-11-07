import { Fragment, useState } from "react"

const Counter = () => {
  const [count, setCount] = useState(0)

	const increment = () => {
    setCount(c => c + 1)
  }

	return (
		<Fragment>
			<p>Count: {count}</p>
			<button onClick={increment}>Incrementer</button>
		</Fragment>
	)
}

export default Counter
