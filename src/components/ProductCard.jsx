import classesProductCard from '../style/css/ProductCard.module.css'
import { Link } from 'react-router-dom'
const ProductCard = props => {
	return (
		<div className={classesProductCard.productCard__block}>
			<Link
				to='/product'
				state={props}
				className={classesProductCard.productCard__a}
			>
				<img
					src={props.props.image}
					alt='cardImg'
					className={classesProductCard.productCard__img}
				/>
				<div className={classesProductCard.productCard__info}>
					<h4>{props.props.title}</h4>
					<div className={classesProductCard.productCard__price}>
						$ {props.props.price}
					</div>
				</div>
			</Link>
		</div>
	)
}

export { ProductCard }
