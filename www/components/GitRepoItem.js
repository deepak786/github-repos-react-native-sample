/**
* Created by Deepak on 02/12/2017.
*/
import React, { Component } from 'react';
import {
	Text,
	Image
} from 'react-native';
import { Card, CardItem } from './common';

class GitRepoItem extends Component {

	shouldComponentUpdate(nextProps, nextState) {
		if (this.props.item === nextProps.item) {
			return false;
		}
		return true;
	}

	render() {
		const { name, owner: { avatar_url } } = this.props.item;
		const { 
			titleStyle,
			imageStyle,
			} = styles;
		return (
			<Card>
				<CardItem>
					<Image 
						style={imageStyle}
						source={{ uri: avatar_url }}
					/>

					<Text style={titleStyle}>{name}</Text>
				</CardItem>
			</Card>
		);
	}
}

const styles = {
	titleStyle: {
		color: '#000',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: 16,
		marginLeft: 15,
		alignSelf: 'center',
	},
	imageStyle: {
		height: 60,
		borderRadius: 40,
		width: 60
	},
};

export default GitRepoItem;
