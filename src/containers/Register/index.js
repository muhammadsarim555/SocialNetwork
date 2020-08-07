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

export default function Register({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTxt}>Register New Account</Text>
      </View>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.bodyContainer}>
          <View style={styles.inputContainer}>
            <TouchableOpacity style={styles.profileThumnail}></TouchableOpacity>

            <Components.Input
              inputStyle={styles.inputBar}
              placeholderText={'First Name'}
              changeValue={(e) => setFirstName(e)}
              inputValue={firstName}
            />
            <Components.Input
              inputStyle={styles.inputBar}
              placeholderText={'Last Name'}
              changeValue={(e) => setLastName(e)}
              inputValue={lastName}
            />
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
                <Text>Have an Account </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                  <Text style={{fontWeight: 'bold'}}>Login</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.header}>
        <Text style={styles.headerTxt}>Register </Text>
      </TouchableOpacity>
    </View>
  );
}
