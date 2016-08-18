import React, { PropTypes } from 'react'
import { Form, Field } from 'react-redux-form'

const FormLogin = ({ onSubmit }) => (
	<Form model="loginModel" onSubmit={onSubmit}>
		<Field model="loginModel.username">
			<input type="text" placeholder="username" />
		</Field>
		<Field model="loginModel.password">
			<input type="password" placeholder="password" />
		</Field>
		<button type="submit">Login</button>
	</Form>
)

FormLogin.propTypes = {
	onSubmit: PropTypes.func.isRequired,
}

export default FormLogin
