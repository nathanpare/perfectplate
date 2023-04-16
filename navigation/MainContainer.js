import React from 'react';

import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeScreen from './screens/HomeScreen';
import PlansScreen from './screens/PlansScreen';
import PrefScreen from './screens/PrefScreen';

const homeName = "Home";
const plansName = "Plans";
const prefName = "Preferences";

const Tab = createBottomTabNavigator();

const MainContainer = () => {
  const navTheme = DefaultTheme;
  navTheme.colors.background = '#7FFFD4';
  return (
      <NavigationContainer
      theme={navTheme}
      >
        <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          contentStyle: {
            backgroundColor: "#7FFFD4",
          },
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? "home" : "home-outline"
            } else if (rn === plansName) {
              iconName = focused ? "list" : "list-outline"
            } else if (rn === prefName) {
              iconName = focused ? "settings" : "settings-outline"
            }

            return <Ionicons name={iconName} size={size} color={color} />

          },
        })}
        tabBarOptions={{
          activeTintColor: '#7FFFD4',
          inactiveTintColor: 'grey',
        }}
        >

        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={plansName} component={PlansScreen} />
        <Tab.Screen name={prefName} component={PrefScreen} />

        </Tab.Navigator>
      </NavigationContainer>
  );
}

export default MainContainer;
