export const authPass = () => ({
	type: 'AUTH/IN',
})

export const authFailed = () => ({
	type: 'AUTH/ERR',
})

export const authLogin = (payload) => (dispatch) => {
	dispatch(authPass())
	return Promise.resolve(payload)
}

export const authLogout = () => ({
	type: 'AUTH/OUT',
})

export const authDelegate = (payload) => () => Promise.resolve(payload)
