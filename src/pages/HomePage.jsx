import classesHomePage from '../style/HomePage.module.css'
import { useEffect, useState } from 'react'
import DealComponent from '../components/DealsConstructor'
import background1 from '../style/img/deals1.jpg'
import background2 from '../style/img/deals2.jpg'
import { ProductList } from '../components/ProductList'
import axios from 'axios'

const reqURL = `https://fakestoreapi.com/products/category/women's%20clothing`

const Home = () => {
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
			<ProductList posts={dataMen.slice(0, 4)} />
			<div className={classesHomePage.title__productList}>
				<div className={classesHomePage.Rectangle}></div>
				<h2>For Women</h2>
			</div>
			<ProductList posts={dataWomen.slice(0, 4)} />
		</div>
	)
}

export { Home }
