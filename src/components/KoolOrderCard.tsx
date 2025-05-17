import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { ThemeUtils } from '../theme/commonTypes';
import { useTheme } from '../theme/useTheme';
import KoolOrderStatus from './KoolOrderStatus';
import KoolHeaderText from './KoolTableCard';
import moment from 'moment';
import KoolDivider from './KoolDivider';

export interface OrderItems {
  id: string;
  orderNumber: string;
  date: string;
  type: string;
  eta: string;
  status: 'OPEN' | 'CLOSED';
  amount?: string;
  enquiryNumber?: number;
  assign?: string;
  quantity?: string;
  price?: string;
  brand?: string;
  accessibilityLabel?: string;
}
interface OrderItem {
  id: string;
  orderNumber: string;
  date: string;
  type: string;
  eta: string;
  status: 'OPEN' | 'CLOSED';
}

interface KoolOrderCardProps {
  item: OrderItem;
  onPress?: () => void;
  isEstimate?: boolean;
  isConfirm?: boolean;
  accessibilityLabel?: string;
}

const KoolOrderCard = ({
  item,
  onPress,
  isEstimate,
  isConfirm,
  accessibilityLabel,
}: KoolOrderCardProps) => {
  const { wp, hp, Colors, globalStyles } = useTheme() as ThemeUtils;
  const styles = makeStyles({ wp, hp, Colors });
  return (
    <TouchableOpacity
      style={styles.orderCard}
      activeOpacity={0.5}
      onPress={onPress}
      accessibilityLabel={accessibilityLabel}
    >
      <KoolOrderStatus
        status={item.status}
        accessibilityLabel={'orderStatus'}
      />
      <View style={[isEstimate ? { flex: 1 } : styles.orderContent]}>
        <View style={styles.rowBetween}>
          <View style={globalStyles?.flex65}>
            <KoolHeaderText
              value={item.number}
              accessibilityLabel={'orderCardNumber'}
            />
          </View>
          {!isEstimate && (
            <View style={globalStyles?.flex35}>
              <KoolHeaderText
                label={item.date}
                accessibilityLabel={'orderCardDate'}
              />
            </View>
          )}
        </View>
        {isConfirm ? (
          <>
            <View style={styles.rowBetween}>
              <View style={globalStyles?.flex65}>
                <KoolHeaderText
                  label="Total Amount"
                  value={item?.amount}
                  accessibilityLabel={'orderCardTotalAmount'}
                />
              </View>
              <View style={globalStyles?.flex35}>
                <KoolHeaderText
                  label="Order Type"
                  value={item?.type}
                  accessibilityLabel={'orderCardOrderType'}
                />
              </View>
            </View>
            <View style={styles.rowBetween}>
              <View style={globalStyles?.flex65}>
                <KoolHeaderText
                  label="Order Enquiry No."
                  value={item?.enquiryNumber}
                  accessibilityLabel={'orderCardOrderEnquiryNo'}
                />
              </View>
              <View style={globalStyles?.flex35}>
                <KoolHeaderText
                  label="ETA"
                  value={moment(item?.etaDt).format('DD-MM-YYYY')}
                  accessibilityLabel={'orderOrderCardETA'}
                />
              </View>
            </View>
          </>
        ) : isEstimate ? (
          <>
            {item?.salesOrderItems?.map((orderItem: any, index: number) => (
              <View
                key={index}
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: Colors.NEUTRAL_7,
                }}
                accessibilityLabel={'salesOrderItems' + index}
              >
                <View style={styles.headerRow}>
                  <KoolHeaderText value={orderItem?.matName} />
                </View>

                <View>
                  <KoolHeaderText label="Vehicle Details" />
                </View>

                <View style={styles.vehicleDetailsRow}>
                  <View style={styles.itemGroup}>
                    <KoolHeaderText
                      label={orderItem?.prdBrand}
                      isPadding
                      isBlack
                    />
                    <KoolDivider />
                  </View>

                  <View style={styles.itemGroup}>
                    <KoolHeaderText
                      label={orderItem?.model}
                      isPadding
                      isBlack
                    />
                    <KoolDivider />
                  </View>

                  <View style={styles.itemGroup}>
                    <KoolHeaderText
                      label={orderItem?.fuelType}
                      isPadding
                      isBlack
                    />
                    <KoolDivider />
                  </View>

                  <View style={styles.itemGroup}>
                    <KoolHeaderText
                      label={orderItem?.yearOfMfg}
                      isPadding
                      isBlack
                    />
                    <KoolDivider />
                  </View>

                  <KoolHeaderText label={orderItem?.vehicleVariant} isBlack />
                </View>

                <View style={styles.rowBetween}>
                  <View style={globalStyles?.flex33}>
                    <KoolHeaderText
                      label="Assigned to"
                      value={orderItem?.assignedToName || 'Null'}
                    />
                  </View>
                  <View style={globalStyles?.flex33}>
                    <KoolHeaderText label="Quantity" value={orderItem?.soQty} />
                  </View>
                  <View style={globalStyles?.flex33}>
                    <KoolHeaderText
                      label="Price"
                      value={orderItem?.totalPrice}
                    />
                  </View>
                </View>
                <View style={styles.rowBetween}>
                  <View style={globalStyles?.flex33}>
                    <KoolHeaderText
                      label="ETA"
                      value={orderItem?.etaDate || 'N/A'}
                    />
                  </View>
                  <View style={globalStyles?.flex33}>
                    <KoolHeaderText label="Brand" value={orderItem?.make} />
                  </View>
                  <View style={globalStyles?.flex33}>
                    <KoolHeaderText
                      label="Amount"
                      value={orderItem?.totalPrice * orderItem?.soQty}
                    />
                  </View>
                </View>
              </View>
            ))}
          </>
        ) : (
          <View style={styles.rowBetween}>
            <View style={globalStyles?.flex65}>
              <KoolHeaderText
                label="Order Type"
                value={item.type}
                accessibilityLabel={'orderCardConfirmOrderType'}
              />
            </View>
            <View style={globalStyles?.flex35}>
              <KoolHeaderText
                label="ETA"
                value={item.etaDt}
                accessibilityLabel={'orderCardConfirmOrderETA'}
              />
            </View>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default KoolOrderCard;

const makeStyles = ({ wp, hp, Colors }: ThemeUtils) =>
  StyleSheet.create({
    orderCard: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: Colors.NEUTRAL_7,
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
