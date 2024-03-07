// Method 1: Fetch API interceptor using Monkey patching method
import * as fetchIntercept from 'fetch-intercept';

export const fetchAPIRequestInterceptor  = async (endPoint, apiKey, config) => {
    const { fetch: originalFetch } = window;
    window.fetch =  async (...args) => {
        //setting the api token for the header
        config.headers = config.headers || {};
        config.headers["x-api-key"] = apiKey;
        config.method = 'GET';
        try {
            const response = await originalFetch(endPoint, config);
            return response;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    };  
}


//Method 2: Fetch API interceptor using fetch-api library
export const fetchInterceptRequestInterceptor  = async (endPoint, apiKey) => {
    const unregister = fetchIntercept.register({
        request: function (url, config) {
            config = { ...config };
            const modifiedUrl = endPoint;
            config.headers = config.headers || {};

            // setting the api token
            return [modifiedUrl, config];
        },
      
        requestError: function (error) {
          return Promise.reject(error);
        },
      
        response: function (response) {
          return response;
        },
      
        responseError: function (error) {
          return Promise.reject(error);
        },
      }); 
}