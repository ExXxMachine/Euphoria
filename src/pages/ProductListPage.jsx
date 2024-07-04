import React from 'react'
import { Footer } from '../components/Footer'
import { ProductList } from '../components/ProductList'
import axios from 'axios'
import { useEffect, useState } from 'react'
const ProductListPage = props => {
	const [dataMen, setDataMen] = useState([])
	const [dataWomen, setDataWomen] = useState([])
	useEffect(() => {
		axios
			.get("https://fakestoreapi.com/products/category/men's%20clothing")
			.then(data => {
				setDataMen(data.data)
			})
	}, [])
	useEffect(() => {
		axios
			.get("https://fakestoreapi.com/products/category/women's%20clothing")
			.then(data => {
				setDataWomen(data.data)
			})
	}, [])
	return (
		<div>
			<ProductList posts={props.category == "women" ? dataWomen : dataMen} />
			<Footer />
		</div>
	)
}

export { ProductListPage }
