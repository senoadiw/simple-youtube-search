import React from 'react';
import { Header } from 'react-native-elements';

const AppHeader = (props) => (
    <Header
        centerComponent={{ text: props.headerText, style: { color: '#fff' } }}
        outerContainerStyles={{ backgroundColor: '#e62117' }}
    />
);

export default AppHeader;
