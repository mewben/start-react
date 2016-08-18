import { authLogout } from 'containers/App/actions'

const Logout = () => (undefined)

Logout.onEnter = (store) => (nextState, replace, cb) => {
	store.dispatch(authLogout())
	// hard refresh to /login
	window.location.href = '/login'
	cb()
}

// Use this if you have redux-api-middleware
/*
Logout.onEnter = (store) => (nextState, replace, cb) => {
	store.dispatch(authLogout())
		.then(() => {
			// hard refresh to /login
			window.location.href = '/login'
			cb()
		})
}
*/

export default Logout
