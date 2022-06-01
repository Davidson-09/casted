import React from 'react';
import {View, Text, SafeAreaView} from  'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Intro from './src/screens/Intro';
import Home from './src/screens/Home';
import { CastDetailsScreen } from './src/screens/CastDetailsScreen';

const Stack = createNativeStackNavigator();

const App= () => {

  return (
    <SafeAreaView style={{height:'100%'}}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="intro" component={Intro} />
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="cast details" component={CastDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};


export default App;
