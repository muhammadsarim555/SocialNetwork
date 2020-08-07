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

export default function Home({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTxt}>Home</Text>
      </View>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.bodyContainer}>
          <View style={styles.inputContainer}>
            <Components.Card />
            <Components.Card />
            <Components.Card />
            <Components.Card />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
