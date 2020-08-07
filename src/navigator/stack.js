import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Screens} from '../containers';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={Screens.Login} />
        <Stack.Screen name="Register" component={Screens.Register} />
        <Stack.Screen name="Home" component={Screens.Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
