import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function Video(props) {
    return (
      <View style={styles.container}>
        <Image 
          source={{uri: props.video.snippet.thumbnails.medium.url}}
          style={{height: 200,}}
        />
        <View style={styles.descriptionContainer}>
          <Image 
            source={{uri: props.video.snippet.thumbnails.default.url}}
            style={styles.channelImage}
          />
          <View style={styles.videoDescription}>
            <Text style={styles.title}>{props.video.snippet.title}</Text>
            <Text style={styles.metaData}>{props.video.snippet.channelTitle}</Text>
          </View>
          <Icon name='more-vert' size={24} style={styles.moreIcon}/>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
  },
  descriptionContainer: {
    flexDirection: 'row',
    padding: 8,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#bbb',
  },
  channelImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  videoDescription: {
    flex: 1,
    marginLeft: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  metaData: {
    color: '#666',
  },
  moreIcon: {
    color: '#666',
  },
})