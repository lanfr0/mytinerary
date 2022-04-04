import axios from "axios";

const apiClient = axios.create({
  baseURL: "",
  headers: {
    "Content-type": "application/json",
    Accept: "*/*",
  },
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status !== 401) {
      return Promise.reject(error);
    } else {
      console.log("Oh, 401!");
      window.location.href = "/signin";
    }
  }
);

export default apiClient;
