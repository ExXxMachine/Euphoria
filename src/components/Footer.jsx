import classesFooter from '../app/style/css/Footer.module.css'
import FB from '../app/style/img/FB.svg'
import Inst from '../app/style/img/inst.svg'
import Tw from '../app/style/img/tw.svg'
import In from '../app/style/img/in.svg'
import Gplay from '../app/style/img/Gplay.svg'
import AS from '../app/style/img/appStore.svg'
const Footer = () => {
	return (
		<footer>
			<div className={classesFooter.footer__infoBlock}>
				<div className={classesFooter.footer__infoColumn}>
					<h2>Need Help</h2>
					<a href='' className={classesFooter.footer__a}>
						Contact Us
					</a>
					<a href='' className={classesFooter.footer__a}>
						Track Order
					</a>
					<a href='' className={classesFooter.footer__a}>
						Returns & Refunds
					</a>
					<a href='' className={classesFooter.footer__a}>
						FAQ's
					</a>
					<a href='' className={classesFooter.footer__a}>
						Career
					</a>
				</div>
				<div className={classesFooter.footer__infoColumn}>
					<h2>Company</h2>
					<a href='' className={classesFooter.footer__a}>
						About Us
					</a>
					<a href='' className={classesFooter.footer__a}>
						euphoria Blog
					</a>
					<a href='' className={classesFooter.footer__a}>
						euphoriastan
					</a>
					<a href='' className={classesFooter.footer__a}>
						Collaboration
					</a>
					<a href='' className={classesFooter.footer__a}>
						Media
					</a>
				</div>
				<div className={classesFooter.footer__infoColumn}>
					<h2>More Info</h2>
					<a href='' className={classesFooter.footer__a}>
						Term and Conditions
					</a>
					<a href='' className={classesFooter.footer__a}>
						Privacy Policy
					</a>
					<a href='' className={classesFooter.footer__a}>
						Shipping Policy
					</a>
					<a href='' className={classesFooter.footer__a}>
						Sitemap
					</a>
				</div>
				<div className={classesFooter.footer__infoColumn}>
					<h2>Location</h2>
					<p className={classesFooter.footer__p}>support@euphoria.in</p>
					<p className={classesFooter.footer__p}>
						Eklingpura Chouraha, Ahmedabad Main Road
					</p>
					<p className={classesFooter.footer__p}>
						(NH 8- Near Mahadev Hotel) Udaipur, India- 313002
					</p>
				</div>
			</div>
			<div className={classesFooter.footer__mediaBlock}>
				<div className={classesFooter.footer__social}>
					<img src={FB} alt='facebook' />
					<img src={Inst} alt='inst' />
					<img src={Tw} alt='Tw' />
					<img src={In} alt='in' />
				</div>
				<div>
					<h2>Download The App </h2>
					<img src={Gplay} alt='Gplay' />
					<img src={AS} alt='appStore' />
				</div>
			</div>
			<p className={classesFooter.footer__p}>
				Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.
			</p>
		</footer>
	)
}

export { Footer }
