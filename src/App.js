import './App.css'
import './style/rest.css'
import { Header } from './components/Header'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/HomePage'
import { Login } from './components/Login'
import { SingUp } from './components/SingUp'
import { Profile } from './components/Profile'
import { ProductPage } from './pages/ProductPage'
import { ProductListPage } from './pages/ProductListPage'
function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/singUp' element={<SingUp />} />
				<Route path='/login' element={<Login />} />
				<Route path='/' element={<Header />}>
					<Route
						path='/women'
						element={<ProductListPage category={'women'} />}
					/>
					<Route
						path='/men'
						element={<ProductListPage category={'men'} />}
					/>
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
