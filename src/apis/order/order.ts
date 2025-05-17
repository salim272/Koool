import konnector from '../../apis/apiClient';
import {
  EstimateOrderSummary,
  OrderItem,
} from '../../../konnector/src/models/orderList';

export interface OrderDateRange {
  fromDate: string;
  toDate: string;
}

export interface Id {
  id: string;
}
export const getEstimateOrders = async (
  data: OrderDateRange
): Promise<OrderItem[]> => {
  try {
    const response = await konnector.getEstimateOrders(data);
    return response;
  } catch (error) {
    console.log('Failed to fetch order estimate: ', (error as Error).message);
    throw error;
  }
};

export const getConfirmOrders = async (
  data: OrderDateRange
): Promise<OrderItem[]> => {
  try {
    const response = await konnector.getConfirmOrders(data);
    return response;
  } catch (error) {
    console.log('Failed to fetch order confirm: ', (error as Error).message);
    throw error;
  }
};

export const getEstimateOrderDetails = async ({
  id,
}: Id): Promise<EstimateOrderSummary> => {
  try {
    const response = await konnector.getEstimateOrderDetails(id);
    return response;
  } catch (error) {
    console.log('Failed to fetch order confirm: ', (error as Error).message);
    throw error;
  }
};

export const getConfirmOrderDetails = async ({
  id,
}: Id): Promise<EstimateOrderSummary> => {
  try {
    const response = await konnector.getConfirmOrderDetails(id);
    return response;
  } catch (error) {
    console.log('Failed to fetch order confirm: ', (error as Error).message);
    throw error;
  }
};