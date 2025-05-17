import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { ThemeUtils } from '../theme/commonTypes';
import { useTheme } from '../theme/useTheme';

const KoolDivider = () => {
  const { wp } = useTheme() as ThemeUtils;

  return <Text style={[styles.pipe, { marginHorizontal: wp(0.1) }]}>|</Text>;
};

export default KoolDivider;

const styles = StyleSheet.create({
  pipe: {
    fontSize: 16,
  },
});
