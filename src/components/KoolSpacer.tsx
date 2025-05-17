import React from 'react';
import { View, ViewStyle } from 'react-native';

type SpacerProps = {
  size?: number;
  vertical?: boolean;
  style?: ViewStyle;
  accessibilityLabel?: string;
};

const KoolSpacer = ({
  size = 8,
  vertical = false,
  style,
  accessibilityLabel,
}: SpacerProps) => {
  const spacerStyle: ViewStyle = {
    width: vertical ? 0 : size,
    height: vertical ? size : 0,
    ...(style || {}),
  };

  return <View style={spacerStyle} accessibilityLabel={accessibilityLabel} />;
};

export default KoolSpacer;