import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {View} from "react-native"; 
//screens
import Login from './screens/Login';

export default function App() {
  return (
    <NativeBaseProvider>
    <Login/>
    </NativeBaseProvider>
  );
}


