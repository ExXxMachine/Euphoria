import React from 'react'
import { Footer } from '../components/Footer'
import { ProductList } from '../components/ProductList'
const ProductListPage = props => {

	return (
		<div>
			<ProductList category={props.category} />
			<Footer />
		</div>
	)
}

export { ProductListPage }
