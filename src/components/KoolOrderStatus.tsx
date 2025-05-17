import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ThemeUtils } from '../theme/commonTypes';
import { useTheme } from '../theme/useTheme';

interface KoolOrderStatusProps {
  status?: string;
  accessibilityLabel?: string;
}

const KoolOrderStatus = ({
  status,
  accessibilityLabel,
}: KoolOrderStatusProps) => {
  const { AppFont, wp, hp, Colors } = useTheme() as ThemeUtils;
  const styles = makeStyles({ wp, hp, Colors });

  return (
    <View
      style={[
        styles.statusBadge,
        status === 'CLOSED' ? styles.closedBadge : styles.openBadge,
      ]}
      accessibilityLabel={accessibilityLabel}
    >
      <Text
        style={[
          AppFont?.REGULAR_INTER_10,
          styles.verticalText,
          status === 'CLOSED' ? styles.closedText : styles.openText,
        ]}
      >
        {status}
      </Text>
    </View>
  );
};

export default KoolOrderStatus;

const makeStyles = ({ wp, hp, Colors }: ThemeUtils) =>
  StyleSheet.create({
    statusBadge: {
      width: wp(3),
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: wp(2),
      paddingVertical: hp(1),
    },
    openBadge: {
      backgroundColor: Colors.INVOICED,
    },
    closedBadge: {
      backgroundColor: Colors.CLOSED,
    },
    openText: {
      color: Colors.INVOICED_TEXT,
    },
    closedText: {
      color: Colors.CLOSED_TEXT,
    },
    verticalText: {
      fontWeight: 'bold',
      transform: [{ rotate: '-90deg' }],
      width: hp(8),
      textAlign: 'center',
    },
  });
