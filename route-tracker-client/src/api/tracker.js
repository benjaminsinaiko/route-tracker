import axios from 'axios';

export default axios.create({
  baseURL: 'http://c8b1dfd3.ngrok.io' // will expire every 8hrs
});
