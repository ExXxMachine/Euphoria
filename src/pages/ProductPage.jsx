import React from 'react'
import { useLocation } from 'react-router-dom'
import classesProduct from '../style/css/ProductPage.module.css'
import Rating from '../style/img/score.svg'
import Comment from '../style/img/commentIco.svg'
import addImg from '../style/img/add.svg'
import classesHomePage from '../style/css/HomePage.module.css'
const ProductPage = () => {
	const location = useLocation()
	const state = location.state.props
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
						<button className={classesProduct.product__sizeBtn}>XS</button>
						<button className={classesProduct.product__sizeBtn}>S</button>
						<button className={classesProduct.product__sizeBtn}>M</button>
						<button className={classesProduct.product__sizeBtn}>L</button>
						<button className={classesProduct.product__sizeBtn}>XL</button>
					</div>
				</div>
				<div className={classesProduct.product__addBlock}>
					<button className={classesProduct.product__addBtn}>
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
