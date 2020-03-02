import axios from 'axios';
import { AsyncStorage } from 'react-native';

const instance = axios.create({
  baseURL: 'http://265068f8.ngrok.io' // will expire every 8hrs
});

instance.interceptors.request.use(
  async config => {
    const userToken = await AsyncStorage.getItem('userToken');
    if (userToken) {
      config.headers.Authorization = `Bearer ${userToken}`;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

export default instance;
