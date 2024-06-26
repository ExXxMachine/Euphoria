import classesHeader from '../style/Header.module.css'
import Logo from '../style/img/Logo.svg'
import Search from '../style/img/search.svg'
import Heart from '../style/img/heart.svg'
import Cart from '../style/img/shoppingCart.svg'
import User from '../style/img/user.svg'

const Header = () => {
	return (
		<header>
			<div className={classesHeader.nav__block}>
				<img src={Logo} alt='logo' className={classesHeader.logo} />
				<nav className={classesHeader.nav__menu}>
					<ul className={classesHeader.nav__ul}>
						<li className={classesHeader.nav__link}>
							<a href='#' className={classesHeader.nav__a}>
								Shop
							</a>
						</li>
						<li className={classesHeader.nav__link}>
							<a href='#' className={classesHeader.nav__a}>
								Men
							</a>
						</li>
						<li className={classesHeader.nav__link}>
							<a href='#' className={classesHeader.nav__a}>
								Women
							</a>
						</li>
						<li className={classesHeader.nav__link}>
							<a href='#' className={classesHeader.nav__a}>
								Combos
							</a>
						</li>
						<li className={classesHeader.nav__link}>
							<a href='#' className={classesHeader.nav__a}>
								Joggers
							</a>
						</li>
					</ul>
				</nav>
				<form action='' method='get' className={classesHeader.search__form}>
					<img
						src={Search}
						alt='search__logo'
						className={classesHeader.search__logo}
					/>
					<input
						name='s'
						placeholder='Search'
						type='search'
						className={classesHeader.search__input}
					/>
				</form>
				<nav className={classesHeader.user__nav}>
					<button className={classesHeader.user__btn}>
						<img src={Heart} alt='Heart__logo' />
					</button>
					<button className={classesHeader.user__btn}>
						<img src={User} alt='User__logo' />
					</button>
					<button className={classesHeader.user__btn}>
						<img src={Cart} alt='Cart__logo' />
					</button>
				</nav>
			</div>
		</header>
	)
}

export { Header }
