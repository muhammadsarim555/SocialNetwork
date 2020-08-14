/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';

import {Screens} from './src/containers';
import Navigator from './src/navigator/stack';
import {Components} from './src/components';
import {getCurrentUser} from './src/config/WebServices';

import io from 'socket.io-client';

export default function App() {
  // useEffect(() => {
  //   this.socket = io('http://192.168.1.102:8080/');
  // });

  let [isLoading, setIsLoading] = React.useState(true);
  let [screenNavigate, setScreenNavigate] = React.useState('');

  React.useEffect(() => {
    checkUser();
  }, []);

  let checkUser = async () => {
    let user_ = await getCurrentUser();
    let parseUser = JSON.parse(user_);

    if (parseUser) {
      setScreenNavigate('Home');
      setIsLoading(false);
    } else {
      setScreenNavigate('Login');
      setIsLoading(false);
    }
  };

  return (
    <>
      {screenNavigate ? (
        <Navigator firstScreen={screenNavigate} />
      ) : (
        <Components.SpinnerLoader isLoading={isLoading} />
      )}
    </>
  );
}
