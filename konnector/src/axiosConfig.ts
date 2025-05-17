import axios, { AxiosInstance } from 'axios';
import { requestInterceptor, requestErrorInterceptor } from '../src/Interceptor/requestInterceptor';
import { responseInterceptor, responseErrorInterceptor } from '../src/Interceptor/responseInterceptor';

export const createAxiosInstance = (baseURL: string): AxiosInstance => {
  const instance = axios.create({
    baseURL,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
  });

  instance.interceptors.request.use(requestInterceptor, requestErrorInterceptor);
  instance.interceptors.response.use(responseInterceptor, responseErrorInterceptor);

  return instance;
};
