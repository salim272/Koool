import { AxiosError, InternalAxiosRequestConfig } from 'axios';

export const requestInterceptor = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  console.log('Request Sent:', config);
  return config;
};

export const requestErrorInterceptor = (error: AxiosError) => {
  console.error('Request Error:', error);
  return Promise.reject(error);
};
