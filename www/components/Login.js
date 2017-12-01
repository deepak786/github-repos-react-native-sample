/**
 * Created by Deepak on 09/11/2017.
 */

import React, { Component } from 'react';
import { Card, CardItem, Input } from './common';

class Login extends Component {
	state = {
		email: '',
		password: '',
	};

	render() {
		return (
			<Card>
				<CardItem
					direction='column'
				>
					<Input
						inputType='email-address'
						onChangeText={email => this.setState({ email })}
						hint='name@example.com'
						label='Email'
						value={this.state.email}
					/>

					<Input
						onChangeText={password => this.setState({ password })}
						hint='Password'
						label='Password'
						value={this.state.password}
						secureTextEntry
					/>
				</CardItem>
			</Card>
		);
	}
}

export default Login;
