
import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
 

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Home from './screens/Home';
import Additem from './screens/Additem';
import Look from './screens/Look';





const Stack = createStackNavigator();

class App extends React.Component{
  render()
  {
    return(
     <NavigationContainer>
     <Stack.Navigator initialRouteName = 'Home' screenOptions={{headerShown: false  }}>
 
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Additem" component={Additem} />
        <Stack.Screen name="Look" component={Look} />


     
      </Stack.Navigator>
     </NavigationContainer>
    )
  }

}

export default App;
