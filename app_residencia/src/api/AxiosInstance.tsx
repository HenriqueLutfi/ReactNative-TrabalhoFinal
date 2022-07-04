import axios from 'axios';

const AxiosInstance = axios.create({
  //baseURL: "http://localhost:8080/comercio-seguro", //henrique, amanda, angelica
  // baseURL: "http://10.0.2.2:8080/comercioapi", //maria
   baseURL: "http://10.0.2.2:8080/comercio-seguro", //roberta
});
export default AxiosInstance;