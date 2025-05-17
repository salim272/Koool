import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../theme/useTheme';
import { ThemeUtils } from '../theme/commonTypes';

interface TabOption {
  key: string;
  title: string;
}

interface KoolTabsProps {
  tabs: TabOption[];
  activeTab: string;
  onTabPress: (key: string) => void;
  accessibilityLabel?: string;
}

const KoolTabs = ({
  tabs,
  activeTab,
  onTabPress,
  accessibilityLabel,
}: KoolTabsProps) => {
  const { AppFont, wp, hp, Colors } = useTheme() as ThemeUtils;
  const styles = makeStyles({ wp, hp, Colors });

  return (
    <View style={styles.tabContainer} accessibilityLabel={accessibilityLabel}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.key}
          style={styles.tab}
          onPress={() => onTabPress(tab.key)}
        >
          <Text
            style={[
              AppFont?.REGULAR_INTER_14,
              activeTab === tab.key && [
                AppFont?.REGULAR_INTER_14,
                styles.activeTabText,
              ],
            ]}
          >
            {tab.title}
          </Text>
          {activeTab === tab.key && <View style={styles.activeTabIndicator} />}
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default KoolTabs;

const makeStyles = ({ wp, hp, Colors }: ThemeUtils) =>
  StyleSheet.create({
    tabContainer: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: Colors?.NEUTRAL_7,
      paddingTop: hp(1.5),
    },
    tab: {
      flex: 1,
      paddingVertical: wp(2.5),
      alignItems: 'center',
    },
    activeTabIndicator: {
      position: 'absolute',
      bottom: -1,
      width: wp(38),
      height: 2,
      backgroundColor: Colors?.PRIMARY_1,
    },
    activeTabText: {
      color: Colors?.PRIMARY_1,
    },
  });
