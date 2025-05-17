import { TextStyle, ViewStyle, ImageStyle } from 'react-native';
//@ts-ignore
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { InvoiceItem } from '../../../konnector/src/models/invoiceList';

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

export interface ThemeUtils {
  wp: (value: number) => number;
  hp: (value: number) => number;
  Colors: {
    [key: string]: string;
  };
  AppFont?: {
    [key: string]: TextStyle;
  };
  globalStyles?: NamedStyles<any>;
}
interface StackParamList {
  Orders: undefined;
  EstimateOrderDetails: undefined;
  StatusTracker: undefined;
}

type ScreenNavigationProp = NativeStackNavigationProp<StackParamList, ''>;

export interface NavigationProps {
  navigation: ScreenNavigationProp;
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

export interface SingleOrderProps {
  fromDate: string;
  toDate: string;
  refreshing: boolean;
  onRefresh: () => void;
  showDatePicker: (field: 'from' | 'to') => void;
  estimateOrdersList?: OrderItem[];
  isDatePickerVisible: boolean;
  handleConfirm: (date: Date) => void;
  hideDatePicker: () => void;
  navigation: any;
  confirmOrdersList?: OrderItem[];
  accessibilityLabel?: string;
  invoiceDetails?: InvoiceItem[];
}
