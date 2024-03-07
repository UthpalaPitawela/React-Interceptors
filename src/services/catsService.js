import { API_KEY, BASE_URL } from "../constants/contants";
import { axiosRequestInterceptor } from "../interceptors/axiosRequestInterceptor";
import { fetchAPIRequestInterceptor } from "../interceptors/fetchAPIRequestInterceptor";

const baseEndPoint = BASE_URL;
const apiKey = API_KEY;

export const getCatDetailsAxios = () => {
  return axiosRequestInterceptor(baseEndPoint, apiKey).get(
    "https://api.thecatapi.com/v1/images/search?limit=30"
  );
};

export const getCatDetailsFetchAPI = async () => {
  const config = {
    headers: {},
  };
  await fetchAPIRequestInterceptor(
    "https://api.thecatapi.com/v1/images/search?limit=30",
    apiKey,
    config
  );

  try {
    const response = await fetch(
      "https://api.thecatapi.com/v1/images/search?limit=30"
    );
    return response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
