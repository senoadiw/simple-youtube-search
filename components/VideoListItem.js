import React from 'react';
import { View, Text, Image } from 'react-native';

const VideoListItem = ({ video }) => {
    return (
        <View>
            <Image
                style={styles.imageStyle}
                source={{ uri: video.snippet.thumbnails.medium.url }}
            />
            <Text>{video.snippet.title}</Text>
            <Text>{video.snippet.channelTitle}</Text>
            <Text>{video.snippet.description}</Text>
        </View>
    );
};

const styles = {
    imageStyle: {
        alignSelf: 'stretch',
        height: 180
    }
}

export default VideoListItem;
