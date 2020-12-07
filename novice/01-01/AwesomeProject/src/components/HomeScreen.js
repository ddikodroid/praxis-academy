import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';

const HomeScreen = ({navigation}) => {
  const Move = () => {
    navigation.navigate('Details');
  };
  return (
    <View style={s.uiHomeScreen}>
      <View style={[s.flexArea, {backgroundColor: 'powderblue'}]}>
        {/* <Text>Home Screen</Text> */}
        <Text>D</Text>
      </View>
      <View style={[s.flexArea, {backgroundColor: 'skyblue'}]}>
        <Text>I</Text>
      </View>
      <View style={[s.flexArea, {backgroundColor: 'steelblue'}]}>
        <Text>K</Text>
      </View>
      <View style={[s.flexArea, {backgroundColor: 'royalblue'}]}>
        <Text>O</Text>
      </View>
      <View style={[s.flexArea, {backgroundColor: 'midnightblue'}]}>
        <Button onPress={Move} title="Move to Details" />
      </View>
    </View>
  );
};

export default HomeScreen;

const s = StyleSheet.create({
  uiHomeScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexArea: {
    width: 100,
    height: 100,
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});
