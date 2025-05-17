import React from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';

interface KoolSubTitleProps {
  title: string;
  style?: TextStyle;
  accessibilityLabel?: string;
}

const KoolSubTitle = ({
  title,
  style,
  accessibilityLabel,
}: KoolSubTitleProps) => {
  return (
    <Text style={[styles.title, style]} accessibilityLabel={accessibilityLabel}>
      {title}
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontFamily: 'LexendDeca',
    fontWeight: '400',
  },
});

export default KoolSubTitle;
