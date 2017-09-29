import React, { Component } from 'react';
import { View } from 'react-native';
import AppHeader from './components/AppHeader';
import SearchBar from './components/SearchBar';

const API_KEY = 'AIzaSyCkYVWVBpcDINDrEOiwJl6cfi4sbyKbo-w';

export default class App extends Component {
  onPressSearch = term => {
    console.log(term);
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#ddd' }}>
        <AppHeader headerText="Simple Youtube Search" />
        <SearchBar onPressSearch={this.onPressSearch} />
        {/*videolist*/}
      </View>
    );
  }
}
