import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Kategori from './Screen/Kategori';
import Kecamatan from './Screen/Kecamatan';
import ProfileStack from './Stack/ProfileStack';
import HomeStack from './Stack/HomeStack';

const Stack = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='HomeStack' component={HomeStack}/>
        <Stack.Screen name='Kategori' component={Kategori}/>
        <Stack.Screen name='Kecamatan' component={Kecamatan}/>
        <Stack.Screen name='ProfileStack' component={ProfileStack}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}