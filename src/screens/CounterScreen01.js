import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View style={styles.container}>
      <Button
        title="Increase"
        onPress={() => {
          // can't modify counter directly
          setCounter(counter + 1);
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          setCounter(counter - 1);
        }}
      />

      <Text>Counter count: {counter}</Text>
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
