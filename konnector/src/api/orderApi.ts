import { AxiosInstance } from 'axios';
import {
  OrderItem,
  mapRawConfirmOrderItems,
  mapRawEstimateOrdersItems,
  RawOrderItem,
  mapRawEstimateOrdersDetailsItems,
  EstimateOrderSummary,
  mapBillingAddress,
  mapPosOrderItems,
} from '../models/orderList';
import { ConfirmOrderDetails, OrderDateRange } from '../types';
import { API_ENDPOINTS } from '../endpoints';

export const getEstimateOrders = async (
  Konnector: AxiosInstance,
  data: OrderDateRange
): Promise<OrderItem[]> => {
  const endpoint = `${API_ENDPOINTS.getEstimateOrders}/cb0001/${data.fromDate}/${data.toDate}/1356990//`;
  try {
    const response = await Konnector.get<RawOrderItem>(endpoint);
    const estimateOrders = mapRawEstimateOrdersItems(
      response.data.RESPONSE_BODY ?? []
    );
    return estimateOrders;
  } catch (error: any) {
    console.error('GET Estimate Orders failed:', (error as Error).message);
    throw error;
  }
};

export const getConfirmOrders = async (
  Konnector: AxiosInstance,
  data: OrderDateRange
): Promise<OrderItem[]> => {
  const endpoint = `${API_ENDPOINTS.getConfirmOrders}/${data.fromDate}/${data.toDate}//`;
  try {
    const response = (await Konnector.get<RawOrderItem>(endpoint)).data
      .RESPONSE_BODY;
    return mapRawConfirmOrderItems(response);
  } catch (error: any) {
    console.error('GET Confirm Orders failed:', (error as Error).message);
    throw error;
  }
};

export const getEstimateOrderDetails = async (
  Konnector: AxiosInstance,
  id: string
): Promise<EstimateOrderSummary> => {
  const endpoint = `${API_ENDPOINTS.getEstimateOrderDetails}/${id}`;
  try {
    const response = (await Konnector.get(endpoint)).data.RESPONSE_BODY;
    return mapRawEstimateOrdersDetailsItems(response);
  } catch (error: any) {
    console.error(
      'GET Estimate Order Details failed:',
      (error as Error).message
    );
    throw error;
  }
};

export const getConfirmOrderDetails = async (
  Konnector: AxiosInstance,
  id: string
): Promise<ConfirmOrderDetails> => {
  const endpoint = `${API_ENDPOINTS.getConfirmOrderDetails}/${id}`;
  try {
    const response = (await Konnector.get(endpoint)).data.RESPONSE_BODY;

    return {
      id: response.id,
      assignedToName: response.assignedToName,
      etaDt: response.etaDt,
      orderEnqNum: response.orderEnqNum,
      status: response.orderStatus,
      orderDt: response?.orderDt,
      billingAddress: mapBillingAddress(response.billingAddress),
      posOrderItems: mapPosOrderItems(response.posOrderItems),
    };
  } catch (error: any) {
    console.error('GET Confirm Order Details failed:', error.message);
    throw error;
  }
};
