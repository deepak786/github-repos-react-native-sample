/**
 * Created by Deepak on 09/11/2017.
 */

import React from 'react';
import {
	Text,
	View,
	TextInput
} from 'react-native';

const Input = (props) => {
	const { 
		inputType, 
		onChangeText, 
		hint, 
		label, 
		value, 
		secureTextEntry 
	} = props;

	const { textInputStyle, labelStyle, container } = styles;

	return (
		<View style={container}>
			<Text 
				style={labelStyle}
			>
				{label}
			</Text>

			<TextInput
				style={textInputStyle}
				keyboardType={inputType || 'default'}
				onChangeText={onChangeText}
				placeholder={hint}
				value={value}
				secureTextEntry={secureTextEntry}
			/>
		</View>
	);
};

const styles = {
	textInputStyle: {
		paddingTop: 5,
		paddingBottom: 5,
		fontSize: 16,
		color: '#000',
	},
	labelStyle: {
		fontSize: 16,
		
		color: '#000',
	},
	container: {
		margin: 5,
	}
};

export { Input };
