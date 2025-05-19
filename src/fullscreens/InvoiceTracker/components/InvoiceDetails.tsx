import React from 'react';
import { View, FlatList, Text } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { SingleOrderProps, ThemeUtils } from '../../../theme/commonTypes';
import { useTheme } from '../../../theme/useTheme';
import InvoiceCard from './InvoiceCard';
import KoolDateSelector from '../../../components/KoolDateSelector';

const InvoiceDetails = ({
  fromDate,
  toDate,
  refreshing,
  onRefresh,
  showDatePicker,
  invoiceDetails,
  isDatePickerVisible,
  handleConfirm,
  hideDatePicker,
  navigation,
}: SingleOrderProps) => {
  const { AppFont, wp, Colors } = useTheme() as ThemeUtils;

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
        data={invoiceDetails}
        keyExtractor={(item) => item?.invoiceId}
        renderItem={({ item }) => (
          <InvoiceCard
            //@ts-ignore
            item={item}
            onPress={() =>
              navigation.navigate('InvoiceDetailView', { id: item.invoiceId })
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

export default InvoiceDetails;
