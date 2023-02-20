import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screen/Home';
import Kategori from './Screen/Kategori';
import Detail from './Screen/Detail';
import Profil from './Screen/Profil';
import Kecamatan from './Screen/Kecamatan';
import Detail_Profil from './Screen/Detail_Profil';
import List_Barang from './Screen/List_Barang';
import Profil_Not_Login from './Screen/Profil_Not_Login';
import Login from './Screen/Login';
import Tambah_Barang from './Screen/Tambah_Barang';
import Edit_Barang from './Screen/Edit_Barang';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Edit_Barang' component={Edit_Barang}/>
        <Stack.Screen name='Tambah_Barang' component={Tambah_Barang}/>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Profil_Not_Login' component={Profil_Not_Login}/>
        <Stack.Screen name='List_Barang' component={List_Barang}/>
        <Stack.Screen name='Detail' component={Detail}/>
        <Stack.Screen name='Kategori' component={Kategori}/>
        <Stack.Screen name='Kecamatan' component={Kecamatan}/>
        <Stack.Screen name='Profil' component={Profil}/>
        <Stack.Screen name='Detail_Profil' component={Detail_Profil}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}