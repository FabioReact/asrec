import React, { Fragment, useCallback, useState } from "react"

type ButtonProps = {
	children: string
	onClick: any
}

const Button = ({ onClick, children }: ButtonProps) => {
	console.log('Render of Button ', children)
	return (
		<button onClick={onClick}>{children}</button>
	)
}

const MenoizedButton = React.memo(Button)


const Title = ({ title }: { title: string }) => {
	// console.log('Render of Title Component')
	return (
		<h1>{title}</h1>
	)
}

const MenoizedTitle = React.memo(Title)

const Counter = () => {
  const [count, setCount] = useState(0)
	const [stop, setStop] = useState(false)

	console.log('Rendu de counter')

	const memoizedIncrement = useCallback(() => setCount(c => c + (!stop ? 1 : 0)), [stop])
	// const increment = () => {
  //   setCount(c => c + 1)
  // }

	return (
		<Fragment>
			<MenoizedTitle title='Counter Component' />
			<p>Count: {count}</p>
			<button onClick={() => setStop(b => !b)}>Freeze</button>
			<MenoizedButton onClick={memoizedIncrement}>Incrementer</MenoizedButton>
		</Fragment>
	)
}

export default Counter
