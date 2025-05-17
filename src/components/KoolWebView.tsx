import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  View,
  BackHandler,
} from 'react-native';
import { WebView } from 'react-native-webview';
import Colors from '../theme/colors';

interface KoolWebViewProps {
  url: string;
  onClose?: () => void;
  accessibilityLabel?: string;
}

const KoolWebView: React.FC<KoolWebViewProps> = ({
  url,
  onClose,
  accessibilityLabel,
}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const backAction = () => {
      if (onClose) {
        onClose();
        return true;
      }
      return false;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    return () => backHandler.remove();
  }, [onClose]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }} accessibilityLabel={accessibilityLabel}>
        <WebView
          source={{ uri: url }}
          style={{ flex: 1 }}
          onLoadStart={() => setLoading(true)}
          onLoadEnd={() => setLoading(false)}
          onError={() => setLoading(false)}
        />

        {loading && (
          <View style={styles.loadingOverlay}>
            <ActivityIndicator size="large" color={Colors.PRIMARY_1} />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.NEUTRAL_7,
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.NEUTRAL_7,
  },
});

export default KoolWebView;
