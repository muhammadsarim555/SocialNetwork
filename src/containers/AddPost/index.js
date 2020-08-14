import React, {useState, useEffect} from 'react';
import {
  Alert,
  TouchableOpacity,
  ScrollView,
  View,
  Text,
  Image,
} from 'react-native';

import ImagePicker from 'react-native-image-picker';

import styles from './style';
import {Components} from '../../components';
import {getCurrentUser} from '../../config/WebServices';
import {addPost} from '../../config/SimpleApiCalls';

export default function AddPost({navigation}) {
  const [email, setEmail] = useState('');
  const [caption, setCaption] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [uploadImage, setUploadImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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

  async function upload(ImageSource) {
    let user_ = await getCurrentUser();
    let parseUser = JSON.parse(user_);

    setIsLoading(true);

    let formdata = new FormData();

    formdata.append('post_image', uploadImage);
    formdata.append('userId', parseUser._id);

    addPost(formdata)
      .then((res) => {
        setIsLoading(false);
        Alert.alert('Success', 'Your Image Uploaded Successfully');
        navigation.navigate('Home');
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
        Alert.alert(
          'Error',
          error?.Error,

          // error?.response?.data.message,
          [
            {
              text: 'ok',
              onPress: () => {},
            },
          ],
          {cancelable: false},
        );
      });
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTxt}>Add New Post</Text>
      </View>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.bodyContainer}>
          <View style={styles.inputContainer}>
            <TouchableOpacity
              style={styles.profileThumnail}
              onPress={uploadPicture}>
              <Image source={profileImage} style={styles.profileImage} />
            </TouchableOpacity>

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
      <TouchableOpacity onPress={upload} style={styles.header}>
        <Text style={styles.headerTxt}>Upload </Text>
      </TouchableOpacity>
      {isLoading && <Components.SpinnerLoader isLoading={isLoading} />}
    </View>
  );
}
