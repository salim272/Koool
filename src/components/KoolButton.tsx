import React from 'react';
import { Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

interface KoolButtonProps {
  accessibilityLabel?: string;
  text: string;
  onPress: () => void;
  disabled?: boolean;
}

const KoolButton: React.FC<KoolButtonProps> = ({
  accessibilityLabel,
  text,
  onPress,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.buttonContainer}
      accessibilityLabel={accessibilityLabel}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 6,
    height: 50,
    width: '100%',
    backgroundColor: '#1E90FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
    color: 'white',
  },
});

export default KoolButton;
