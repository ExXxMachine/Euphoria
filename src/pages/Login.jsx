import { useState } from 'react'
import classesSingUp from '../app/style/css/SingUp.module.css'
import LoginImg from '../app/style/img/LoginImg.jpg'
import { Link } from 'react-router-dom'


const Login = () => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')
	async function handleContactSubmit(e) {
		e.preventDefault()
	}

	const usernameChange = event => {
		setUsername(event.target.value)
	}
	const passwordChange = event => {
		setPassword(event.target.value)
	}

	const data = {
		username: '',
		password: '',
	}
	const submit = e => {
		e.preventDefault()
		data.username = username
		data.password = password

		fetch('https://fakestoreapi.com/auth/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then(res => {
				if (res.status === 401) {
					setError('Username or password is incorrect')
				} else {
					localStorage.setItem('flag', 1)
					window.location.href = '/'
				}
			})
			.catch(error => {
				console.error('Error:', error)
			})
	}

	const mod = {
		color: 'red',
	}
	return (
		<div className={classesSingUp.container}>
			<img src={LoginImg} alt='Img' className={classesSingUp.singUp__img} />
			<form className={classesSingUp.form__SingUp} action={<Login />}>
				<h1 className={classesSingUp.form__title}>Sign In Page</h1>
				<p className={classesSingUp.form__p}>
					Sign up for free to access to in any of our products{' '}
				</p>
				<div className={classesSingUp.input__block}>
					<label for='login'>User Name</label>
					<input
						name='login'
						required
						className={classesSingUp.form__input}
						value={username}
						onChange={usernameChange}
					/>
					<p className={classesSingUp.form__p} style={mod}>
						{error}
					</p>
				</div>
				<div className={classesSingUp.input__block}>
					<label for='password'>Password</label>
					<input
						type='password'
						name='login'
						value={password}
						onChange={passwordChange}
						required
						className={classesSingUp.form__input}
					/>
					<p className={classesSingUp.form__p}>
						Use 8 or more characters with a mix of letters, numbers & symbols
					</p>
				</div>

				<button
					type='submit'
					id='submit'
					onClick={submit}
					onChange={handleContactSubmit}
					className={classesSingUp.form__btn}
				>
					Sign In
				</button>
				<Link to='/singUp' className={classesSingUp.SingUp__link}>
					Don’t have an account? Sign up
				</Link>
			</form>
		</div>
	)
}

export { Login }
