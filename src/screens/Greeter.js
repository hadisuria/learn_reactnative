import React, {useState} from 'react';
import {Text, StyleSheet, Button, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

const Greeter = () => {
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Input your name here: </Text>
      <TextInput
        style={styles.textInput}
        placeholder="Type your password here!"
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={newValue => {
          setPassword(newValue);
        }}
      />

      {password.length <= 5 ? (
        <Text style={styles.text}>
          Password must be longer than 5 characters
        </Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderColor: 'black',
    margin: 10,
    padding: 15,
  },
  text: {
    justifyContent: 'center',
    textAlign: 'center',
  },
  textInput: {
    justifyContent: 'center',
    textAlign: 'center',
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default Greeter;
