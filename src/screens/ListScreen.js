import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {
  const friends = [
    {name: 'Friend #1'},
    {name: 'Friend #2'},
    {name: 'Friend #3'},
    {name: 'Friend #4'},
    {name: 'Friend #5'},
    {name: 'Friend #6'},
    {name: 'Friend #7'},
    {name: 'Friend #8'},
    {name: 'Friend #9'},
  ];
  const friendsTest = [
    {name: 'Friend 1', age: 20},
    {name: 'Friend 2', age: 45},
    {name: 'Friend 3', age: 32},
    {name: 'Friend 4', age: 27},
    {name: 'Friend 5', age: 53},
    {name: 'Friend 6', age: 30},
    {name: 'Friend 7', age: 27},
  ];

  return (
    // <FlatList
    //   horizontal={true}
    //   showsVerticalScrollIndicator={false}
    //   keyExtractor={friend => friend.name}
    //   data={friends}
    //   renderItem={({item}) => {
    //     // element === { item: { name: 'Friend #1' }, index: 0  } }
    //     return <Text style={styles.textStyle}>{item.name}</Text>;
    //   }}
    // />
    <FlatList
      keyExtractor={friend => friend.name}
      data={friendsTest}
      renderItem={({item}) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - age: {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
    justifyContent: 'center',
    textAlign: 'center',
  },
});

export default ListScreen;
