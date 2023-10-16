import axios from 'axios';

const api = axios.create({
  baseURL: 'https://strong-nutrition.2.us-1.fl0.io/',
  // baseURL: 'http://127.0.0.1:8000/api',
  // baseURL: "http://191.52.55.83:19003/api",
});

export default api;