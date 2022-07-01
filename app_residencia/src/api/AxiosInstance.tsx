import axios from 'axios';

const AxiosInstance = axios.create({
    baseURL: "http://localhost:8080/comercio-seguro", //ver ipconfig
    // baseURL: "http://10.0.2.2:8080/comercioapi",
  });


export default AxiosInstance;