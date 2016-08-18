import { fromJS } from 'immutable'

let initialState = fromJS({
	initialized: false,
	loading: false,
	loginError: '',
	isLoggedIn: false,
})

const isLoggedIn = localStorage.getItem('isLoggedIn')
if (isLoggedIn) {
	initialState = initialState.set('isLoggedIn', isLoggedIn)
}

export default function app(state = initialState, action) {
	switch (action.type) {

	case 'AUTH/IN':
		localStorage.setItem('isLoggedIn', true)
		return state.set('isLoggedIn', true)

	case 'AUTH/ERR':
		return state.set('loginError', 'Wrong credentials!')

	case 'AUTH/OUT':
		localStorage.removeItem('isLoggedIn', false)
		return state.set('isLoggedIn', false)

	default:
		return state
	}
}
