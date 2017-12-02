/**
 * Created by Deepak on 02/12/2017.
 */

import React, { Component } from 'react';
import {
	View,
	Picker,
	FlatList,
	TouchableOpacity,
	Text,
	ActivityIndicator
} from 'react-native'; 
import { observer } from 'mobx-react';
import { Header } from './common';
import GitRepos from '../model/GitRepos';

@observer
class GitRepoList extends Component {

	state = {
		sortType: 'star'
	};

	componentWillMount() {
		this.getTrandingRepos();
	}

	getTrandingRepos() {
		const today = new Date();
		const priorDate = new Date(today.getTime() - (24 * 60 * 60 * 1000));
		const date = priorDate.toISOString().slice(0, 10);

		const url = `https://api.github.com/search/repositories?q=created:<${date}&sort=${GitRepos.sortType}&per_page=20&page=${GitRepos.page}`; 

		// set loading to true
		GitRepos.loading = true;

		// fetch the data
		return fetch(url)
			.then((response) => response.json())
			.then((responseJson) => {
				alert(JSON.stringify(responseJson));
				return responseJson;
			})
			.catch((error) => {
				console.error(error);
			});
  }

	render() {
		const { containerStyle, listStyle, loaderStyle } = styles;
		return (
			<View style={containerStyle}>
				<Header title='Trending Git Repos' />

				<Picker
					selectedValue={this.state.sortType}
					onValueChange={(itemValue, itemIndex) => this.setState({ sortType: itemValue })} 
				>
					<Picker.Item label="Star" value="star" />
					<Picker.Item label="Fork" value="fork" />
					<Picker.Item label="Update" value="updated" />
				</Picker>

				<FlatList 
					style={listStyle}
					data={GitRepos.list.slice()}
					renderItem={({ item }) => <Text>{item}</Text>}
				/>

				{GitRepos.loading && 
					<ActivityIndicator 
						style={loaderStyle}
					/>
				}

			</View>
		);
	}
}

const styles = {
	containerStyle: {
		flex: 1,
	},
	listStyle: {
		flex: 1,
	},
	loaderStyle: {
		alignItems: 'center',
	}
};

export default GitRepoList;
