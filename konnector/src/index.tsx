import { createAxiosInstance } from './axiosConfig';
import { authenticate, generateOtpForUser, getFeaturedBrands } from './apis';
import { AuthRequest, AuthResponse, OrderDateRange } from './types';
import { FeaturedBrand } from './models/featuredBrands';
import {
  getConfirmOrderDetails,
  getConfirmOrders,
  getEstimateOrderDetails,
  getEstimateOrders,
} from './api/orderApi';

export const initializeKonnector = (baseURL: string) => {
  const Konnector = createAxiosInstance(baseURL);

  return {
    authenticate: (data: AuthRequest) => authenticate(Konnector, data),
    generateOtpForUser: (data: AuthRequest) =>
      generateOtpForUser(Konnector, data),
    // getSalesOrderList: (data) => getSalesOrderList(Konnector, data)
    getFeaturedBrands: () => getFeaturedBrands(Konnector),
    getEstimateOrders: (data: OrderDateRange) =>
      getEstimateOrders(Konnector, data),
    getConfirmOrders: (data: OrderDateRange) =>
      getConfirmOrders(Konnector, data),
    getEstimateOrderDetails: (id: string) =>
      getEstimateOrderDetails(Konnector, id),
    getConfirmOrderDetails: (id: string) =>
      getConfirmOrderDetails(Konnector, id),
  };
};

export { AuthRequest, AuthResponse, FeaturedBrand };
