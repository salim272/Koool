import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../theme/useTheme';
import { ThemeUtils } from '../theme/commonTypes';

interface KoolHeaderTextProps {
  label?: string;
  value?: string;
  containerStyle?: object;
  isPadding?: boolean;
  isBlack?: boolean;
  isFont16?: boolean;
  accessibilityLabel?: string;
}

const KoolHeaderText = ({
  label,
  value,
  containerStyle,
  isPadding,
  isBlack,
  isFont16,
  accessibilityLabel,
}: KoolHeaderTextProps) => {
  const { AppFont, wp, hp, Colors } = useTheme() as ThemeUtils;
  const styles = makeStyles({ wp, hp, Colors });

  return (
    <View
      style={[
        styles.cardContainer,
        containerStyle,
        { paddingHorizontal: isPadding ? wp(1) : wp(2) },
      ]}
      accessibilityLabel={accessibilityLabel}
    >
      {label ? (
        <Text
          style={
            isBlack ? AppFont?.REGULAR_INTER_12 : AppFont?.REGULAR_INTER_GRAY_12
          }
        >
          {label}
        </Text>
      ) : null}
      {value ? (
        <Text
          style={
            isFont16 ? AppFont?.REGULAR_INTER_16 : AppFont?.REGULAR_INTER_14
          }
        >
          {value}
        </Text>
      ) : null}
    </View>
  );
};

const makeStyles = ({ wp, hp, Colors }: ThemeUtils) =>
  StyleSheet.create({
    cardContainer: {
      paddingVertical: hp(0.6),
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    },
  });

export default KoolHeaderText;
