import { NavLink, Outlet } from 'react-router-dom'

const Layout = () => {

	const getActiveClassName = ({ isActive }: { isActive: boolean }) => isActive ? 'text-red-600' : ''

	return (
		<>
			<header>
				<nav>
					<ul className='flex justify-center gap-2 text-xl font-semibold'>
						<li>
							<NavLink to="/" className={getActiveClassName}>Home</NavLink>
						</li>
						<li>
							<NavLink to="battle" className={getActiveClassName}>Battle</NavLink>
						</li>
						<li>
							<NavLink to="heroes" className={getActiveClassName}>Heroes</NavLink>
						</li>
						<li>
							<NavLink to="counter" className={getActiveClassName}>Counter</NavLink>
						</li>
					</ul>
				</nav>
			</header>
			<Outlet />
			<footer>Copyright</footer>
		</>
	)
}

export default Layout
