import konnector from '../../apis/apiClient';
import { InvoiceItem } from '../../theme/commonTypes';

export interface OrderDateRange {
  fromDate: string;
  toDate: string;
}
export interface Id {
  id: string;
}

export const getInvoiceDetails = async (
  data: OrderDateRange
): Promise<InvoiceItem[]> => {
  try {
    const response = await konnector.getInvoiceDetails(data);
    return response;
  } catch (error) {
    console.error('Failed to fetch invoice details:', (error as Error).message);
    throw error;
  }
};
