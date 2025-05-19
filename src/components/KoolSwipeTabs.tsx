import React, { useState } from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { useTheme } from '../theme/useTheme';
import KoolTabs from './KoolTabs';
import { ThemeUtils } from '../theme/commonTypes';

interface TabRoute {
  key: string;
  title: string;
}

interface SwipeTabsLayoutProps {
  routes: TabRoute[];
  scenes: { [key: string]: React.ComponentType };
  onIndexChange?: (index: number) => void;
  accessibilityLabel?: string;
}

const KoolSwipeTabs = ({
  routes,
  scenes,
  onIndexChange,
  accessibilityLabel,
}: SwipeTabsLayoutProps) => {
  const { wp, hp, Colors } = useTheme() as ThemeUtils;
  const styles = makeStyles({ wp, hp, Colors });
  const [index, setIndex] = useState(0);
  const renderScene = SceneMap(scenes);

  const handleTabIndexChange = (newIndex: number) => {
    setIndex(newIndex);
    onIndexChange?.(newIndex);
  };

  return (
    <View style={styles.container} accessibilityLabel={accessibilityLabel}>
      <KoolTabs
        tabs={routes}
        activeTab={routes[index].key}
        accessibilityLabel={routes[index].key}
        onTabPress={(key) => {
          const newIndex = routes.findIndex((r) => r.key === key);
          if (newIndex !== -1) handleTabIndexChange(newIndex);
        }}
      />
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={handleTabIndexChange}
        initialLayout={{ width: Dimensions.get('window').width }}
        renderTabBar={() => null}
        accessibilityLabel={'tabView'}
      />
    </View>
  );
};

export default KoolSwipeTabs;

const makeStyles = ({ wp, hp, Colors }: ThemeUtils) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors?.PRIMARY_2,
    },
  });
