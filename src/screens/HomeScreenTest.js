import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Button} from 'react-native';

const HomeScreenTest = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen!!</Text>
      <Button
        title="Go to Components Demo"
        onPress={() => navigation.navigate('Component')}
      />
      <Button
        title="Go to List Demo"
        onPress={() => navigation.navigate('List')}
      />
      <Button
        title="Go to Image Demo"
        onPress={() => navigation.navigate('ImageScreen')}
      />
      <Button
        title="Go to Counter Demo"
        onPress={() => navigation.navigate('Counter')}
      />
      <Button
        title="Go to Greeter Demo"
        onPress={() => navigation.navigate('Greeter')}
      />
      <Button
        title="Go to Color Demo"
        onPress={() => navigation.navigate('ColorScreen')}
      />
      <Button
        title="Go to SquareScreen Demo"
        onPress={() => navigation.navigate('Square')}
      />
      {/* <TouchableOpacity
        style={styles.tbl}
        onPress={() => props.navigation.navigate('List')}>
        <Text>Go to ListScreen Demo</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center',
  },
  button: {},
  tbl: {
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default HomeScreenTest;
