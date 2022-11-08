import { Link } from 'react-router-dom'

type HeroLabelProps = {
	id: string
	name: string
}

const HeroLabel = ({ id, name }: HeroLabelProps) => {
	return (
		<Link to={id} className='block'>
			<span className="font-semibold text-gray-500 pr-2 my-2">#{id}</span>
			{name}
		</Link>
	)
}

export default HeroLabel