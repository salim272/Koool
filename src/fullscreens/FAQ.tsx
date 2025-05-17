import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import KoolSearchBar from '../components/KoolSearchBar';
import Colors from '../theme/colors';
import KoolContactOptions from '../components/KoolContactOptions';
import KoolEmptyState from '../components/KoolEmptyState';
import KoolFaqItem from '../components/KoolFaqItem';

interface Faq {
  question: string;
  answer: string;
  show: boolean;
}

const originalFaqs: Faq[] = [
  {
    question: 'How do I Place the order?',
    answer:
      'You may download our App “Koovers DMS” from the Playstore, register by providing basic information. Then you can check the price of parts you want to order and confirm your order.',
    show: false,
  },
  {
    question: 'What are the car manufacturers parts that you deal with?',
    answer:
      'We deal with all cars starting from Maruti to Mercedes. All model variants of Maruti, Hyundai, Mahindra, Tata, Toyota, Honda, VW, Skoda, Nissan, Renault and premium cars of Mercedes, BMW, Audi, Jaguar, Land Rover, Volvo, etc. are also offered by us.',
    show: false,
  },
  {
    question: 'Do you deal with both OEM and OES/Aftermarket spares?',
    answer:
      'Yes, we deal with OEM parts of all manufacturers as well as the OES (Original Equipment Suppliers) like Bosch, Rane Group, TVS Group, Purolator, Elofic, Monroe, Gabriel, Sona, Minda, Lumax, Philips, Osram, Valeo, LUK and many other parts manufacturers.',
    show: false,
  },
  {
    question: 'What category of parts do you supply?',
    answer:
      'We have the complete portfolio. We deal with • PMS (Periodic Maintenance Service – Lubes, Filters, Brake Pads, Wiper Blades, Bulbs, etc.) • Transmission Parts – Clutch, Steering System, etc. • Suspension Parts – Struts, Bushes, Mounts. • Electricals – Alternators, Wiper Motors, Wiring harness. • Body Parts (Bonnet, Bumper, Doors, etc.).',
    show: false,
  },
  {
    question: 'How can I find out if I live in a serviceable/deliverable area?',
    answer:
      "You won't have to worry about delivery as Koovers provides PAN-India delivery for all products. However, the delivery time may vary depending on your location.",
    show: false,
  },
  {
    question: 'Will these spare parts come with warranty?',
    answer:
      'Yes! The warranty, as per the terms laid by the parts manufacturer, will be extended to you wherever applicable.',
    show: false,
  },
  {
    question: 'What are the payment modes available?',
    answer:
      'You can pay easily via UPI (Google Pay, Paytm UPI, etc.), Debit/Credit Card, Net Banking, or E-Wallets (Paytm, Airtel Money, PhonePe, etc.).',
    show: false,
  },
  {
    question: 'Can I get a GST Invoice?',
    answer:
      'If your GST details are provided, they will be captured in the invoice and you can avail input credit for the same.',
    show: false,
  },
  {
    question: 'How long does it take to receive the parts at our doorstep?',
    answer:
      'Once your order is confirmed and payment is made, the ordered parts will be packed and dispatched immediately as per availability. Our logistics partner will deliver as per the mentioned time frame.',
    show: false,
  },
];

const Faqs = () => {
  const [searchText, setSearchText] = useState<string>('');
  const [faqArrays, setFaqArrays] = useState<Faq[]>(originalFaqs);

  const findFaq = (text: string) => {
    setSearchText(text);
    if (text.trim() === '') {
      setFaqArrays(originalFaqs);
    } else {
      const filtered = originalFaqs.filter((item) =>
        item.question.toUpperCase().includes(text.toUpperCase())
      );
      setFaqArrays(filtered);
    }
  };

  const changeItems = (index: number) => {
    const newValue = faqArrays.map((faq, i) =>
      i === index ? { ...faq, show: !faq.show } : { ...faq, show: false }
    );
    setFaqArrays(newValue);
  };

  return (
    <View style={styles.container}>
      <View style={styles.stickyHeader}>
        <KoolSearchBar
          placeholder="Describe Your Issue"
          onChangeText={findFaq}
          value={searchText}
          accessibilityLabel="faqSearch"
        />
        <KoolContactOptions accessibilityLabel="contactOptions" />
      </View>
      <FlatList
        data={faqArrays}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
        ListEmptyComponent={<KoolEmptyState accessibilityLabel="emptyState" />}
        renderItem={({ item, index }) => (
          <KoolFaqItem
            item={item}
            index={index}
            onToggle={() => changeItems(index)}
            accessibilityLabel={item.question}
          />
        )}
        keyExtractor={(item) => item.question}
      />
    </View>
  );
};

export default Faqs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.NEUTRAL_6,
    paddingTop: 3,
  },
  stickyHeader: {
    paddingTop: 10,
    backgroundColor: Colors.NEUTRAL_6,
    zIndex: 1,
  },
  flatListContent: {
    paddingTop: 10,
  },
});
