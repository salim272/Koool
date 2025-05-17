import { Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import Colors from './colors';
import { AppFontStyle } from './AppFontStyle';
import { globalStyles } from '../utils/globalStyles';

export const useTheme = () => {
  const { width: viewportWidth, height: viewportHeight } =
    Dimensions.get('window');

  const [fontsLoaded] = useFonts({
    lexend: require('../../assets/fonts/LexendDeca-Regular.ttf'),
    inter: require('../../assets/fonts/Inter_18pt-Regular.ttf'),
    inter_semi_bold: require('../../assets/fonts/Inter_18pt-SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return { fontsLoaded: false };
  }

  const AppFont = AppFontStyle(Colors);

  const wp = (percentage: number) => {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
  };

  const hp = (percentage: number) => {
    const value = (percentage * viewportHeight) / 100;
    return Math.round(value);
  };

  return {
    AppFont,
    Colors,
    wp,
    hp,
    globalStyles,
  };
};
