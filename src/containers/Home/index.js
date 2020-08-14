import React, {useState} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  View,
  Text,
  RefreshControl,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import Icon from 'react-native-vector-icons/Ionicons';
import LogoutIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './style';
import {Components} from '../../components';
import {getPost} from '../../config/SimpleApiCalls';

export default function Home({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [dataSource, setDataSource] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  React.useEffect(() => {
    getPosts();
  }, []);

  function getPosts(refresher) {
    refresher && setRefreshing(true);

    getPost()
      .then((res) => {
        setDataSource(res.data);
        setRefreshing(false);
      })
      .catch((error) => console.log('error', error));
  }

  function handleChildClick(e) {
    // alert(JSON.stringify(e));
    console.log('eventevent ', e);
  }

  async function logoutUser(e) {
    try {
      await AsyncStorage.removeItem('current_user');
      // return true;
      setTimeout(() => {
        navigation.navigate('Login');
      }, 1000);
    } catch (exception) {
      return false;
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTxt}>Home</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => navigation.navigate('AddPost')}>
            <Icon name="add-circle-outline" size={25} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={{marginLeft: 20}} onPress={logoutUser}>
            <LogoutIcon name="logout" size={25} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        refreshControl={
          <RefreshControl
            style={{backgroundColor: 'transparent'}}
            refreshing={refreshing}
            onRefresh={() => getPosts(true)}
          />
        }>
        <View style={styles.bodyContainer}>
          <View style={styles.inputContainer}>
            <Components.Card onPress={handleChildClick} data={dataSource} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
