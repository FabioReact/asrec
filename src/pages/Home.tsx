import { Link } from 'react-router-dom'

const Home = () => {
	return (
		<section className='flex flex-col items-center'>
			<h1>The arena where Hulk can challenge Yoda!</h1>
			<Link to='/battle' className='btn'>
				Battle
			</Link>
		</section>
	)
}

export default Home
