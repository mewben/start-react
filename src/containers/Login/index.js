import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'

import { authLogin } from 'containers/App/actions'
import FormLogin from './formLogin'

class Login extends Component {

	_onSubmit = (payload) => {
		// Edit this to your own liking
		this.props.dispatch(authLogin(payload))
			.then(() => {
				// redirect to '/'
				this.context.router.replace('/')
			})
	}

	render() {
		const { __loginError } = this.props

		return (
			<div className="login">
				<h1>Login</h1>
				{ !!__loginError && <p className="text-danger italic">{__loginError}</p> }
				<FormLogin onSubmit={this._onSubmit} />
			</div>
		)
	}
}

Login.contextTypes = {
	router: PropTypes.object,
}

Login.propTypes = {
	__loginError: PropTypes.string,
	dispatch: PropTypes.func,
}

function mapStateToProps(state) {
	return {
		__loginError: state.app.get('loginError'),
	}
}

export default connect(mapStateToProps)(Login)
