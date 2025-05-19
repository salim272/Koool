import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import BackIconMat from 'react-native-vector-icons/MaterialIcons';
import Colors from '../theme/colors';

interface KoolFaqItemProps {
  item: {
    question: string;
    answer: string;
    show: boolean;
  };
  index: number;
  accessibilityLabel?: string;

  onToggle: (
    item: { question: string; answer: string; show: boolean },
    index: number
  ) => void;
}

const KoolFaqItem = ({
  item,
  index,
  onToggle,
  accessibilityLabel,
}: KoolFaqItemProps) => {
  return (
    <TouchableOpacity
      onPress={() => onToggle(item, index)}
      style={styles.faqItem}
      accessibilityLabel={accessibilityLabel}
    >
      <View style={styles.faqHeader}>
        <Text numberOfLines={2} style={styles.questionText}>
          {item.question}
        </Text>
        <TouchableOpacity onPress={() => onToggle(item, index)}>
          <BackIconMat
            name={item.show ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
          />
        </TouchableOpacity>
      </View>
      {item.show && (
        <View style={styles.answerContainer}>
          <Text style={styles.answerText}>{item.answer}</Text>
        </View>
      )}
      <View style={styles.separator} />
    </TouchableOpacity>
  );
};

export default KoolFaqItem;

const styles = StyleSheet.create({
  faqItem: {
    flexDirection: 'column',
    paddingVertical: '2%',
    paddingHorizontal: '3%',
    backgroundColor: Colors?.PRIMARY_2,
  },
  faqHeader: {
    flexDirection: 'row',
    paddingHorizontal: '2%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  questionText: {
    width: '90%',
    paddingVertical: '2%',
    fontFamily: 'Inter',
    fontSize: 17,
    fontWeight: '600',
    color: Colors.NEUTRAL_1,
  },
  answerContainer: {
    paddingHorizontal: '2%',
  },
  answerText: {
    fontFamily: 'Inter',
    fontSize: 16,
    paddingVertical: '2%',
    lineHeight: 24,
    textAlign: 'justify',
  },
  separator: {
    backgroundColor: Colors.NEUTRAL_7,
    height: 1,
  },
});
