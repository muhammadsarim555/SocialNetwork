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
          'Access-Control-Allow-Headers':
            'Access-Control-Allow-Methods, Access-Control-Allow-Origin, Origin, Accept, Content-Type',
          "Accept": 'application/x-www-form-urlencoded',
          'Content-Type': 'application/x-www-form-urlencoded',
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
          'Access-Control-Allow-Headers':
            'Access-Control-Allow-Methods, Access-Control-Allow-Origin, Origin, Accept, Content-Type',
          "Accept": 'application/x-www-form-urlencoded',
          'Content-Type': 'application/x-www-form-urlencoded',
          // 'Content-Type': 'application/x-www-form-urlencoded',
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
