import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class Navbar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navbar}>
          <Image
            source={require('../images/youtube.png')}
            style={styles.logo}
            />
        <View style={styles.searchAndAccount}>
          <TouchableOpacity>
            <Icon name='search' size={24} style={styles.search} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name='account-circle' size={24} style={styles.account} />
          </TouchableOpacity>
        </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {},
  navbar: {
    marginTop: 35,
    height: 60,
    elevation: 3,

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
})
