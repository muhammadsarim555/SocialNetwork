import React, {useState} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  View,
  Text,
  FlatList,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import styles from './style';
import {Components} from '../../components';

export default function Home({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [dataSource, setDataSource] = useState([
    {
      name: 'test',
      total_likes: 10,
      description:
        'helo i am good helo i am goodhelo i am goodhelo i am goodhelo i am good helo i am good helo i am goodhelo i am goodhelo i am goodhelo i am good good helo i am goodhelo i am goodhelo i am goodhelo i am good good helo i am goodhelo i am goodhelo i am goodhelo i am good good helo i am goodhelo i am goodhelo i am goodhelo i am good ',
      id: '12321',
      liked: false,
    },
    {
      name: 'ali ka',
      total_likes: 12,
      description:
        'helo i am good helo i am goodhelo i am goodhelo i am goodhelo i am good helo i am good helo i am goodhelo i am goodhelo i am goodhelo i am good good helo i am goodhelo i am goodhelo i am goodhelo i am good good helo i am goodhelo i am goodhelo i am goodhelo i am good good helo i am goodhelo i am goodhelo i am goodhelo i am good ',

      id: '12321222',
      liked: true,
    },
    {
      name: 'name ksf',
      total_likes: 19,
      description:
        'helo i am good helo i am goodhelo i am goodhelo i am goodhelo i am good helo i am good helo i am goodhelo i am goodhelo i am goodhelo i am good good helo i am goodhelo i am goodhelo i am goodhelo i am good good helo i am goodhelo i am goodhelo i am goodhelo i am good good helo i am goodhelo i am goodhelo i am goodhelo i am good ',

      id: '1232122209',
      liked: false,
    },
  ]);
  const [isChecked, setIsChecked] = useState(false);

  function handleChildClick(e) {
    // alert(e);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTxt}>Home</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('AddPost')}>
          <Icon name="add-circle-outline" size={25} color="white" />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.bodyContainer}>
          <View style={styles.inputContainer}>
            <Components.Card onPress={handleChildClick} data={dataSource} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
