import React from 'react';
import { View, FlatList, Text } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useTheme } from '../../theme/useTheme';
import KoolDateSelector from './KoolDateSelector';
import KoolOrderCard from '../../components/KoolOrderCard';
import { SingleOrderProps, ThemeUtils } from '../../theme/commonTypes';

const ConfirmTab = ({
  fromDate,
  toDate,
  refreshing,
  onRefresh,
  showDatePicker,
  confirmOrdersList,
  isDatePickerVisible,
  handleConfirm,
  hideDatePicker,
  navigation,
  accessibilityLabel,
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
        }}
        accessibilityLabel={accessibilityLabel}
      >
        <KoolDateSelector
          label="From Date"
          date={fromDate}
          onPress={() => showDatePicker('from')}
          accessibilityLabel={'confirmFromDate'}
        />
        <KoolDateSelector
          label="To Date"
          date={toDate}
          onPress={() => showDatePicker('to')}
          accessibilityLabel={'confirmToDate'}
        />
      </View>
      <Text
        style={[
          AppFont?.REGULAR_INTER_14,
          {
            marginTop: wp(2),
            paddingLeft: wp(3),
            borderBottomWidth: 1,
            paddingBottom: wp(2.5),
            borderBottomColor: Colors?.NEUTRAL_7,
          },
        ]}
      >
        Order List
      </Text>
      <FlatList
        data={confirmOrdersList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <KoolOrderCard
            item={item}
            onPress={() =>
              navigation.navigate('StatusTracker', { id: item.id })
            }
            accessibilityLabel={item.id}
            isConfirm
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
        accessibilityLabel={'confirmDateTimePickerModal'}
      />
    </View>
  );
};

export default ConfirmTab;
