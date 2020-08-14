import AsyncStorage from '@react-native-community/async-storage';

export const baseUrl = 'http://192.168.1.101:8080/';

export const login_Api = `${baseUrl}users/login`;
export const register_api = `${baseUrl}users/register`;
export const add_post = `${baseUrl}post/add-post`;
export const get_post = `${baseUrl}post`;

export async function getCurrentUser() {
  try {
    return await AsyncStorage.getItem('current_user');
  } catch (e) {
    // error reading value
  }
}

export async function setCurrentUser(userInfo) {
  try {
    return await AsyncStorage.setItem('current_user', JSON.stringify(userInfo));
  } catch (e) {
    // error reading value
  }
}
