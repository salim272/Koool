import React from 'react';
import { View, FlatList, Text } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { SingleOrderProps, ThemeUtils } from '../../../theme/commonTypes';
import { useTheme } from '../../../theme/useTheme';
import KoolDateSelector from '../../../components/KoolDateSelector';
import InvoiceCard from './InvoiceCard';
import KoolBorder from '../../../components/KoolBorder';

const InvoiceDispatch: React.FC<SingleOrderProps> = ({
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
}) => {
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
    // {
    //   id: '2',
    //   invoiceNumber: '#60004132',
    //   invoiceDate: '12-10-2024',
    //   payStatus: 'Pending',
    //   invoiceAmount: 5000,
    //   returnAmount: 123,
    //   outstandingAmount: 500,
    //   status: 'CLOSED',
    // },
  ];

  return (
    <View style={{ flex: 1 }}>
      {/* <KoolBorder /> */}
      <View>
        <FlatList
          data={estimateOrdersList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <InvoiceCard
              //@ts-ignore
              item={item}
              isDispatch
              onPress={() =>
                navigation.navigate('EstimateOrderDetails', { id: item.id })
              }
            />
          )}
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      </View>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

export default InvoiceDispatch;
