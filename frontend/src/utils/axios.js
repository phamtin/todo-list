import axios from 'axios';

const basePath = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  responseType: 'json',
});

basePath.interceptors.request.use(request => {
  const token = localStorage.getItem('token');
  request.headers.Authorization = `Bearer ${token}`;
  console.log(request);
  return request;
});

basePath.interceptors.response.use(response => {
  console.log(response);
  return response;
});

export default basePath;
