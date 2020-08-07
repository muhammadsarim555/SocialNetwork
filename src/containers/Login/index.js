import React, {useState} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import CheckBox from 'react-native-check-box';

import styles from './style';
import {Components} from '../../components';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  //   alert(JSON.stringify(props.navigation));

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTxt}>Login Your Account</Text>
      </View>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.bodyContainer}>
          <View style={styles.inputContainer}>
            <Components.Input
              inputStyle={styles.inputBar}
              placeholderText={'Email'}
              changeValue={(e) => setEmail(e)}
              inputValue={email}
            />
            <Components.Input
              inputStyle={styles.inputBar}
              placeholderText={'Password'}
              changeValue={(e) => setPassword(e)}
              inputValue={password}
              isSecure={true}
            />
            <View style={[styles.subFooter]}>
              <CheckBox
                style={styles.checkBox}
                onClick={() => {
                  setIsChecked(!isChecked);
                }}
                isChecked={isChecked}
                rightText={'Remember Me'}
              />
              <View style={styles.txtContainer}>
                <Text>Don't Have an Account </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Register')}>
                  <Text style={{fontWeight: 'bold'}}>Register</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.header}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.headerTxt}>Login </Text>
      </TouchableOpacity>
    </View>
  );
}
