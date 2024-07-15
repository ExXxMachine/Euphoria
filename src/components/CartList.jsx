import React, { useState, useEffect } from 'react'
import { CartConstructor } from './CartConstructor'
import classesCartList from '../app/style/css/CartList.module.css'

const CartList = () => {
	const [carts, setCarts] = useState([])

	useEffect(() => {
		const savedCarts = JSON.parse(localStorage.getItem('orders')) || []
		setCarts(savedCarts)
	}, [])

	const handleRemove = (title, size) => {
		const updatedCarts = carts.filter(
			cart => !(cart.title === title && cart.size === size)
		)
		setCarts(updatedCarts)
		localStorage.setItem('orders', JSON.stringify(updatedCarts))
	}

	return (
		<div className={classesCartList.container}>
			{carts.length == 0 ? (
				<p className={classesCartList.cart__emptyList}>There are no items in the cart</p>
			) : (
				carts.map((cart, index) => (
					<CartConstructor props={cart} key={index} onRemove={handleRemove} />
				))
			)}
		</div>
	)
}

export { CartList }
