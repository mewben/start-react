// This will permit/reject on Admin
// based on whether logged in or not.
import { authDelegate } from 'containers/App/actions'
import { catchErr } from 'utils/helpers'

// admin onEnter
const auth = (store) => (nextState, replace, cb) => {
	try {
		// Check if logged in
		if (!localStorage.getItem('isLoggedIn')) {
			replace('/login')
			return cb()
		}

		// Check if jwtExpiry is expired
		const jwtExpiry = localStorage.getItem('jwt_exp')
		const now = Date.now()
		if (jwtExpiry < now) {
			// if expired, try to refresh token
			store.dispatch(authDelegate())
				.then((res) => {
					if (res) {
						replace('/login')
					}
					return cb()
				})
		} else {
			// not expired
			// compute offset from jwtExpiryiry
			const offset = jwtExpiry - now
			// setTimeout from that offset
			setTimeout(() => {
				// dispatch refresh token
				store.dispatch(authDelegate())
			}, offset)
		}
		return cb()
	} catch (e) {
		catchErr(e)
	}

	return cb()
}

export default auth
