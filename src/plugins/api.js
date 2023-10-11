import axios from 'axios';

const api = axios.create({
  baseURL: 'https://bunbury-clownfish-bsha.2.us-1.fl0.io/',
});

export default api;