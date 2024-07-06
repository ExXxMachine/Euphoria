import { ProductCard } from '../components/ProductCard'
import { useSelector } from 'react-redux'
import classesProductList from '../style/css/ProductList.module.css'

const ProductList = props => {
	const cards = useSelector(state => {
		if (props.mod === 'trim') {
			return props.category === 'men'
				? state.data.dataMens.slice(0, 4)
				: state.data.dataWomen.slice(0, 4)
		} else {
			return props.category === 'men'
				? state.data.dataMens
				: state.data.dataWomen
		}
	})

	return (
		<div className={classesProductList.div__block}>
			{cards.map((card, index) => (
				<ProductCard props={card} key={index} />
			))}
		</div>
	)
}

export { ProductList }
