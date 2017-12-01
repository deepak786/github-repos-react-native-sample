/**
 * Created by Deepak on 10/11/2017.
 */

import React from 'react';
import {
	Text,
	View,
} from 'react-native';

const CardItem = (props) => {
	const { containerStyleVertical, containerStyleHorizontal } = styles;

	return (
		<View 
			style={(props.direction && props.direction === 'column') ?  
						containerStyleVertical : 
						containerStyleHorizontal
			}
		>
			{props.children}
		</View>

	);
};

const styles = {
	containerStyleHorizontal: {
		padding: 5,
		borderBottomWidth: 1,
		borderColor: '#ddd',
		backgroundColor: '#fff',
		flexDirection: 'row',
		justifyContent: 'flex-start',
	},
	containerStyleVertical: {
		padding: 5,
		borderBottomWidth: 1,
		borderColor: '#ddd',
		backgroundColor: '#fff',
		flexDirection: 'column',
		justifyContent: 'flex-start',
	}
};

export { CardItem };
