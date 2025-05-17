import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

interface Tab {
  name: string;
  label: string;
}

interface KoolTabBarProps {
  tabs: Tab[];
  activeTab: string;
  onTabPress: (tab: Tab) => void;
  accessibilityLabel?: string;
}

const KoolTabBar: React.FC<KoolTabBarProps> = ({
  tabs,
  activeTab,
  onTabPress,
  accessibilityLabel,
}) => (
  <View style={styles.tabBar} accessibilityLabel={accessibilityLabel}>
    {tabs.map((tab, index) => (
      <TouchableOpacity
        key={index}
        onPress={() => onTabPress(tab)}
        style={[styles.tab, activeTab === tab.name ? styles.activeTab : null]}
        accessibilityLabel={'tabs' + index}
      >
        <Text style={styles.text}>{tab.label}</Text>
      </TouchableOpacity>
    ))}
  </View>
);

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#eee',
  },
  tab: {
    padding: 10,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#007AFF',
  },
  text: {
    fontWeight: 'bold',
  },
});

export default KoolTabBar;
