const Profile = () => {
	const LogOut = () => {
		localStorage.setItem('flag', 0)
		window.location.href = '/'
	}
	return (
		<div>
			Profile
			<button onClick={LogOut}>Log out</button>
		</div>
	)
}

export { Profile }
