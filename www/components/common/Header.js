/**
 * Created by Deepak on 09/11/2017.
 */

import React from 'react';
import {
	Text,
	View
} from 'react-native';

const Header = (props) => {
	const { headerContainer, textStyle } = styles;
	return (
		<View style={headerContainer}>
			<Text style={textStyle}>
				{props.title}
			</Text>
		</View>
	);
};

const styles = {
	headerContainer: {
		backgroundColor: '#f8f8f8',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		elevation: 5,
		position: 'relative',
	},
	textStyle: {
		color: '#000',
		fontSize: 20,
	}
};

export { Header };
