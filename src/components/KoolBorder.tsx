import React from 'react';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { ThemeUtils } from '../theme/commonTypes';
import { useTheme } from '../theme/useTheme';

interface KoolBorderProps {
  borderTop?: boolean;
}

const KoolBorder = ({ borderTop = false }: KoolBorderProps) => {
  const { wp, hp, Colors } = useTheme() as ThemeUtils;
  const styles = makeStyles({ wp, hp, Colors });
  return <View style={borderTop ? styles.borderTop : styles.baseStyle} />;
};

const makeStyles = ({ wp, hp, Colors }: ThemeUtils) =>
  StyleSheet.create({
    baseStyle: {
      borderBottomWidth: 1,
      borderBottomColor: Colors.NEUTRAL_6,
    },
    borderTop: {
      borderTopWidth: 1,
      borderTopColor: Colors.NEUTRAL_6,
    },
  });

export default KoolBorder;
