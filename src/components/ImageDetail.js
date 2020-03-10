import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const ImageDetail = props => {
  return (
    <View>
      <Image source={props.imageSource} />
      <Text> Image Detail {props.title}</Text>
      <Text> Image score - {props.imageScore}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
  },
});

export default ImageDetail;
