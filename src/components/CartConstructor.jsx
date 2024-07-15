import React, { useState } from 'react'
import classesCartConstructor from '../app/style/css/CartConstructor.module.css'
import deletecon from '../app/style/img/deletecon.svg'

const CartConstructor = props => {
	const [count, setCount] = useState(props.props.count)

	const updateLocalStorage = newCount => {
		const localState = JSON.parse(localStorage.getItem('orders')) || []

		const itemIndex = localState.findIndex(
			element =>
				element.title === props.props.title && element.size === props.props.size
		)

		if (itemIndex !== -1) {
			localState[itemIndex].count = newCount
		} else {
			localState.push({
				title: props.props.title,
				size: props.props.size,
				count: newCount,
			})
		}

		localStorage.setItem('orders', JSON.stringify(localState))
	}

	const incrementCount = () => {
		const newCount = count + 1
		setCount(newCount)
		updateLocalStorage(newCount)
	}

	const decrementCount = () => {
		const newCount = Math.max(count - 1, 0)
		setCount(newCount)
		updateLocalStorage(newCount)
	}

	const removeItem = () => {
		const localState = JSON.parse(localStorage.getItem('orders')) || []

		const itemIndex = localState.findIndex(
			element =>
				element.title === props.props.title && element.size === props.props.size
		)

		if (itemIndex !== -1) {
			localState.splice(itemIndex, 1)
			localStorage.setItem('orders', JSON.stringify(localState))
		}

		props.onRemove(props.props.title, props.props.size) // Notify parent component to remove this item from the state
	}

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
			<div className={classesCartConstructor.cart__countBlock}>
				<button
					onClick={decrementCount}
					className={classesCartConstructor.cart__countBtn}
				>
					-
				</button>
				<p className={classesCartConstructor.cart__p}>{count}</p>
				<button
					onClick={incrementCount}
					className={classesCartConstructor.cart__countBtn}
				>
					+
				</button>
			</div>
			<p className={classesCartConstructor.cart__p}>
				$ {(count * props.props.price).toFixed(2)}
			</p>
			<button className={classesCartConstructor.cart__removeBtn} onClick={removeItem}>
				<img src={deletecon} alt='deletecon' />
			</button>
		</div>
	)
}

export { CartConstructor }
