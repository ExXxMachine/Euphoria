const dataReq = async () => {
	const reqURL = await fetch(
		`https://fakestoreapi.com/products/category/women's%20clothing`
	)

	const data = await reqURL.json()
	return data
}

export default dataReq
