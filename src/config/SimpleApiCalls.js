import axios from 'axios';
import {Alert} from 'react-native';

import {login_Api, register_api, get_post, add_post} from './WebServices';

const getPost = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${get_post}`)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const userRegister = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${register_api}`, data, {
        headers: {
          // Authorization: accessToken,
          'Content-Type': 'multipart/form-data',
          // 'cache-control': 'no-cache',
          // processData: false,
          // contentType: false,
          // mimeType: 'multipart/form-data',
        },
      })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const addPost = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${add_post}`, data, {
        headers: {
          Authorization: accessToken,
          'Content-Type': 'multipart/form-data;',
        },
      })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const userLogin = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${login_Api}`, data, {
        headers: {
          //   Authorization: accessToken,
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export {userLogin, userRegister, addPost, getPost};
