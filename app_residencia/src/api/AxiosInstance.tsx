import axios from 'axios';

const AxiosInstance = axios.create({
  baseURL: "http://localhost:8080/comercio-seguro", //ver ipconfig
});

export default AxiosInstance;