import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

interface ContactItemProps {
  onPress: () => void;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  label: string;
}

const KoolContactItem: React.FC<ContactItemProps> = ({
  onPress,
  Icon,
  label,
}) => {
  return (
    <TouchableOpacity
      style={styles.contactItem}
      onPress={onPress}
      accessibilityLabel={label}
    >
      <Icon width={24} height={24} style={styles.iconSpacing} />
      <Text style={styles.contactText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default KoolContactItem;

const styles = StyleSheet.create({
  contactItem: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contactText: {
    marginLeft: '4%',
    fontFamily: 'Inter',
    fontSize: 16,
  },
  iconSpacing: {
    marginHorizontal: 8,
  },
});
