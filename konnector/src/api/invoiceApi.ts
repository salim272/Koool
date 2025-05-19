import { AxiosInstance } from 'axios';
import { OrderDateRange } from '../types';
import { API_ENDPOINTS } from '../endpoints';
import { InvoiceItem, mapRawInvoiceDetailsItems } from '../models/invoiceList';

export const getInvoiceDetails = async (
  Konnector: AxiosInstance,
  data: OrderDateRange
): Promise<InvoiceItem[]> => {
  const endpoint = `${API_ENDPOINTS.getInvoiceDetails}/${data.fromDate}/${data.toDate}/`;

  try {
    const response = (await Konnector.get<InvoiceItem>(endpoint)).data
      .RESPONSE_BODY;

    return mapRawInvoiceDetailsItems(response);
  } catch (error: any) {
    console.error('GET invoice details failed:', (error as Error).message);
    throw error;
  }
};
