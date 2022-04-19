import axios from "axios";
const axiosInstance = axios.create({
  baseURL : "https://api.themoviedb.org/3",
  params : {
      api_key : "46707a6cc4d94c3fbd3cbc8129624974"
  }
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
    function (config) {
      console.log(config);
      config.headers["Authorization"] =
        "Bearer dddds34das56d4a5sd4a6s5d4as56d4as2d1asx5s4x";
      // Do something before request is sent
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );
  
  // Add a response interceptor
  axiosInstance.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    }
  );
  

  export default axiosInstance;