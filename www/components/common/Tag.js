/**
 * Created by Deepak on 10/11/2017.
 */

import React from 'react';
import {
	Text,
	View,
} from 'react-native';

const Tag = (props) => {
	const { containerStyle, tagStyle } = styles;
	return (
		<View style={containerStyle}>
			<Text style={tagStyle}>{props.text}</Text>
		</View>
	);
};

const styles = {
	containerStyle: {
		paddingLeft: 10,
		paddingRight: 10,
		paddingTop: 5,
		paddingBottom: 5,
		margin: 3,
		backgroundColor: '#ddd',
		borderRadius: 20,
	},
	tagStyle: {
		fontSize: 14,
		color: '#000',
	}
};

export { Tag };
