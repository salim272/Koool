import { AxiosResponse, AxiosError } from 'axios';

export const responseInterceptor = (response: AxiosResponse) => {
  console.log('Response Status: ', response.status);
  // console.log('Response Received:', response);
  return response;
};

export const responseErrorInterceptor = (error: AxiosError) => {
  console.error('Response Error: ', error.message);
  console.error('Response Error Status: ', error.response?.status);
  return Promise.reject(error);
};
