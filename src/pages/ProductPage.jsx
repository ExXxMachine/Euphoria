import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import classesProduct from '../app/style/css/ProductPage.module.css'
import Rating from '../app/style/img/score.svg'
import Comment from '../app/style/img/commentIco.svg'
import addImg from '../app/style/img/add.svg'
import classesHomePage from '../app/style/css/HomePage.module.css'
const ProductPage = () => {
	const [size, setSize] = useState('')

	const sizeChange = event => {
		setSize(event.target.value)
	}
	if (JSON.parse(localStorage.getItem('orders')) == null) {
		localStorage.setItem('orders', JSON.stringify([]))
	}

	const location = useLocation()
	const state = location.state.props

	const addOrders = () => {
		const localState = JSON.parse(localStorage.getItem('orders')) || []
		let orderFound = false

		localState.forEach((element, index) => {
			if (element.title == state.title && element.size == size) {
				localState[index].count += 1
				localStorage.setItem('orders', JSON.stringify(localState))
				orderFound = true
				return
			}
		})

		if (!orderFound) {
			const newOrder = {
				title: state.title,
				price: state.price,
				image: state.image,
				count: 1,
				size: size,
			}
			localState.push(newOrder)
			localStorage.setItem('orders', JSON.stringify(localState))
		}
	}

	return (
		<div className={classesProduct.product__container}>
			<img
				src={state.image}
				alt='ProductImg'
				className={classesProduct.product__img}
			/>
			<div className={classesProduct.product__infoBlock}>
				<h1 className={classesProduct.product__title}>{state.title}</h1>
				<div className={classesProduct.product__rating}>
					<img src={Rating} alt='rating' />{' '}
					<p className={classesProduct.product__ratingP}>{state.rating.rate}</p>
					<img src={Comment} alt='commentIco' />
					<p className={classesProduct.product__ratingP}>
						{state.rating.count} comment
					</p>
				</div>
				<div className={classesProduct.product__sizeBlock}>
					<p className={classesProduct.product__ratingP}>Select Size</p>
					<div className={classesProduct.product__sizeConfirm}>
						<button
							value={'xs'}
							onClick={e => {
								sizeChange(e)
							}}
							className={classesProduct.product__sizeBtn}
						>
							XS
						</button>
						<button
							value={'s'}
							onClick={e => {
								sizeChange(e)
							}}
							className={classesProduct.product__sizeBtn}
						>
							S
						</button>
						<button
							value={'m'}
							onClick={e => {
								sizeChange(e)
							}}
							className={classesProduct.product__sizeBtn}
						>
							M
						</button>
						<button
							value={'l'}
							onClick={e => {
								sizeChange(e)
							}}
							className={classesProduct.product__sizeBtn}
						>
							L
						</button>
						<button
							value={'xl'}
							onClick={e => {
								sizeChange(e)
							}}
							className={classesProduct.product__sizeBtn}
						>
							XL
						</button>
					</div>
				</div>
				<div className={classesProduct.product__addBlock}>
					<button
						onClick={addOrders}
						className={classesProduct.product__addBtn}
					>
						<img src={addImg} alt='addImg' /> Add to cart
					</button>
					<p className={classesProduct.product__price}>$ {state.price}</p>
				</div>
				<div className={classesProduct.product__descriptionBlock}>
					<div className={classesHomePage.title__productList}>
						<div className={classesHomePage.Rectangle}></div>
						<h2 className={classesProduct.product__descriptionH}>
							Product Description
						</h2>
					</div>
					<p className={classesProduct.product__descriptionP}>
						{state.description}
					</p>
				</div>
			</div>
		</div>
	)
}

export { ProductPage }
