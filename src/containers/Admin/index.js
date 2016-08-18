import React from 'react'
import Link from 'react-router/lib/Link'

const Admin = () => (
	<div>
		<h1>Welcome to the admin panel.</h1>
		<Link to="/logout">Logout</Link>
	</div>
)

export default Admin
