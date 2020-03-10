import React, {useReducer} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const reducer = (state, action) => {
  // state === {count: number }
  // action === { type: 'increment' || 'decrement' , payload: 1}
  switch (action.type) {
    case 'increase':
      return {...state, count: state.count + action.payload};
    case 'decrease':
      return {...state, count: state.count - action.payload};
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, {count: 0});
  const {count} = state;
  return (
    <View style={styles.container}>
      <Button
        title="Increase"
        onPress={() => {
          // can't modify counter directly
          dispatch({type: 'increase', payload: 1});
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({type: 'decrease', payload: 1});
        }}
      />

      <Text>Counter count: {count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    alignContent: 'center',
  },
});

export default CounterScreen;
