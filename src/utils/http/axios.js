import axios from 'axios';

const instance = axios.create({
  baseURL: '/api',
  timeout: 50000,
});

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  },
);

export default instance;
