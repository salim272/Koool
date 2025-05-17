import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import StepOpen from '../../../assets/images/Check.svg';
import Circle from '../../../assets/images/Circle.svg';
import { useTheme } from '../../theme/useTheme';
import { ThemeUtils } from '../../theme/commonTypes';

const steps = [
  { title: 'Order Open', date: '10-10-2025', icon: StepOpen },
  { title: 'Packing Complete', date: '10-10-2025', icon: Circle },
  { title: 'Invoiced', date: '11-10-2025', icon: Circle },
  { title: 'Dispatched', date: '12-10-2025', icon: Circle },
  { title: 'Cancelled', date: '12-10-2025', icon: Circle },
  { title: 'Closed', date: '13-10-2025', icon: Circle },
];

const OrderTracker = () => {
  const { AppFont, wp, hp, Colors } = useTheme() as ThemeUtils;
  const styles = makeStyles({ wp, hp, Colors });
  return (
    <View style={styles.container} accessibilityLabel="orderTrackerLabel">
      <View style={styles.line} />
      {steps.map((step, index) => {
        const Icon = step.icon;
        return (
          <View
            key={index}
            style={styles.stepContainer}
            accessibilityLabel={'step' + index}
          >
            <Icon width={24} height={24} style={styles.icon} />
            <View style={styles.textContainer}>
              <Text style={[AppFont?.REGULAR_INTER_14]}>{step.title}</Text>
              <Text style={[AppFont?.REGULAR_INTER_GRAY_12]}>{step.date}</Text>
            </View>
            {index !== steps.length - 1 && (
              <View style={styles.dashConnector}>
                <View style={styles.dash} />
                <View style={styles.dash} />
                <View style={styles.dash} />
              </View>
            )}
          </View>
        );
      })}
    </View>
  );
};

export default OrderTracker;

const makeStyles = ({ wp, hp, Colors }: ThemeUtils) =>
  StyleSheet.create({
    container: {
      paddingLeft: wp(5),
      paddingVertical: 10,
      position: 'relative',
    },
    line: {
      position: 'absolute',
      top: 12,
      left: 34,
      width: 2,
      height: '100%',
      borderLeftWidth: 2,
      borderLeftColor: '#ccc',
      borderStyle: 'dashed',
      zIndex: -1,
    },
    stepContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 24,
      position: 'relative',
    },
    icon: {
      marginRight: 12,
    },
    textContainer: {
      marginLeft: 8,
    },
    title: {
      fontSize: 14,
      fontWeight: '600',
      color: '#000',
    },
    date: {
      fontSize: 12,
      color: '#888',
    },
    dashConnector: {
      position: 'absolute',
      paddingTop: 1,

      left: 12,
      top: 32,
      alignItems: 'center',
      gap: 4,
    },
    dash: {
      width: 1,
      height: 6,
      backgroundColor: Colors.NEUTRAL_4,
      marginVertical: 1,
    },
  });
