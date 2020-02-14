import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Navbar from './src/components/Navbar'
import Tabbar from './src/components/Tabbar'
import Video from './src/components/Video'
import data from './src/data/search.json'

export default function App() {

  return ( 
    <View style={styles.container}>
      <Navbar />
      <ScrollView style={{flex: 1}}>
        <Video video={data.items[0]} />
        <Video video={data.items[1]} />
        <Video video={data.items[2]} />
        <Video video={data.items[3]} />
        <Video video={data.items[4]} />
      </ScrollView>
      <Tabbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
