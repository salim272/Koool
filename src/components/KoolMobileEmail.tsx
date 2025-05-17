import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Colors from '../theme/colors';

interface ContactItemProps {
  iconName: string;
  label: string;
  onPress: () => void;
  iconSize?: number;
  opacity?: number;
  accessibilityLabel?: string;
}

const KoolMobileEmail: React.FC<ContactItemProps> = ({
  iconName,
  label,
  onPress,
  iconSize = 30,
  opacity = 0.5,
  accessibilityLabel,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.row}
      activeOpacity={opacity}
      accessibilityLabel={accessibilityLabel}
    >
      <View style={styles.iconContainer}>
        {iconName === 'mail' ? (
          <EntypoIcon
            name={iconName}
            color={Colors.PRIMARY_1}
            size={iconSize}
          />
        ) : (
          <FontAwesomeIcon
            name={iconName}
            color={Colors.PRIMARY_1}
            size={iconSize}
          />
        )}
      </View>
      <Text style={styles.textDetail}>{label}</Text>
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
  textDetail: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 10,
  },
});

export default KoolMobileEmail;
