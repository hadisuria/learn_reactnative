import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';

const HomeScreen = ({navigation}) => {
  const newstitle = 'newstitle...';

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        <TouchableOpacity onPress={() => navigation.navigate('Component')}>
          <View style={styles.button}>
            <Text style={styles.textSource}>Source 1</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Component')}>
          <View style={styles.button}>
            <Text style={styles.textSource}>Source 2</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Component')}>
          <View style={styles.button}>
            <Text style={styles.textSource}>Source 3</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.contentContainer}>
        <ScrollView style={styles.scrollView}>
          <Text>newscontent {newstitle}</Text>
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 20,
  },
  scrollView: {
    flex: 1,
  },
  textSource: {
    fontSize: 40,

    borderColor: 'black',
    borderWidth: 3,
  },
});

export default HomeScreen;
