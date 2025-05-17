import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import RightArrow from '../../assets/images/RightIcon.svg';

interface ListItemProps {
  label: string;
  onPress: () => void;
  icon?: any;
  accessibilityLabel?: string;
}

const KoolLegal = ({
  label,
  onPress,
  icon,
  accessibilityLabel,
}: ListItemProps) => {
  return (
    <TouchableOpacity
      style={styles.listOptionDivStyle}
      onPress={onPress}
      accessibilityLabel={accessibilityLabel}
    >
      <View style={styles.listItemContent}>
        {icon ? icon : null}
        <Text style={styles.listOptionLabelStyle}>{label}</Text>
      </View>
      <RightArrow width={12} height={12} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listOptionDivStyle: {
    height: 50,
    width: '92%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '3%',
    marginTop: 15,
  },
  listItemContent: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  listOptionLabelStyle: {
    fontSize: 17,
    lineHeight: 19,
    paddingLeft: 8,
  },
});

export default KoolLegal;
