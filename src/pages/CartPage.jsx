import React from 'react'
import { Link } from 'react-router-dom'
import classesCartPage from '../app/style/css/CartPage.module.css'
import { CartList } from '../components/CartList'

const CartPage = () => {
	return (
		<>
			{localStorage.getItem('flag') == '0' ? (
				<div className={classesCartPage.cartPage__block}>
					<p className={classesCartPage.cartPage__p}>
						Please fill in the fields below and click place order to complete
						your purchase!
					</p>
					<Link to='/login' className={classesCartPage.cartPage__link}>
						<span className={classesCartPage.cartPage__p}>
							Already registered?{' '}
						</span>
						Please login here
					</Link>
				</div>
			) : (
				<></>
			)}
			<div className={classesCartPage.cardList__title}>
				<div className={classesCartPage.divBlock}>
					<p className={classesCartPage.cartList__p}>PRODUCT DETAILS</p>
				</div>
				<p className={classesCartPage.cartList__p}>PRICE</p>
				<p className={classesCartPage.cartList__p}>QUANTITY</p>
				<p className={classesCartPage.cartList__p}>SUBTOTAL</p>
				<p className={classesCartPage.cartList__p}>ACTION</p>
			</div>
			<CartList />
		</>
	)
}

export { CartPage }
