## React API Interceptors in React

This repo includes the Interceptor implementations for the Axios and Fetch-Api REST APIs.

Axios interceptor implementations can be found [here](https://github.com/UthpalaPitawela/React-Interceptors/blob/main/src/interceptors/axiosRequestInterceptor.js)

While the Fetch Api internceptor implementation can be found [here](https://github.com/UthpalaPitawela/React-Interceptors/blob/main/src/interceptors/fetchAPIRequestInterceptor.js)
For the Fetch Api, interceptor implementation was done using Monkey patching method and Fetch-Intercept npm library.

All the interceptor implementations are related to request interceptors and they are defined as a common implementation that can be reused by the services.

For this codebase, the [Cat API](https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=bOoHBz-8t) is used.

## How to run 

1. ``` npm install ```
2. Get an API key from the [Cat API](https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=bOoHBz-8t) and add that to the constants.js file
3. Run the application: ``` npm start ```
