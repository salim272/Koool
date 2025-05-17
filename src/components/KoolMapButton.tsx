import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Colors from '../theme/colors';

interface KoolMapButtonProps {
  label: string;
  address?: string;
  onPress: () => void;
  accessibilityLabel?: string;
}

const KoolMapButton: React.FC<KoolMapButtonProps> = ({
  label,
  address,
  onPress,
  accessibilityLabel,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.row}
      activeOpacity={1}
      accessibilityLabel={accessibilityLabel}
    >
      <View style={styles.iconContainer}>
        <EntypoIcon name="location-pin" color={Colors.PRIMARY_1} size={30} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.addressTitle}>{label}</Text>
        <Text style={styles.addressDetail}>{address}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  iconContainer: {
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    width: '85%',
  },
  addressTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
    color: '#333',
  },
  addressDetail: {
    fontSize: 15,
    color: Colors.NEUTRAL_3,
    lineHeight: 20,
  },
});

export default KoolMapButton;
