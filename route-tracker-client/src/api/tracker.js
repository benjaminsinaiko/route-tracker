import axios from 'axios';

export default axios.create({
  baseURL: 'http://f2edda71.ngrok.io' // will expire every 8hrs
});
