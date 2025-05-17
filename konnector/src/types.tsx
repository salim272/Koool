export interface AuthRequest {
  loginId: string;
  loginType: string;
}

export interface AuthResponse {
  token: string;
  user: {
    id: string;
    name: string;
  };
}

export interface OrderDateRange {
  fromDate: string;
  toDate: string;
}

export interface BillingAddress {
  id: string;
  street: string;
  location: string;
  city: string;
  state: string;
  pinCode: string;
  phoneNumber?: string;
}

export interface ConfirmOrderDetails {
  id: string;
  assignedToName?: string;
  etaDt?: string;
  orderEnqNum?: string;
  status: string;
  orderDt?: string;
  billingAddress: BillingAddress;
  posOrderItems: {
    id: string;
    matName: string;
    matCode: string;
    orderQty: number;
    unitPrice: string;
    totalPrice: string;
  }[];
}
