import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ThemeUtils } from '../../../theme/commonTypes';
import { useTheme } from '../../../theme/useTheme';
import KoolText from '../../../components/KoolText';
import KoolHeaderText from '../../../components/KoolTableCard';
import KoolBorder from '../../../components/KoolBorder';

const SingleInvoice = () => {
  const { AppFont, wp, hp, Colors, globalStyles } = useTheme() as ThemeUtils;
  const styles = makeStyles({ wp, hp, Colors });

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.rowBetween}>
          <View style={globalStyles?.flex65}>
            <KoolHeaderText value={'#60004131'} />
          </View>
          <View style={globalStyles?.flex35}>
            <KoolHeaderText label="Delivered" />
          </View>
        </View>
        <View style={styles.rowBetween}>
          <View style={globalStyles?.flex65}>
            <KoolHeaderText label="Assigned to" value={'Daisy'} />
          </View>
          <View style={globalStyles?.flex35}>
            <KoolHeaderText label="Invoice Items" value={'1'} />
          </View>
        </View>
        <View style={styles.rowBetween}>
          <View>
            <KoolHeaderText label="Invoice Total Amount" value={'₹ 37700'} />
          </View>
        </View>
      </View>
      <KoolText
        text="Product Details"
        fontFamily={AppFont?.REGULAR_INTER_SEMI_BOLD_14}
        style={styles.text}
      />
      <KoolBorder />

      <View>
        <View style={styles.rowBetween}>
          <KoolHeaderText
            label="Part Name"
            value={'Petronas CF4 15 W40 Premium oil 210L '}
          />
        </View>
        <View style={styles.rowBetween}>
          <View style={globalStyles?.flex65}>
            <KoolHeaderText label="Part Code" value={'PETRONASCF415W40210L'} />
          </View>
          <View style={globalStyles?.flex35}>
            <KoolHeaderText label="Category" value={'Common Items '} />
          </View>
        </View>
        <View style={styles.rowBetween}>
          <View style={globalStyles?.flex65}>
            <KoolHeaderText label="Product Brand" value={'Petronas'} />
          </View>
          <View style={globalStyles?.flex35}>
            <KoolHeaderText label="HSN Code" value={'60004131'} />
          </View>
        </View>
        <View style={styles.rowBetween}>
          <View style={globalStyles?.flex65}>
            <KoolHeaderText label="Unit Price" value={'₹ 31949.06'} />
          </View>
          <View style={globalStyles?.flex35}>
            <KoolHeaderText label="Total Price" value={'₹ 31949.06'} />
          </View>
        </View>

        <KoolBorder />

        <View style={styles.rowBetween}>
          <View style={globalStyles?.flex65}>
            <KoolHeaderText label="Sub Total " value={'₹ 31949.06'} />
          </View>
          <View style={globalStyles?.flex35}>
            <KoolHeaderText label="CGST @ 9%" value={'₹ 2875.42'} />
          </View>
        </View>
        <View style={styles.rowBetween}>
          <View style={globalStyles?.flex65}>
            <KoolHeaderText label="SGST @ 9%" value={'₹ 2875.42'} />
          </View>
          <View style={globalStyles?.flex35}>
            <KoolHeaderText label="Grand Total" value={'₹ 37700'} />
          </View>
        </View>
        <KoolBorder />
      </View>
    </View>
  );
};

export default SingleInvoice;

const makeStyles = ({ wp, hp, Colors }: ThemeUtils) =>
  StyleSheet.create({
    container: {
      backgroundColor: Colors.NEUTRAL_9,
      borderWidth: 1,
      borderColor: Colors.NEUTRAL_6,
      margin: 12,
      borderRadius: 8,
    },

    rowBetween: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      paddingVertical: wp(1),
      paddingHorizontal: wp(2),
    },
    text: {
      fontWeight: '500',
      paddingHorizontal: wp(3.1),
      paddingTop: wp(2),
      paddingBottom: wp(2),
    },
  });
