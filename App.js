import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from 'react-native-elements';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#ddd' }}>
        <Header
          centerComponent={{ text: 'Simple Youtube Search', style: { color: '#fff' } }}
          outerContainerStyles={{ backgroundColor: '#e62117' }}
        />
        {/*searchbar*/}
        {/*videolist*/}
      </View>
    );
  }
}
