import React, { useEffect, useState } from 'react';
import KoolSwipeTabs from '../../components/KoolSwipeTabs';
import {
  getEstimateOrders,
  getConfirmOrders,
} from '../../../../src/apis/order/order';
import { OrderItem } from '../../../../konnector/src/models/orderList';
import moment from 'moment';
import { NavigationProps } from '../../theme/commonTypes';
import { dateFormat, subtractDaysFromToday } from '../../utils/dateFormat';
import SingleInvoice from './components/SingleInvoice';
import InvoiceDispatch from './components/InvoiceDispatch';

const InvoiceDetailView: React.FC<NavigationProps> = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [fromDate, setFromDate] = useState(subtractDaysFromToday());
  const [toDate, setToDate] = useState(moment().format('DD-MM-YYYY'));
  const [isDatePickerVisible, setDatePickerVisible] = useState<boolean>(false);
  const [estimateOrdersList, setEstimateOrdersList] = useState<OrderItem[]>([]);
  const [confirmOrdersList, setConfirmOrdersList] = useState<OrderItem[]>([]);
  const [currentDateField, setCurrentDateField] = useState(null);
  const [activeTab, setActiveTab] = useState('details');

  const resetDates = () => {
    setFromDate(subtractDaysFromToday());
    setToDate(dateFormat(new Date(), 1));
  };

  const fetchEstimateOrders = async () => {
    setRefreshing(true);
    try {
      const response = await getEstimateOrders({
        fromDate: fromDate,
        toDate: toDate,
      });
      setEstimateOrdersList(response);
    } catch (error) {
      console.error('Estimate Orders Error:', error);
    } finally {
      setRefreshing(false);
    }
  };

  const fetchConfirmOrders = async () => {
    setRefreshing(true);
    try {
      const response = await getConfirmOrders({
        fromDate: fromDate,
        toDate: toDate,
      });
      setConfirmOrdersList(response);
    } catch (error) {
      console.error('Confirm Orders Error:', error);
    } finally {
      setRefreshing(false);
    }
  };

  useEffect(() => {
    resetDates();
    fetchEstimateOrders();
  }, []);

  useEffect(() => {
    if (activeTab === 'details') {
      fetchEstimateOrders();
    } else {
      fetchConfirmOrders();
    }
  }, [fromDate, toDate, activeTab]);

  const onRefresh = () => {
    if (activeTab === 'details') {
      fetchEstimateOrders();
    } else {
      fetchConfirmOrders();
    }
  };

  const handleTabChange = (tabKey: 'details' | 'outstanding') => {
    resetDates();
    setActiveTab(tabKey);
  };

  const showDatePicker = (field: string) => {
    //@ts-ignore
    setCurrentDateField(field);
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => setDatePickerVisible(false);

  const handleConfirm = (date: Date) => {
    const formattedDate = dateFormat(date, 1);

    if (currentDateField === 'from') {
      setFromDate(formattedDate);
    } else if (currentDateField === 'to') {
      setToDate(formattedDate);
    }

    hideDatePicker();
  };

  return (
    <KoolSwipeTabs
      routes={[
        { key: 'invoiceSummary', title: 'Invoice Summary' },
        { key: 'dispatchDetails', title: 'Dispatch Details' },
      ]}
      scenes={{
        invoiceSummary: () => (
          <SingleInvoice
            fromDate={fromDate}
            toDate={toDate}
            refreshing={refreshing}
            onRefresh={onRefresh}
            showDatePicker={showDatePicker}
            estimateOrdersList={estimateOrdersList}
            isDatePickerVisible={isDatePickerVisible}
            handleConfirm={handleConfirm}
            hideDatePicker={hideDatePicker}
            navigation={navigation}
          />
        ),
        dispatchDetails: () => (
          <InvoiceDispatch
            fromDate={fromDate}
            toDate={toDate}
            refreshing={refreshing}
            onRefresh={onRefresh}
            showDatePicker={showDatePicker}
            confirmOrdersList={confirmOrdersList}
            isDatePickerVisible={isDatePickerVisible}
            handleConfirm={handleConfirm}
            hideDatePicker={hideDatePicker}
            navigation={navigation}
          />
        ),
      }}
      onIndexChange={(index) =>
        handleTabChange(index === 0 ? 'details' : 'outstanding')
      }
    />
  );
};

export default InvoiceDetailView;
