import React, { useEffect, useState } from 'react';
import moment from 'moment';
import ConfirmTab from './ConfirmTab';
import EstimateTab from './EstimateTab';
import KoolSwipeTabs from '../../components/KoolSwipeTabs';
import { NavigationProps } from '../../theme/commonTypes';
import { getConfirmOrders, getEstimateOrders } from '../../apis/order/order';

const Orders = ({ navigation }: NavigationProps) => {
  const [refreshing, setRefreshing] = useState(false);
  const [fromDate, setFromDate] = useState(moment().format('DD-MM-YYYY'));
  const [toDate, setToDate] = useState(moment().format('DD-MM-YYYY'));
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [estimateOrdersList, setEstimateOrdersList] = useState([]);
  const [confirmOrdersList, setConfirmOrdersList] = useState([]);
  const [currentDateField, setCurrentDateField] = useState(null);
  const [activeTab, setActiveTab] = useState('estimate');

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
    fetchEstimateOrders();
  }, []);

  useEffect(() => {
    if (activeTab === 'estimate') {
      fetchEstimateOrders();
    } else {
      fetchConfirmOrders();
    }
  }, [fromDate, toDate]);

  const onRefresh = () => {
    if (activeTab === 'estimate') {
      fetchEstimateOrders();
    } else {
      fetchConfirmOrders();
    }
  };

  const handleTabChange = (tabKey: 'estimate' | 'confirm') => {
    setActiveTab(tabKey);

    if (tabKey === 'estimate' && estimateOrdersList.length === 0) {
      fetchEstimateOrders();
    } else if (tabKey === 'confirm' && confirmOrdersList.length === 0) {
      fetchConfirmOrders();
    }
  };

  const showDatePicker = (field: 'from' | 'to') => {
    setCurrentDateField(field);
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => setDatePickerVisible(false);

  const handleConfirm = (date: Date) => {
    const formattedDate = moment(date).format('DD-MM-YYYY');
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
        { key: 'estimate', title: 'Estimate' },
        { key: 'confirm', title: 'Confirm Order' },
      ]}
      scenes={{
        estimate: () => (
          <EstimateTab
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
            accessibilityLabel="estimateTab"
          />
        ),
        confirm: () => (
          <ConfirmTab
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
            accessibilityLabel="confirmTab"
          />
        ),
      }}
      onIndexChange={(index) =>
        handleTabChange(index === 0 ? 'estimate' : 'confirm')
      }
      accessibilityLabel="orderSwipeTabs"
    />
  );
};

export default Orders;
