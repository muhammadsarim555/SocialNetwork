export const baseUrl = 'http://192.168.1.102:8080/';

export const login_Api = `${baseUrl}users/login`;
export const register_api = `${baseUrl}users/register`;
export const add_post = `${baseUrl}post/add-post`;
export const get_post = `${baseUrl}post`;

// import AsyncStorage from '@react-native-community/async-storage';

// export var token = '';
// export async function initializeToken() {
//   try {
//     return await AsyncStorage.getItem('access_token');
//   } catch (e) {
//     // error reading value
//   }
// }
