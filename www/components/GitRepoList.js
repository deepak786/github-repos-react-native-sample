/**
 * Created by Deepak on 02/12/2017.
 */

import React, { Component } from 'react';
import {
	View,
	Picker,
	FlatList,
	ActivityIndicator
} from 'react-native'; 
import { observer } from 'mobx-react';
import { Header } from './common';
import GitRepoItem from './GitRepoItem';
import GitRepos from '../model/GitRepos';

let date = '';

@observer
class GitRepoList extends Component {

	constructor(props) {
		super(props);
		const today = new Date();
		const priorDate = new Date(today.getTime() - (24 * 60 * 60 * 1000));
		date = priorDate.toISOString().slice(0, 10);
	}

	componentWillMount() {
		this.getTrandingRepos();
	}

	onSortTypeSelected = (item, index) => { // eslint-disable-line
		if (GitRepos.sortType === item) {
			// no need to refresh the data
		} else {
			GitRepos.sortType = item;
			// load new data starting from page 1
			GitRepos.list = [];
			GitRepos.page = 1;
			this.getTrandingRepos();
		}
	};

	onEndReached = () => {
		if (GitRepos.incompleteResults && !GitRepos.loading) {
			this.getTrandingRepos();
		}
	};

	getTrandingRepos() {
		const url = `https://api.github.com/search/repositories?
					q=created:<${date}
					&sort=${GitRepos.sortType}
					&per_page=${GitRepos.perPageItems}
					&page=${GitRepos.page}`;

		console.log(url);

		// set loading to true
		GitRepos.loading = true;

		// fetch the data
		return fetch(url)
			.then((response) => response.json())
			.then((responseJson) => {
				GitRepos.list.push(...responseJson.items);
				GitRepos.loading = false;
				GitRepos.incompleteResults = responseJson.incomplete_results;
				GitRepos.page = ++GitRepos.page;
				return responseJson;
			})
			.catch((error) => {
				alert(error); // eslint-disable-line
			});
	}

	renderItem = ({ item, index }) => { // eslint-disable-line
		console.log('INDEX>>>>'+index);
		return (
			<GitRepoItem item={item} />
		);
	};

	keyExtractor = (item, index) => index;

	render() {
		const { containerStyle, listStyle, loaderStyle, pickerStyle } = styles;
		return (
			<View style={containerStyle}>
				<Header title='Trending Git Repos' />

				<Picker
					style={pickerStyle}
					selectedValue={GitRepos.sortType}
					onValueChange={this.onSortTypeSelected} 
				>
					<Picker.Item label="Star" value="star" />
					<Picker.Item label="Fork" value="fork" />
					<Picker.Item label="Update" value="updated" />
				</Picker>

				<FlatList 
					style={listStyle}
					data={GitRepos.list.slice()}
					keyExtractor={this.keyExtractor}
					renderItem={this.renderItem}
					onEndReached={() => this.onEndReached()}
					onEndReachedThreshold={0.3}
				/>

				{GitRepos.loading && 
					<ActivityIndicator 
						style={loaderStyle}
						size="large"
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
		marginBottom: 10,
	},
	loaderStyle: {
		alignItems: 'center',
	},
	pickerStyle: {
		marginTop: 10,
		marginLeft: 10,
		marginRight: 10,
	}
};

export default GitRepoList;
