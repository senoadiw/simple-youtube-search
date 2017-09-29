import React from 'react';
import { View, Text, Image } from 'react-native';
import { Card } from 'react-native-elements';

const VideoListItem = ({ video }) => {
    return (
        <View>
            <Card containerStyle={styles.cardStyle}>
                <Image
                    style={styles.imageStyle}
                    source={{ uri: video.snippet.thumbnails.medium.url }}
                />
                <View style={styles.contentStyle}>
                    <Text style={styles.titleStyle}>
                        {video.snippet.title}
                    </Text>
                    <Text style={styles.channelTitleStyle}>
                        {video.snippet.channelTitle}
                    </Text>
                    <Text style={styles.descriptionStyle}>
                        {video.snippet.description}
                    </Text>
                </View>
            </Card>
        </View>
    );
};

const styles = {
    cardStyle: {
        padding: 5
    },
    imageStyle: {
        alignSelf: 'stretch',
        height: 180
    },
    contentStyle: {
        flex: 1,
        padding: 5
    },
    titleStyle: {
        fontSize: 12,
        marginBottom: 5
    },
    channelTitleStyle: {
        fontSize: 11,
        color: '#777',
        marginBottom: 5,
        alignSelf: 'flex-end'
    },
    descriptionStyle: {
        fontSize: 11,
        alignSelf: 'center'
    }
}

export default VideoListItem;
