import React from 'react'
import Route from 'react-router/lib/Route'

import App from 'containers/App'
import Login from 'containers/Login'
import Logout from 'containers/Logout'

import Admin from 'containers/Admin'
import Account from 'containers/Account'

import auth from 'containers/Admin/authentication'

export default function createRoutes(store) {
	return (
		<Route component={App}>
			<Route path="login" component={Login} />
			<Route path="logout" component={Logout} onEnter={Logout.onEnter(store)} />
			<Route path="/" component={Admin} onEnter={auth(store)}>
				<Route path="account" component={Account} />
			</Route>
		</Route>
	)
}
