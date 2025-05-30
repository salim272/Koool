import React from 'react';
import { View, FlatList, Text } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { SingleOrderProps, ThemeUtils } from '../../../theme/commonTypes';
import { useTheme } from '../../../theme/useTheme';
import InvoiceCard from './InvoiceCard';
import KoolDateSelector from '../../order/KoolDateSelector';

const InvoiceOutstanding = ({
  fromDate,
  toDate,
  refreshing,
  onRefresh,
  showDatePicker,
  //   estimateOrdersList,
  isDatePickerVisible,
  handleConfirm,
  hideDatePicker,
  navigation,
}: SingleOrderProps) => {
  const { AppFont, wp, Colors } = useTheme() as ThemeUtils;
  const estimateOrdersList = [
    {
      id: '1',
      invoiceNumber: '#60004131',
      invoiceDate: '10-10-2024',
      payStatus: 'Open',
      invoiceAmount: 3400,
      returnAmount: 340,
      outstandingAmount: 100,
      status: 'OPEN',
    },
    {
      id: '2',
      invoiceNumber: '#60004132',
      invoiceDate: '12-10-2024',
      payStatus: 'Pending',
      invoiceAmount: 5000,
      returnAmount: 123,
      outstandingAmount: 500,
      status: 'CLOSED',
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingLeft: wp(5),
          paddingRight: wp(5),
          paddingTop: wp(3),
          paddingBottom: wp(2.5),
          borderBottomColor: Colors?.NEUTRAL_6,
          borderBottomWidth: 1,
        }}
      >
        <KoolDateSelector
          label="From Date"
          date={fromDate}
          onPress={() => showDatePicker('from')}
        />
        <KoolDateSelector
          label="To Date"
          date={toDate}
          onPress={() => showDatePicker('to')}
        />
      </View>
      <FlatList
        data={estimateOrdersList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <InvoiceCard
            //@ts-ignore
            item={item}
            onPress={() =>
              navigation.navigate('EstimateOrderDetails', { id: item.id })
            }
          />
        )}
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

export default InvoiceOutstanding;
