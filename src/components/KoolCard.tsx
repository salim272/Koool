import React, { ReactNode } from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

interface KoolCardProps {
  children: ReactNode;
  style?: ViewStyle;
  accessibilityLabel?: string;
}

const KoolCard: React.FC<KoolCardProps> = ({
  children,
  style,
  accessibilityLabel,
}) => (
  <View style={[styles.card, style]} accessibilityLabel={accessibilityLabel}>
    {children}
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginVertical: 8,
  },
});

export default KoolCard;
