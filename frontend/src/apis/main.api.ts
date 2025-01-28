import axios from "axios";
import { appConfig } from "@/configs/app.config";

const mainApi = axios.create({
  baseURL: appConfig.baseApi,
  timeout: 10000,
  validateStatus: (status) => status < 500,
});

// Add a request interceptor
mainApi.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    // const getToken = localStorage.getItem("token");
    // if (getToken) {
    //   const token = getToken.replace(/['"]+/g, "");
    //   config.headers["Authorization"] = `Bearer ${token}`;
    //   config.headers["ngrok-skip-browser-warning"] = "69420";
    // }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
mainApi.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // if (error?.response?.status === 401) {
    //   console.log(window.location.pathname);
    //   localStorage.removeItem("token");
    //   if (window.location.pathname !== "/auth/sign-in") {
    //     window.location.replace("/auth/sign-in");
    //   }
    // }
    return Promise.reject(error);
  }
);

export default mainApi;
