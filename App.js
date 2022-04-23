import {View, ScrollView, Text} from 'react-native';
import React from 'react';
import Home from './app/screens/HomeScreen';
import Input from './app/screens/InputScreen';
import Server from './app/screens/ServersScreen';
import Store from './app/screens/StoreScreen';
import Witaj from './app/screens/WitajScreen';

export default function App() {
  return (
    <View>
      <Home />
      {/* <Witaj /> */}
      {/* <Input /> */}
      {/* <Server /> */}
      {/* <Store /> */}
    </View>
  );
}
