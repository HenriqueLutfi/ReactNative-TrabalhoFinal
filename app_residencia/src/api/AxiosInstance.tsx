import axios from 'axios';

const AxiosInstance = axios.create({


  //  baseURL: "http://localhost:8080/comercio-seguro", //henrique, angelica
  // baseURL: "http://10.0.2.2:8080/comercioapi", //maria
  //  baseURL: "http://10.0.2.2:8080/comercio-seguro", //roberta
  baseURL: "http://localhost:8080/comercioseguro" //amanda
});

export default AxiosInstance;