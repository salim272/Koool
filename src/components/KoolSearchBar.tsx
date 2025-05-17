import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Mic from '../../assets/images/Mic.svg';
import Search from '../../assets/images/Search.svg';
import { useTheme } from '../theme/useTheme';

interface KoolSearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  accessibilityLabel?: string;
  isSearch?: boolean;
}

const KoolSearchBar: React.FC<KoolSearchBarProps> = ({
  value,
  onChangeText,
  placeholder,
  accessibilityLabel,
  isSearch,
}) => {
  const { AppFont, wp, hp, Colors } = useTheme();
  const styles = makeStyles({ wp, hp, Colors });

  return (
    <View style={styles.container} accessibilityLabel={accessibilityLabel}>
      <TextInput
        style={[styles.input, AppFont?.REGULAR_INTER_15]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
      {isSearch ? (
        <Search width={25} height={25} />
      ) : (
        <Mic width={25} height={25} />
      )}
    </View>
  );
};

const makeStyles = ({ wp, Colors }: any) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderColor: Colors.NEUTRAL_6,
      paddingVertical: 4,
      paddingHorizontal: wp(2),
    },
    input: {
      flex: 1,
      fontSize: 16,
      paddingRight: 10,
    },
  });

export default KoolSearchBar;
