import axios from 'axios';

const api = axios.create({
  // baseURL: 'https://bunbury-clownfish-bsha.2.us-1.fl0.io/',
  // baseURL: 'http://127.0.0.1:8000/api',
  baseURL: "http://0.0.0.0:19003/api",
});

export default api;