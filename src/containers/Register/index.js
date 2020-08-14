import React, {useState} from 'react';
import {
  Image,
  TouchableOpacity,
  ScrollView,
  View,
  Text,
  StatusBar,
  Alert,
} from 'react-native';

import CheckBox from 'react-native-check-box';
import ImagePicker from 'react-native-image-picker';

import styles from './style';
import {Components} from '../../components';
import {userRegister} from '../../config/SimpleApiCalls';

export default function Register({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [profileImage, setProfileImage] = useState('');
  const [uploadImage, setUploadImage] = useState(null);

  function uploadPicture() {
    let options = {};

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        // You can also display the image using data:
        const source = {uri: 'data:image/jpeg;base64,' + response.data};

        const uri = response.uri;
        const type = response.type;
        const name = response.fileName;
        const ImageSource = {
          uri,
          type,
          name,
        };

        setProfileImage(source);
        setUploadImage(ImageSource);
      }
    });
  }

  function handleRegister(ImageSource) {
    setIsLoading(true);

    let formdata = new FormData();

    formdata.append('email', email);
    formdata.append('lastName', lastName);
    formdata.append('firstName', firstName);
    formdata.append('password', password);
    formdata.append('profile_image', uploadImage);

    // console.log(formdata);

    userRegister(formdata)
      .then((res) => {
        setIsLoading(false), navigation.navigate('Home');
      })
      .catch((error) => {
        setIsLoading(false);
        // if (error.response) {
        //   // Request made and server responded
        //   console.log(error.response.data);
        //   console.log(error.response.status);
        //   console.log(error.response.headers);
        // } else if (error.request) {
        //   // The request was made but no response was received
        //   console.log(error.request);
        // } else {
        //   // Something happened in setting up the request that triggered an Error
        //   console.log('Error', error.message);
        // }
        // console.log('error', error);
        // setIsLoading(false);
        // Alert.alert(
        //   'Error',
        //   error?.Error,

        //   // error?.response?.data.message,
        //   [
        //     {
        //       text: 'ok',
        //       onPress: () => {
        //         console.log('ok');
        //       },
        //     },
        //   ],
        //   {cancelable: false},
        // );
        console.log(error);
      });
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTxt}>Register New Account</Text>
      </View>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.bodyContainer}>
          <View style={styles.inputContainer}>
            <TouchableOpacity
              style={styles.profileThumnail}
              onPress={() => uploadPicture()}>
              <Image source={profileImage} style={styles.profileImage} />
            </TouchableOpacity>

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
      <TouchableOpacity style={styles.header} onPress={() => handleRegister()}>
        <Text style={styles.headerTxt}>Register </Text>
      </TouchableOpacity>
      {isLoading && <Components.SpinnerLoader isLoading={isLoading} />}
    </View>
  );
}
