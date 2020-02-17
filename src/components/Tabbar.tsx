import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class Navbar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navbar}>
          <TouchableOpacity style={styles.iconContainer}>
            <Icon name='home' size={24} style={styles.search} />
            <Text style={styles.text}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer}>
            <Icon name='whatshot' size={24} style={styles.account} />
            <Text style={styles.text}>Trending</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer}>
            <Icon name='subscriptions' size={24} style={styles.search} />
            <Text style={styles.text}>Subscriptions</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer}>
            <Icon name='add-alert' size={24} style={styles.account} />
            <Text style={styles.text}>Notifications</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer}>
            <Icon name='folder' size={24} style={styles.account} />
            <Text style={styles.text}>Library</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    borderTopColor: '#aaa',
    borderTopWidth: 1,
  },
  navbar: {
    height: 60,
    elevation: 3,
    backgroundColor: '#eee',

    paddingHorizontal: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  logo: {
    height: 24,
    width: 120,
  },
  searchAndAccount: {
    flexDirection: 'row',
    height: 24,
  },
  search: {
    marginHorizontal: 10,
  },
  account: {
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
  },
})
