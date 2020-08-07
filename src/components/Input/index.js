import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
} from 'react-native';

import styles from './style';

export default function Register(props) {
  const {
    inputStyle,
    changeValue,
    inputValue,
    keyboardType,
    isEditable,
    placeholderText,
    isSecure,
  } = props;

  return (
    <TextInput
      placeholder={placeholderText}
      secureTextEntry={isSecure}
      style={inputStyle}
      onChangeText={changeValue}
      value={inputValue}
      keyboardType={keyboardType}
      editable={isEditable}
    />
  );
}
