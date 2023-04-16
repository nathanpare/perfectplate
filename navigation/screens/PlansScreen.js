import React from 'react';
import { View, Text } from 'react-native';

const PlansScreen = ({ navigation }) => {
  return (
    <View>
      <Text
      style={{fontSize: 26, fontWeight: "bold"}}
      onPress={() => navigation.navigate('Home')}
      >Plans Screen</Text>
    </View>
  )
}

export default PlansScreen;