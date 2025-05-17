import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import KoolOrderStatus from '../../../components/KoolOrderStatus';
import KoolHeaderText from '../../../components/KoolTableCard';
import { ThemeUtils } from '../../../theme/commonTypes';
import { useTheme } from '../../../theme/useTheme';
import { dateFormat } from '../../../utils/dateFormat';

interface KoolOrderCardProps {}

const InvoiceCard: React.FC<KoolOrderCardProps> = ({
  item,
  onPress,
  isEstimate,
  isDispatch,
}: any) => {
  const { wp, hp, Colors, globalStyles } = useTheme() as ThemeUtils;
  const styles = makeStyles({ wp, hp, Colors });
  return (
    <TouchableOpacity
      style={styles.orderCard}
      activeOpacity={0.5}
      onPress={onPress}
    >
      <KoolOrderStatus status={item.status} />

      {isDispatch ? (
        <View style={[isEstimate ? { flex: 1 } : styles.orderContent]}>
          <View style={styles.rowBetween}>
            <View style={globalStyles?.flex65}>
              <KoolHeaderText label="Dispatch Date" value={item.payStatus} />
            </View>
            <View style={globalStyles?.flex35}>
              <KoolHeaderText label={'Courier no'} value={item.returnAmount} />
            </View>
          </View>
          <View style={styles.rowBetween}>
            <View style={globalStyles?.flex65}>
              <KoolHeaderText
                label={'Dispatch Type '}
                value={item.returnAmount}
              />
            </View>
            <View style={globalStyles?.flex35}>
              <KoolHeaderText
                label={'Delivery Person '}
                value={item.outstandingAmount}
              />
            </View>
          </View>
          <View style={styles.rowBetween}>
            <View style={globalStyles?.flex65}>
              <KoolHeaderText
                label={'Dispatch Status'}
                value={item.returnAmount}
              />
            </View>
            <View style={globalStyles?.flex35}>
              <KoolHeaderText
                label={'Phone Number'}
                value={item.outstandingAmount}
              />
            </View>
          </View>
        </View>
      ) : (
        <View style={[isEstimate ? { flex: 1 } : styles.orderContent]}>
          <View style={styles.rowBetween}>
            <View style={globalStyles?.flex65}>
              <KoolHeaderText value={'#' + item.invoiceId} />
            </View>
            <View style={{ marginRight: wp(4) }}>
              <KoolHeaderText label={dateFormat(item.invoiceDt, 1)} />
            </View>
          </View>

          <View style={styles.rowBetween}>
            <View style={globalStyles?.flex65}>
              <KoolHeaderText label="Pay status" value={item.paymentStatus} />
            </View>
            <View style={globalStyles?.flex35}>
              <KoolHeaderText
                label="Invoice Amount"
                value={item.invoiceTotalAmount}
              />
            </View>
          </View>
          <View style={styles.rowBetween}>
            <View style={globalStyles?.flex65}>
              <KoolHeaderText label="Return Amount" value={item.returnAmt} />
            </View>
            <View style={globalStyles?.flex35}>
              <KoolHeaderText label="Outstanding" value={item.outstandingAmt} />
            </View>
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default InvoiceCard;

const makeStyles = ({ wp, hp, Colors }: ThemeUtils) =>
  StyleSheet.create({
    orderCard: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: Colors.NEUTRAL_6,
    },
    orderContent: {
      flex: 1,
      paddingTop: hp(1.2),
    },
    rowBetween: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
    },

    headerRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    vehicleHeader: {},
    vehicleDetailsRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      marginLeft: 4,
    },
    itemGroup: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  });
