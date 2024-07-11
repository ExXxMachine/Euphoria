import React from 'react'
import classesCartConstructor from '../app/style/css/CartConstructor.module.css'

const CartConstructor = props => {
	return (
		<div className={classesCartConstructor.cartBlock}>
			<div className={classesCartConstructor.cart__titleBlock}>
				<img
					className={classesCartConstructor.cart__img}
					src={props.props.image}
					alt='productImg'
				/>
				<div className={classesCartConstructor.cart__infoBlock}>
					<p className={classesCartConstructor.cart__p}>{props.props.title}</p>
					<p className={classesCartConstructor.cart__p}>
						Size: {props.props.size}
					</p>
				</div>
			</div>
			<p className={classesCartConstructor.cart__p}>$ {props.props.price}</p>
			<p className={classesCartConstructor.cart__p}>{props.props.count}</p>
			<p className={classesCartConstructor.cart__p}>
				$ {props.props.count * props.props.price}
			</p>
			<button>-</button>
		</div>
	)
}

export { CartConstructor }
