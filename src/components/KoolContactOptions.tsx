import React, { useCallback } from 'react';
import { View, Platform, Linking, StyleSheet } from 'react-native';
import Colors from '../theme/colors';
import KoolContactItem from './KoolContactItem';
import Email from '../../assets/images/Email.svg';
import Phone from '../../assets/images/Phone.svg';
import Chat from '../../assets/images/Chat.svg';

interface KoolContactOptionsProps {
  accessibilityLabel?: string;
}

const KoolContactOptions = ({
  accessibilityLabel,
}: KoolContactOptionsProps) => {
  const emailLink = useCallback((mailId: string) => {
    Linking.openURL(`mailto:${mailId}`);
  }, []);

  const dialMobile = useCallback((mobileno: string) => {
    const phoneNumber =
      Platform.OS === 'android' ? `tel:${mobileno}` : `telprompt:${mobileno}`;
    Linking.openURL(phoneNumber);
  }, []);

  const openSMS = useCallback(() => {
    const url = `sms:8970029000${Platform.OS === 'ios' ? '&' : '?'}body=`;
    Linking.openURL(url);
  }, []);

  return (
    <View style={styles.main} accessibilityLabel={accessibilityLabel}>
      <KoolContactItem
        onPress={() => emailLink('customersupport@koovers.in')}
        Icon={Email}
        label="Email"
      />
      <View style={styles.divider} />
      <KoolContactItem
        onPress={() => dialMobile('8970029000')}
        Icon={Phone}
        label="Call"
      />
      <View style={styles.divider} />
      <KoolContactItem onPress={openSMS} Icon={Chat} label="Chat" />
    </View>
  );
};

export default KoolContactOptions;

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: '3%',
  },
  divider: {
    height: 30,
    backgroundColor: Colors.NEUTRAL_7,
    width: 1,
  },
});
