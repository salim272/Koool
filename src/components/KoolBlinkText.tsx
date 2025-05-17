import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { useTheme } from '../theme/useTheme';

interface BlinkTextProps {
  text: string;
  mainColor: string;
  secondColor: string;
  visibleDuration?: number;
  invisibleDuration?: number;
}

const KoolBlinkText = ({
  text,
  mainColor,
  secondColor,
  visibleDuration = 1000,
  invisibleDuration = 250,
}: BlinkTextProps) => {
  const [showBlink, setShowBlink] = useState(true);
  const [timer, setTimer] = useState(visibleDuration);
  const { AppFont } = useTheme();
  useEffect(() => {
    const interval = setTimeout(() => {
      makeTextBlink();
    }, timer);

    return () => clearTimeout(interval);
  }, [timer]);

  const makeTextBlink = () => {
    if (timer === visibleDuration) {
      setTimer(invisibleDuration);
      setShowBlink(false);
    } else {
      setTimer(visibleDuration);
      setShowBlink(true);
    }
  };

  return (
    <Text
      accessibilityLabel="90mins"
      style={[
        AppFont?.REGULAR_LEXEND_20,
        { color: showBlink ? mainColor : secondColor },
      ]}
    >
      {text}
    </Text>
  );
};

export default KoolBlinkText;
