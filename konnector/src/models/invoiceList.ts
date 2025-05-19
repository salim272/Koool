export interface InvoiceItem {
  paymentStatus: string;
  invoiceTotalAmount: string;
  invoiceDt: string;
  invoiceId: string;
  returnAmt: string;
  RESPONSE_BODY?: any;
  outstandingAmt: string;
  status?: string;
}

export const mapRawInvoiceDetailsItems = (
  data: InvoiceItem[]
): InvoiceItem[] => {
  return data.map((item) => ({
    paymentStatus: item.paymentStatus,
    invoiceTotalAmount: item.invoiceTotalAmount,
    invoiceDt: item.invoiceDt,
    invoiceId: item.invoiceId,
    returnAmt: item.returnAmt,
    outstandingAmt: item.outstandingAmt,
    status: item.paymentStatus,
  }));
};
