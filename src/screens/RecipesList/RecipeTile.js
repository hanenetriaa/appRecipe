import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export default function RecipeTile({item}) {
  return (
    <View style={styles.container}>
      <Image source={{uri: item.image}} style={styles.image} />
      <View style={styles.subContainer}>
        <Text style={styles.text}>{item.title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '30%',
    height: 70,
  },
  text: {fontWeight: 'bold', fontSize: 16},
  subContainer: {width: '70%', padding: 7},
  container: {flexDirection: 'row'},
});
