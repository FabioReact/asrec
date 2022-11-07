import classes from './button.module.css'

// https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example
type Props = {
	children?: string
}

const Button = ({ children = 'Default Button' }: Props) => {
	// const styles = {
	// 	backgroundColor: 'black',
	// 	color: 'white',
	// 	borderWidth: '0px',
	// }

	return (
		// <button style={styles}>
		<button className={classes.button}>
			{children}
		</button>
	)
}

export default Button