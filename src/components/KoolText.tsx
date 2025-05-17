import React, { ReactNode } from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';

interface KoolTextProps {
  children: ReactNode;
  style?: TextStyle;
  accessibilityLabel?: string;
}

const KoolText: React.FC<KoolTextProps> = ({
  children,
  style,
  accessibilityLabel,
}) => (
  <Text style={[styles.text, style]} accessibilityLabel={accessibilityLabel}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: '#333',
  },
});

export default KoolText;
