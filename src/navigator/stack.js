import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Screens} from '../containers';

const Stack = createStackNavigator();
const AuthStack = createStackNavigator();

function AuthNav() {
  return <></>;
}

function App({firstScreen}) {
  console.log('firstScreenfirstScreen', firstScreen);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={firstScreen}>
        <Stack.Screen name="Home" component={Screens.Home} />
        <Stack.Screen name="Login" component={Screens.Login} />
        <Stack.Screen name="Register" component={Screens.Register} />
        <Stack.Screen name="AddPost" component={Screens.AddPost} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
