import React, { useState, useEffect } from 'react';
import { View, StyleSheet, BackHandler } from 'react-native';
import Colors from '../theme/colors';
import KoolLegal from '../components/KoolLegal';
import KoolWebView from '../components/KoolWebView';
import { useTheme } from '../theme/useTheme';
import Return from '../../assets/images/Returns.svg';
import Privacy from '../../assets/images/PolicyPrivacy.svg';
import TermService from '../../assets/images/Term.svg';

const Legal = ({ navigation }: any) => {
  const [isWebViewVisible, setIsWebViewVisible] = useState<boolean>(false);
  const [webViewUrl, setWebViewUrl] = useState<string>('');

  const { AppFont, wp, hp, Colors } = useTheme();
  const styles = makeStyles({ wp, hp, Colors });

  useEffect(() => {
    const backAction = () => {
      if (isWebViewVisible) {
        setIsWebViewVisible(false);
        return true;
      }
      return false;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    const unsubscribe = navigation.addListener(
      'beforeRemove',
      (e: { preventDefault: () => void }) => {
        if (isWebViewVisible) {
          e.preventDefault();
          setIsWebViewVisible(false);
        }
      }
    );

    return () => {
      backHandler.remove();
      unsubscribe();
    };
  }, [navigation, isWebViewVisible]);

  const openWebView = (url: string) => {
    setWebViewUrl(url);
    setIsWebViewVisible(true);
  };
  if (isWebViewVisible) {
    return (
      <KoolWebView
        url={webViewUrl}
        onClose={() => setIsWebViewVisible(false)}
      />
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <KoolLegal
          label="Return & Refund Policy"
          onPress={() =>
            openWebView('https://koovers.in/content/returnpolicy.html')
          }
          icon={<Return width={20} height={20} />}
        />
        <View style={styles.separator} />

        <KoolLegal
          label="Privacy Policy"
          onPress={() => openWebView('https://koovers.in/content/privacy.html')}
          icon={<Privacy width={20} height={20} />}
        />

        <View style={styles.separator} />

        <KoolLegal
          label="Terms of Service"
          onPress={() =>
            openWebView('https://koovers.in/content/termsofuse.html')
          }
          icon={<TermService width={20} height={20} />}
        />
        <View style={styles.separator} />
      </View>
    </View>
  );
};

export default Legal;

const makeStyles = ({ wp, hp }: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: hp(1),
      backgroundColor: Colors.NEUTRAL_9,
    },
    contentWrapper: {
      paddingLeft: 20,
    },
    separator: {
      borderBottomWidth: 1,
      borderColor: Colors.NEUTRAL_9,
      width: '92%',
    },
  });
