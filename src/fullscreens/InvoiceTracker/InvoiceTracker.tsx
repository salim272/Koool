import React, { useEffect, useState, useCallback, useMemo } from 'react';
import KoolSwipeTabs from '../../components/KoolSwipeTabs';
import { getConfirmOrders } from '../../../../src/apis/order/order';
import moment from 'moment';
import { NavigationProps } from '../../theme/commonTypes';
import InvoiceDetails from './components/InvoiceDetails';
import { dateFormat, subtractDaysFromToday } from '../../utils/dateFormat';
import InvoiceOutstanding from './components/InvoiceOutstanding';
import { getInvoiceDetails } from '../../../../src/apis/invoice/invoice';
import { InvoiceItem } from '../../../../konnector/src/models/invoiceList';
import { invoiceTrackerRoute } from '../../utils/constants';

const InvoiceTracker: React.FC<NavigationProps> = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);
  const [fromDate, setFromDate] = useState(subtractDaysFromToday());
  const [toDate, setToDate] = useState(moment().format('DD-MM-YYYY'));
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [invoiceDetails, setInvoiceDetails] = useState<InvoiceItem[]>([]);
  const [confirmOrdersList, setConfirmOrdersList] = useState<InvoiceItem[]>([]);
  const [currentDateField, setCurrentDateField] = useState<
    'from' | 'to' | null
  >(null);
  const [activeTab, setActiveTab] = useState<'details' | 'outstanding'>(
    'details'
  );

  const resetDates = useCallback(() => {
    setFromDate(subtractDaysFromToday());
    setToDate(dateFormat(new Date(), 1));
  }, []);

  const fetchInvoiceDetails = useCallback(async () => {
    setRefreshing(true);
    try {
      const response = await getInvoiceDetails({ fromDate, toDate });
      setInvoiceDetails(response);
    } catch (error) {
      console.error('Failed to fetch invoice details:', error);
    } finally {
      setRefreshing(false);
    }
  }, [fromDate, toDate]);

  const fetchConfirmOrders = useCallback(async () => {
    setRefreshing(true);
    try {
      const response = await getConfirmOrders({ fromDate, toDate });
      setConfirmOrdersList(response);
    } catch (error) {
      console.error('Confirm Orders Error:', error);
    } finally {
      setRefreshing(false);
    }
  }, [fromDate, toDate]);

  useEffect(() => {
    resetDates();
    fetchInvoiceDetails();
  }, [resetDates, fetchInvoiceDetails]);

  useEffect(() => {
    if (activeTab === 'details') {
      fetchInvoiceDetails();
    } else {
      fetchConfirmOrders();
    }
  }, [fromDate, toDate, activeTab, fetchInvoiceDetails, fetchConfirmOrders]);

  const onRefresh = useCallback(() => {
    if (activeTab === 'details') {
      fetchInvoiceDetails();
    } else {
      fetchConfirmOrders();
    }
  }, [activeTab, fetchInvoiceDetails, fetchConfirmOrders]);

  const handleTabChange = useCallback(
    (tabKey: 'details' | 'outstanding') => {
      resetDates();
      setActiveTab(tabKey);
    },
    [resetDates]
  );

  const showDatePicker = useCallback((field: 'from' | 'to') => {
    setCurrentDateField(field);
    setDatePickerVisible(true);
  }, []);

  const hideDatePicker = useCallback(() => {
    setDatePickerVisible(false);
  }, []);

  const handleConfirm = useCallback(
    (date: Date) => {
      const formattedDate = dateFormat(date, 1);

      if (currentDateField === 'from') {
        setFromDate(formattedDate);
      } else if (currentDateField === 'to') {
        setToDate(formattedDate);
      }

      hideDatePicker();
    },
    [currentDateField, hideDatePicker]
  );

  return (
    <KoolSwipeTabs
      routes={invoiceTrackerRoute}
      scenes={{
        details: () => (
          <InvoiceDetails
            fromDate={fromDate}
            toDate={toDate}
            refreshing={refreshing}
            InvoiceOutstanding
            onRefresh={onRefresh}
            showDatePicker={showDatePicker}
            invoiceDetails={invoiceDetails}
            isDatePickerVisible={isDatePickerVisible}
            handleConfirm={handleConfirm}
            hideDatePicker={hideDatePicker}
            navigation={navigation}
          />
        ),
        outstanding: () => (
          <InvoiceOutstanding
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

export default InvoiceTracker;
