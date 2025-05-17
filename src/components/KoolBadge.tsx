import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface KoolBadgeProps {
  text: string;
  accessibilityLabel?: string;
}

const KoolBadge: React.FC<KoolBadgeProps> = ({ text, accessibilityLabel }) => (
  <View style={styles.badge} accessibilityLabel={accessibilityLabel}>
    <Text style={styles.text}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  badge: {
    backgroundColor: 'red',
    padding: 6,
    borderRadius: 10,
    minWidth: 24,
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default KoolBadge;
