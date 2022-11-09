import { NavLink, Outlet } from 'react-router-dom'
import { useAppSelector } from '../redux/hooks'

const Layout = () => {
	const getActiveClassName = ({ isActive }: { isActive: boolean }) =>
		isActive ? 'text-red-600' : ''

	const { connected } = useAppSelector((state) => state.profile)

	return (
		<>
			<header>
				<nav>
					<ul className='flex justify-center gap-4 text-xl'>
						<li>
							<NavLink to='/' className={getActiveClassName}>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink to='battle' className={getActiveClassName}>
								Battle
							</NavLink>
						</li>
						<li>
							<NavLink to='heroes' className={getActiveClassName}>
								Heroes
							</NavLink>
						</li>
						<li>
							<NavLink to='search' className={getActiveClassName}>
								Search
							</NavLink>
						</li>
						{connected && (
							<li>
								<NavLink to='profile' className={getActiveClassName}>
									Profile
								</NavLink>
							</li>
						)}
						<li>
							<NavLink to='counter' className={getActiveClassName}>
								Counter
							</NavLink>
						</li>
						{!connected && (
							<>
								<li>
									<NavLink to='login' className={getActiveClassName}>
										Login
									</NavLink>
								</li>
								<li>
									<NavLink to='register' className={getActiveClassName}>
										Register
									</NavLink>
								</li>
							</>
						)}
					</ul>
				</nav>
			</header>
			<Outlet />
			<footer>Copyright</footer>
		</>
	)
}

export default Layout
