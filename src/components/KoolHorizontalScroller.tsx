import React, { useRef, useEffect, useState } from 'react';
import {
  View,
  FlatList,
  Animated,
  Easing,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width: screenWidth } = Dimensions.get('window');
const ITEM_WIDTH = (screenWidth - 30) / 4;

type HorizontalScrollListProps<T> = {
  data: T[];
  renderItem: ({
    item,
    index,
  }: {
    item: T;
    index: number;
  }) => React.ReactElement;
  itemKeyExtractor?: (item: T, index: number) => string;
  showScrollHint?: boolean;
  accessibilityLabel?: string;
};

const KoolHorizontalScroller = <T,>({
  data,
  renderItem,
  itemKeyExtractor = (_, i) => i.toString(),
  showScrollHint = true,
  accessibilityLabel,
}: HorizontalScrollListProps<T>): React.ReactElement => {
  const scrollIndicator = useRef(new Animated.Value(0)).current;
  const [showIndicator, setShowIndicator] = useState(showScrollHint);

  useEffect(() => {
    if (!showScrollHint) return;

    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(scrollIndicator, {
          toValue: 1,
          duration: 600,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(scrollIndicator, {
          toValue: 0,
          duration: 600,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    );
    animation.start();

    const timeout = setTimeout(() => {
      animation.stop();
      setShowIndicator(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [showScrollHint]);

  const translateX = scrollIndicator.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 10],
  });

  return (
    <View style={styles.container} accessibilityLabel={accessibilityLabel}>
      <FlatList
        horizontal
        data={data}
        keyExtractor={itemKeyExtractor}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View style={[styles.item, { width: ITEM_WIDTH }]}>
            {renderItem({ item, index })}
          </View>
        )}
      />

      {showIndicator && (
        <Animated.View
          style={[styles.scrollHint, { transform: [{ translateX }] }]}
        >
          <Ionicons name="arrow-forward-circle" size={32} color="#666" />
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
  },
  item: {
    height: 100,
    marginHorizontal: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollHint: {
    position: 'absolute',
    right: 20,
    top: 30,
  },
});

export default KoolHorizontalScroller;
