import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
interface KoolEmptyStateProps {
  accessibilityLabel?: string;
}

const KoolEmptyState = ({ accessibilityLabel }: KoolEmptyStateProps) => (
  <View style={styles.container} accessibilityLabel={accessibilityLabel}>
    <Text style={styles.text}>No results found.</Text>
  </View>
);

export default KoolEmptyState;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '2%',
    width: '100%',
    marginTop: 20,
    alignItems: 'center',
  },
  text: {
    color: 'gray',
    fontSize: 16,
    textAlign: 'center',
  },
});
