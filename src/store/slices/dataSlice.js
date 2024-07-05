import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// Асинхронный thunk для получения данных о мужской одежде
export const fetchDataMen = createAsyncThunk(
	'data/fetchDataMen',
	async function () {
		const res = await fetch(
			"https://fakestoreapi.com/products/category/men's%20clothing"
		)
		const data = await res.json()
		return data
	}
)

// Асинхронный thunk для получения данных о женской одежде
export const fetchDataWomen = createAsyncThunk(
	'data/fetchDataWomen',
	async function () {
		const res = await fetch(
			"https://fakestoreapi.com/products/category/women's%20clothing"
		)
		const data = await res.json()
		return data
	}
)

const dataSlice = createSlice({
	name: 'data',
	initialState: {
		dataWomen: [],
		dataMens: [],
		statusMen: null,
		statusWomen: null,
		errorMen: null,
		errorWomen: null,
	},
	extraReducers: builder => {
		builder
			.addCase(fetchDataMen.pending, state => {
				state.statusMen = 'loading'
				state.errorMen = null
			})
			.addCase(fetchDataMen.fulfilled, (state, action) => {
				state.statusMen = 'resolved'
				state.dataMens = action.payload
			})
			.addCase(fetchDataMen.rejected, (state, action) => {
				state.statusMen = 'rejected'
				state.errorMen = action.error.message
			})
			.addCase(fetchDataWomen.pending, state => {
				state.statusWomen = 'loading'
				state.errorWomen = null
			})
			.addCase(fetchDataWomen.fulfilled, (state, action) => {
				state.statusWomen = 'resolved'
				state.dataWomen = action.payload
			})
			.addCase(fetchDataWomen.rejected, (state, action) => {
				state.statusWomen = 'rejected'
				state.errorWomen = action.error.message
			})
	},
})

export default dataSlice.reducer
