import axios from "axios";

export const axiosRequestInterceptor = (baseEndPoint, apiKey) => {
  const api = axios.create({
    baseURL: baseEndPoint, // our API base URL
  });

  api.interceptors.request.use(
    (config) => {
      // If use api keys
      if (apiKey) {
        config.headers["x-api-key"] = apiKey;
      }
      //If use Bearer tokens
      // config.headers.Authorization = `Bearer ${apiKey}`;

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return api;
};
