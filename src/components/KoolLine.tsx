import React from 'react';
import { View, StyleSheet } from 'react-native';

interface LineViewProps {
  color?: string;
  thickness?: number;
  vertical?: boolean;
  style?: object;
  accessibilityLabel?: string;
}

const KoolLine: React.FC<LineViewProps> = ({
  color = '#ccc',
  thickness = 1,
  vertical = false,
  style = {},
  accessibilityLabel,
}) => {
  return (
    <View
      style={[
        {
          backgroundColor: color,
          width: vertical ? thickness : '100%',
          height: vertical ? '100%' : thickness,
        },
        style,
      ]}
      accessibilityLabel={accessibilityLabel}
    />
  );
};

export default KoolLine;
