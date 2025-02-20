import classesSingUp from '../app/style/css/SingUp.module.css'
import SingUpImg from '../app/style/img/SingUpImg.jpg'
import { Link } from 'react-router-dom'
const SingUp = () => {
	return (
		<div className={classesSingUp.container}>
			<img src={SingUpImg} alt='Img' className={classesSingUp.singUp__img} />
			<form className={classesSingUp.form__SingUp} action={<SingUp />}>
				<h1 className={classesSingUp.form__title}>Sign Up</h1>
				<p className={classesSingUp.form__p}>
					Sign up for free to access to in any of our products{' '}
				</p>
				<div className={classesSingUp.input__block}>
					<label for='login'>User Name</label>
					<input name='login' required className={classesSingUp.form__input} />
					<p className={classesSingUp.form__p}></p>
				</div>
				<div className={classesSingUp.input__block}>
					<label for='password'>Password</label>
					<input
						type='password'
						name='login'
						required
						className={classesSingUp.form__input}
					/>
					<p className={classesSingUp.form__p}>
						Use 8 or more characters with a mix of letters, numbers & symbols
					</p>
				</div>

				<button type='submit' id='submit' className={classesSingUp.form__btn}>
					Sing up
				</button>
				<Link to='/login' className={classesSingUp.SingUp__link}>
					Already have an account? Log in
				</Link>
			</form>
		</div>
	)
}

export { SingUp }
