import { ProductCard } from '../components/ProductCard'
import classesProductList from '../style/ProductList.module.css'
const ProductList = ({ posts, category }) => {
	return (
		<div className={classesProductList.div__block}>
			{posts.map(post => (
				<ProductCard title={post.title} img={post.image} price={post.price} />
			))}
		</div>
	)
}

export { ProductList }
