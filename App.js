/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import 'react-native-gesture-handler';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {
  createStackNavigator,
  createAppContainer,
} from '@react-navigation/stack';

import {StyleSheet, ScrollView, View, Text} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import HomeScreenTest from './src/screens/HomeScreenTest';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import Greeter from './src/screens/Greeter';
import ColorScreen from './src/screens/ColorScreen';
import SquareScreen from './src/screens/SquareScreen';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <>
      <NavigationContainer style={styles.navContainer}>
        <Stack.Navigator>
          <Stack.Screen name="HomeTest" component={HomeScreenTest} />
          <Stack.Screen name="Component" component={ComponentsScreen} />
          <Stack.Screen name="List" component={ListScreen} />
          <Stack.Screen name="ImageScreen" component={ImageScreen} />
          <Stack.Screen name="Counter" component={CounterScreen} />
          <Stack.Screen name="Greeter" component={Greeter} />
          <Stack.Screen name="ColorScreen" component={ColorScreen} />
          <Stack.Screen name="Square" component={SquareScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
