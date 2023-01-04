import { useDispatch } from 'react-redux'
import { login } from '../redux/slices/profileSlice'
import { SubmitHandler, useForm } from 'react-hook-form'

type Inputs = {
	username: string
}

const Login = () => {
	const { register, handleSubmit } = useForm<Inputs>()
	const dispatch = useDispatch()
	const onSubmitHandler: SubmitHandler<Inputs> = ({ username }) => {
		// e.preventDefault()
		// Verification aupres du backend
		dispatch(login(username))
	}

	return (
		<section className='flex flex-col items-center'>
			<h1>Login</h1>
			<form onSubmit={handleSubmit(onSubmitHandler)}>
				<fieldset>
					<label htmlFor='username'></label>
					<input type='text' id='username' {...register('username')} />
				</fieldset>
				<button>Login</button>
			</form>
		</section>
	)
}

export default Login
