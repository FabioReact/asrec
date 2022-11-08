import { Link } from 'react-router-dom'

type HeroLabelProps = {
	id: string
	name: string
	onClick?: any
}

const HeroLabel = ({ id, name, onClick = () => {} }: HeroLabelProps) => {
	return (
		<p onClick={onClick}>
			<span className="font-semibold text-gray-500 pr-2 my-2">#{id}</span>
			{name}
		</p>
	)
}

export default HeroLabel