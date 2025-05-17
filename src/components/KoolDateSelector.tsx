import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import KoolHeaderText from './KoolTableCard';
import Calendar from '../../assets/images/Calendar.svg';
import { useTheme } from '../theme/useTheme';
import { ThemeUtils } from '../theme/commonTypes';

interface KoolDateSelectorProps {
  label: string;
  date: string;
  onPress: () => void;
  fontStyle?: any;
  accessibilityLabel?: string;
}

const KoolDateSelector: React.FC<KoolDateSelectorProps> = ({
  label,
  date,
  onPress,
  accessibilityLabel,
}) => {
  const { wp, hp, Colors } = useTheme() as ThemeUtils;
  const styles = makeStyles({ wp, hp, Colors });

  return (
    <View style={styles.container} accessibilityLabel={accessibilityLabel}>
      <KoolHeaderText label={label} accessibilityLabel={label} />
      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.input} onPress={onPress}>
          <View style={[styles.inputContainer, { gap: 4 }]}>
            <KoolHeaderText value={date} isFont16 accessibilityLabel={label} />
            <Calendar accessibilityLabel={'koolDateSelector'} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const makeStyles = ({ wp, hp, Colors }: ThemeUtils) =>
  StyleSheet.create({
    container: {
      marginVertical: 10,
      flex: 1,
      marginRight: 12,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    input: {
      borderBottomWidth: 1,
      flex: 1,
      borderColor: Colors?.NEUTRAL_6,
      marginTop: -8,
    },
    calendarIcon: {
      position: 'absolute',
      right: 35,
      bottom: 8,
    },
  });

export default KoolDateSelector;
