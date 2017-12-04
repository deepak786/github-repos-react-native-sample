/**
 * Created by Deepak on 09/11/2017.
 */

import React from 'react';
import {
	View,
 } from 'react-native';

const Card = (props) => {
	const { container } = styles;
	return (
		<View style={container}>
			{props.children}
		</View>
	);
};

const styles = {
	container: {
		borderRadius: 1,
		borderColor: '#ddd',
		borderWidth: 1,
		borderBottomWidth: 0,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 2,
		elevation: 1,
		marginLeft: 10,
		marginRight: 10,
		marginTop: 10,
	}
};

export { Card };
