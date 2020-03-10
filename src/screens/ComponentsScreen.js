import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

const ComponentsScreen = () => {
  const name = 'Hadi';
  return (
    <View style={styles.container}>
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    margin: 10,
    // padding: 10,
    height: 200,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  box1: {
    height: 50,
    width: 50,
    backgroundColor: 'red',
  },
  box2: {
    height: 50,
    width: 50,
    backgroundColor: 'green',
    alignSelf: 'flex-end',
  },
  box3: {
    height: 50,
    width: 50,
    backgroundColor: 'blue',
  },
});

export default ComponentsScreen;
