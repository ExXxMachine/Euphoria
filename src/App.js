import './App.css'
import './style/rest.css'
import { Header } from './components/Header'
import { Routes, Route, Link } from 'react-router-dom'
import { Home } from './pages/HomePage'
import { SingUp } from './components/SingUp'

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/SingUp' element={<SingUp />} />
				<Route path='/' element={<Header />}>
					<Route path='/' element={<Home />} />
					<Route path='/SingUp' element={<SingUp />} />
				</Route>
			</Routes>
		</div>
	)
}

export default App
