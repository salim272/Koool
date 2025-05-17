import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import CartIcon from '../../../assets/images/CartIcon.svg';
import CartIcon from '../../assets/images/Cart.svg';

const KoolCartButton = ({ cartCount, onPress, accessibilityLabel }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
      accessibilityLabel={accessibilityLabel}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: 40,
          height: 40,
        }}
      >
        <CartIcon width={40} height={40} />
        {cartCount > 0 && (
          <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>{cartCount}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
  },
  badgeContainer: {
    position: 'absolute',
    bottom: 0,
    right: -10,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
export default KoolCartButton;
