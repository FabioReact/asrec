type HeroLabelProps = {
	id: string
	name: string
	onClick: () => void
}

const HeroLabel = ({
	id,
	name,
	onClick = () => {
		null
	},
}: HeroLabelProps) => {
	return (
		<p
			className='border rounded p-2 my-1 border-gray-700 cursor-pointer hover:bg-gray-100'
			onClick={onClick}
		>
			<span className='font-semibold text-gray-500 pr-2 my-2'>#{id}</span>
			{name}
		</p>
	)
}

export default HeroLabel
