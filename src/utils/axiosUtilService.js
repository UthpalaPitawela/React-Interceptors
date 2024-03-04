
import axios from 'axios';
const baseEndPoint = "https://api.thecatapi.com";

const apiKey = "";
export const axiosUtilService = () => {
    const api = axios.create({
        baseURL: baseEndPoint, // our API base URL
      });
      
      // Request interceptor for adding the bearer token
      api.interceptors.request.use(
        (config) => {
        // If use api keys 
        if (apiKey) {
          config.headers['x-api-key'] = apiKey;
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
}