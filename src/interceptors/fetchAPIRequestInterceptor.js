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