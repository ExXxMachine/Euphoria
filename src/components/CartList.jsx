import React from 'react'
import { CartConstructor } from './CartConstructor'
import classesCartList from '../app/style/css/CartList.module.css'

const CartList = () => {
	const carts = JSON.parse(localStorage.getItem('orders'))
	return (
		<div className={classesCartList.container}>
			<div className={classesCartList.cardList__title}>
				<div className={classesCartList.divBlock}>
					<p className={classesCartList.cartList__p}>PRODUCT DETAILS</p>
				</div>
				<p className={classesCartList.cartList__p}>PRICE</p>
				<p className={classesCartList.cartList__p}>QUANTITY</p>
				<p className={classesCartList.cartList__p}>SUBTOTAL</p>
				<p className={classesCartList.cartList__p}>ACTION</p>
			</div>
			{carts.map((cart, index) => (
				<CartConstructor props={cart} key={index} />
			))}
		</div>
	)
}

export { CartList }
