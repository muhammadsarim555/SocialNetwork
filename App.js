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

import io from 'socket.io-client';

export default function App() {
  // useEffect(() => {
  //   this.socket = io('http://192.168.1.102:8080/');
  // });

  return (
    <>
      {/* <Components.CheckInternet /> */}
      <Navigator />
    </>
  );
}
