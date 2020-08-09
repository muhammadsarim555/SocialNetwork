import React, {Component} from 'react';

import Spinner from 'react-native-loading-spinner-overlay';
import {ActivityIndicator, Image} from 'react-native';

export default function SpinnerLoader(props) {
  const {isLoading} = props;

  return (
    <Spinner
      visible={isLoading}
      color={'black'}
      // textContent={"Loading..."}
      // textStyle={{ color: "white" }}
      size="normal"
      customIndicator={<ActivityIndicator size="large" color="#0000FF" />}
    />
  );
}
