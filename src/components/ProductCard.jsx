import classesProductCard from '../style/ProductCard.module.css'
const ProductCard = props => {
	return (
		<div className={classesProductCard.productCard__block}>
			<a href='#' className={classesProductCard.productCard__a}>
				<img
					src={props.img}
					alt='cardImg'
					className={classesProductCard.productCard__img}
				/>
				<div className={classesProductCard.productCard__info}>
					<h4>{props.title}</h4>
					<div className={classesProductCard.productCard__price}>
						$ {props.price}
					</div>
				</div>
			</a>
		</div>
	)
}

export { ProductCard }
