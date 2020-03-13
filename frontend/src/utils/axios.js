import axios from 'axios';

const basePath = axios.create({
  baseURL: 'http://localhost:9000',
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
