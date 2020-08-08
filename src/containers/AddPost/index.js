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

export default function AddPost({navigation}) {
  const [email, setEmail] = useState('');
  const [image, setImage] = useState('');
  const [caption, setCaption] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTxt}>Add New Post</Text>
      </View>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.bodyContainer}>
          <View style={styles.inputContainer}>
            <TouchableOpacity style={styles.profileThumnail}></TouchableOpacity>

            <Components.Input
              inputStyle={styles.inputBar}
              placeholderText={'Write Caption'}
              changeValue={(e) => setCaption(e)}
              inputValue={caption}
              numberOfLines={6}
            />
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.header}>
        <Text style={styles.headerTxt}>Upload </Text>
      </TouchableOpacity>
    </View>
  );
}
