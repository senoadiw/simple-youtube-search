import React, { Component } from 'react';
import { View } from 'react-native';
import YTSearch from 'youtube-api-search';
import AppHeader from './components/AppHeader';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';

const API_KEY = 'AIzaSyCkYVWVBpcDINDrEOiwJl6cfi4sbyKbo-w';

export default class App extends Component {
  state = {
    loading: false,
    videos: []
  };

  onPressSearch = term => {
    this.searchYT(term);
  }

  searchYT = term => {
    this.setState({ loading: true });
    YTSearch({ key: API_KEY, term }, videos => {
      this.setState({
        loading: false,
        videos
      });
    });
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#ddd' }}>
        <AppHeader headerText="Simple Youtube Search" />
        <SearchBar
          loading={this.state.loading}
          onPressSearch={this.onPressSearch}
        />
        <VideoList videos={this.state.videos} />
      </View>
    );
  }
}
