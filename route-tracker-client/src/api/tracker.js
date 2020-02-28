import axios from 'axios';

export default axios.create({
  baseURL: 'http://3b91a708.ngrok.io' // will expire every 8hrs
});
