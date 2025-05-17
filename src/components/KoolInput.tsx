import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';

interface KoolInputProps extends TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  accessibilityLabel?: string;
}

const KoolInput: React.FC<KoolInputProps> = ({
  value,
  onChangeText,
  placeholder,
  style,
  accessibilityLabel,
  ...rest
}) => (
  <TextInput
    value={value}
    onChangeText={onChangeText}
    placeholder={placeholder}
    style={[styles.input, style]}
    {...rest}
    accessibilityLabel={accessibilityLabel}
  />
);

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    marginVertical: 8,
  },
});

export default KoolInput;
