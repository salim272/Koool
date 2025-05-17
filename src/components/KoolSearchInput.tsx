import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';
import Colors from '../theme/colors';

interface KoolSearchInputProps extends TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

const KoolSearchInput: React.FC<KoolSearchInputProps> = ({
  value,
  onChangeText,
  placeholder = 'Search...',
  ...rest
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      style={styles.input}
      {...rest}
    />
  );
};

export default KoolSearchInput;

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: Colors.NEUTRAL_7,
    flexDirection: 'row',
    borderRadius: 5,
    marginBottom: 10,
    height: 40,
  },
});
