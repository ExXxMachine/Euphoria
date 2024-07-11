import React from 'react'
import { ProductList, Footer } from '../components/authComponents'
// import { Footer } from '../components/Footer'
// import { ProductList } from '../components/ProductList'
const ProductListPage = props => {
	return (
		<div>
			<ProductList category={props.category} />
			<Footer />
		</div>
	)
}

export { ProductListPage }
