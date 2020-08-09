import React, {useState} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  View,
  Text,
  Alert,
} from 'react-native';

import CheckBox from 'react-native-check-box';

import styles from './style';
import {Components} from '../../components';
import {userLogin} from '../../config/SimpleApiCalls';

export default function Login({navigation}) {
  const [email, setEmail] = useState('abc1@gmail.com');
  const [password, setPassword] = useState('sisisiisis');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function handleLogin() {
    setIsLoading(true);

    const payload = {
      email,
      password,
    };

    userLogin(payload)
      .then((res) => {
        setIsLoading(false), navigation.navigate('Home');
        console.log(res);
      })
      .catch((error) => {
        setIsLoading(false)
        Alert.alert(
          'Error',
          error.response.data.message,
          [
            {
              text: 'ok',
              onPress: () => {
                console.log('ok');
              },
            },
          ],
          {cancelable: false},
        );
      });
  }

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
      <TouchableOpacity style={styles.header} onPress={() => handleLogin()}>
        <Text style={styles.headerTxt}>Login </Text>
      </TouchableOpacity>
      {isLoading && <Components.SpinnerLoader isLoading={isLoading} />}
    </View>
  );
}
