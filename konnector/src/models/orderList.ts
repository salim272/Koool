export interface RawOrderItem {
  id: string;
  soNum: string;
  soDt: string;
  soStatus: string;
  etaDate?: string;
  orderTotalAmount?: string;
  customerName: string;
  orderType: string;
  [key: string]: any;
}

export interface OrderItem {
  id: string;
  status: string;
  number: string;
  date: string;
  type: string;
  etaDt?: string;
  enquiryNumber?: number;
}
interface FilteredSalesOrderItem {
  assignedToName: string | null;
  soQty: number;
  totalPrice: string;
  prdBrand: string;
  etaDate: string | null;
  fuelType: string;
  yearOfMfg: string;
  make: string;
  model: string;
  vehicleVariant: string;
  matName: string;
}

export interface EstimateOrderSummary {
  orderType: string;
  soDt: string;
  id: string;
  status: string;
  salesOrderItems: FilteredSalesOrderItem[];
}

export const mapRawEstimateOrdersItems = (
  rawOrders: RawOrderItem[]
): OrderItem[] => {
  return rawOrders.map((item) => ({
    id: item.id,
    status: item.soStatus,
    number: item.soNum,
    date: item.soDt,
    type: item.orderType,
    etaDt: item.etaDate,
  }));
};

export const mapRawConfirmOrderItems = (
  rawOrders: RawOrderItem[]
): OrderItem[] => {
  return rawOrders.map((item) => ({
    id: item.id,
    status: item.orderStatus,
    number: item.orderNum,
    date: item.orderDt,
    amount: item.orderTotalAmount,
    type: item.orderType,
    enquiryNumber: item.orderEnqNum || 'Null',
    etaDt: item.etaDt,
  }));
};

interface FilteredSalesOrderItem {
  assignedToName?: string;
  soQty: number;
  totalPrice: string;
  prdBrand: string;
  etaDate?: string;
  fuelType: string;
  yearOfMfg: string;
  make: string;
  model: string;
  vehicleVariant: string;
}


interface BillingAddress {
  id: string;
  street: string;
  location: string;
  city: string;
  state: string;
  pinCode: string;
  phoneNumber: string;
}

interface PosOrderItem {
  orderType: string;
  materialCategoryName: string;
  orderQty: number;
  itemStatus: string;
  matCode: string;
  matName: string;
  materialType: string;
  etaDate: string;
  prdBrand: string;
  vehModel: string;
  fuelType: string;
  vehicleVariant: string;
}


export const mapRawEstimateOrdersDetailsItems = (
  rawOrder: any
): EstimateOrderSummary => {
  const filteredItems: FilteredSalesOrderItem[] = rawOrder.salesOrderItems.map(
    (item: any) => ({
      assignedToName: item.assignedToName,
      soQty: item.soQty,
      totalPrice: item.totalPrice,
      prdBrand: item.prdBrand,
      etaDate: item.etaDate,
      fuelType: item.fuelType,
      yearOfMfg: item.yearOfMfg,
      make: item.make,
      model: item.model,
      vehicleVariant: item.vehicleVariant,
      matName: item?.matName,
    })
  );

  return {
    orderType: rawOrder.orderType,
    status: rawOrder.soStatus,
    id: rawOrder.id,
    soDt: rawOrder.soDt,
    salesOrderItems: filteredItems,
  };
};


export const mapBillingAddress = (billingAddress: BillingAddress): BillingAddress => ({
  id: billingAddress.id,
  street: billingAddress?.addressDescription1,
  location: billingAddress.location,
  city: billingAddress.city,
  state: billingAddress.state,
  pinCode: billingAddress.pinCode,
  phoneNumber: billingAddress.phoneNumber,
});

export const mapPosOrderItems = (posOrderItems: PosOrderItem[]): PosOrderItem[] =>
  posOrderItems.map((item: PosOrderItem) => ({
    orderType: item.orderType,
    materialCategoryName: item.materialCategoryName,
    orderQty: item.orderQty,
    itemStatus: item.itemStatus,
    matCode: item.matCode,
    matName: item.matName,
    materialType: item.materialType,
    etaDate: item.etaDate,
    prdBrand: item.prdBrand,
    vehModel: item.vehModel,
    fuelType: item.fuelType,
    vehicleVariant: item.vehicleVariant,
  }));
