import { SubmitHandler, useForm } from 'react-hook-form'
import { useRegisterMutation } from '../redux/api'

type Inputs = {
	email: string
	password: string
}

const Register = () => {
	const { register, handleSubmit } = useForm<Inputs>()
	const [addUser, { data, isLoading, error }] = useRegisterMutation()
	const onSubmitHandler: SubmitHandler<Inputs> = ({ email, password }) => {
		addUser({
			email,
			password,
		})
	}

	return (
		<section className='flex flex-col items-center'>
			<h1>Register</h1>
			<form onSubmit={handleSubmit(onSubmitHandler)}>
				<fieldset>
					<label htmlFor='email'>Email</label>
					<input type='email' id='email' {...register('email')} />
				</fieldset>
				<fieldset>
					<label htmlFor='password'>Password</label>
					<input type='password' id='password' {...register('password')} />
				</fieldset>
				<button>Register</button>
			</form>
		</section>
	)
}

export default Register
