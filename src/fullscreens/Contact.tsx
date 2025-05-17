import React, { useCallback } from 'react';
import { SafeAreaView, View, Linking, Platform } from 'react-native';
import KoolMobileEmail from '../components/KoolMobileEmail';
import KoolMapButton from '../components/KoolMapButton';
import Colors from '../theme/colors';

const contactDetails = {
  location: {
    latLng: '12.954759864951678,77.58070724690472',
    label: 'Koovers',
    address:
      'Armatic Building, 3rd Floor, Park Inc, No 8, 27th Cross Rd, Banashankari Stage II, Bengaluru, Karnataka 560070',
  },
  phones: [
    { number: '8970029000', icon: 'mobile-phone' },
    { number: '08026253700', icon: 'phone' },
  ],
  emails: [
    { address: 'carsspares@koovers.in' },
    { address: 'customersupport@koovers.in' },
  ],
};

const Contact = () => {
  const locationFinder = useCallback(() => {
    const scheme = Platform.select({
      ios: 'maps:0,0?q=',
      android: 'geo:0,0?q=',
    });
    const url =
      scheme &&
      `${scheme}${contactDetails.location.label}@${contactDetails.location.latLng}`;
    if (url) Linking.openURL(url);
  }, []);

  const dialMobile = useCallback((mobileNo: string) => {
    const phoneNumber =
      Platform.OS === 'android' ? `tel:${mobileNo}` : `telprompt:${mobileNo}`;
    Linking.openURL(phoneNumber);
  }, []);

  const emailLink = useCallback(() => {
    const emailer = `mailto:${'customersupport@koovers.in'}`;
    Linking.openURL(emailer);
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.PRIMARY_2,
        paddingTop: 30,
        padding: 20,
      }}
    >
      <KoolMapButton
        label="KRSV Innovative Auto Solution Pvt Ltd."
        address={contactDetails.location.address}
        onPress={locationFinder}
        accessibilityLabel="mapButton"
      />
      {contactDetails.phones.map((phone, index) => (
        <KoolMobileEmail
          key={index}
          iconName={phone.icon}
          label={phone.number}
          onPress={() => dialMobile(phone.number)}
          opacity={1}
          accessibilityLabel={phone.number}
        />
      ))}

      <KoolMobileEmail
        iconName="mail"
        label={'customersupport@koovers.in'}
        onPress={emailLink}
        iconSize={25}
        accessibilityLabel={'mail'}
      />
    </SafeAreaView>
  );
};

export default Contact;
