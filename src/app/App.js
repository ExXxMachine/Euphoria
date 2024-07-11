import './App.css'
import './style/rest.css'
import {
	Home,
	Login,
	SingUp,
	Profile,
	ProductPage,
	ProductListPage,
	CartPage,
} from '../pages/authPage'
import { Header } from '../components/authComponents'
import { Routes, Route } from 'react-router-dom'

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Header />}>
					<Route path='/singUp' element={<SingUp />} />
					<Route path='/login' element={<Login />} />
					<Route path='/cart' element={<CartPage />} />
					<Route
						path='/women'
						element={<ProductListPage category={'women'} />}
					/>
					<Route path='/men' element={<ProductListPage category={'men'} />} />
					<Route path='/profile' element={<Profile />} />
					<Route path='/' element={<Home />} />
					<Route path='/login' element={<Login />} />
					<Route path='/product' element={<ProductPage />} />
				</Route>
			</Routes>
		</div>
	)
}

export default App
