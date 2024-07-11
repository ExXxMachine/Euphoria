import classesHomePage from '../app/style/css/HomePage.module.css'
import {
	ProductList,
	Footer,
	DealComponent,
} from '../components/authComponents'
import { useEffect } from 'react'
import background1 from '../app/style/img/deals1.jpg'
import background2 from '../app/style/img/deals2.jpg'
import { fetchDataMen, fetchDataWomen } from '../app/store/slices/dataSlice'
import { useDispatch } from 'react-redux'

const Home = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchDataMen())
		dispatch(fetchDataWomen())
	}, [dispatch])
	
	return (
		<div className={classesHomePage.container}>
			<div className={classesHomePage.banner}>
				<div className={classesHomePage.banner__content}>
					<p>T-shirt / Tops</p>
					<h1>Summer Value Pack</h1>
					<p>cool / colorful / comfy</p>
					<button className={classesHomePage.banner__btn}>Shop Now</button>
				</div>
			</div>
			<div className={classesHomePage.deals}>
				<DealComponent
					promotion='Low Price'
					textDeal={'High Coziness'}
					background={background1}
					upto={'50'}
				/>
				<DealComponent
					promotion='Beyoung Presents'
					textDeal={'Breezy Summer Style'}
					background={background2}
					upto={'50'}
				/>
			</div>
			<div className={classesHomePage.title__productList}>
				<div className={classesHomePage.Rectangle}></div>
				<h2>For Men</h2>
			</div>
			<ProductList category={'men'} mod={'trim'} />
			<div className={classesHomePage.title__productList}>
				<div className={classesHomePage.Rectangle}></div>
				<h2>For Women</h2>
			</div>
			<ProductList category={'women'} mod={'trim'} />
			<Footer />
		</div>
	)
}

export { Home }
