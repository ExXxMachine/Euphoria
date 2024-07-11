import classesHomePage from '../app/style/css/HomePage.module.css'

const DealComponent = props => {
	const container = {
		backgroundImage: `url(${props.background})`,
	}
	return (
		<div className={classesHomePage.deals__cart} style={container}>
			<div className={classesHomePage.deal__textContainer}>
				<h3 className={classesHomePage.deal__promotion}>{props.promotion}</h3>
				<h2 className={classesHomePage.deal__textDeal}>{props.textDeal}</h2>
				<h3 className={classesHomePage.deal__upto}>UPTO {props.upto}% OFF</h3>
				<a href='#' className={classesHomePage.deal__a}>
					Explore Items
				</a>
			</div>
		</div>
	)
}

export {DealComponent}
