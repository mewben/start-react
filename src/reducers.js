import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

import app from 'containers/App/reducer'
import { loginModel, loginForm } from 'containers/Login/reducer'

export default combineReducers({
	// main reducers
	app,

	// model reducers
	loginModel,

	// form reducers
	loginForm,

	// others
	routing,
})
