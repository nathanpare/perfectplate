import React from 'react';
import { View, Text } from 'react-native';

const PrefScreen = ({ navigation }) => {
  return (
    <View>
      <Text
      style={{fontSize: 26, fontWeight: "bold"}}
      onPress={() => navigation.navigate('Home')}
      >Preferences Screen</Text>
    </View>
  )
}

export default PrefScreen;
