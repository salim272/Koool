import React, { useEffect, useState, useMemo } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { ThemeUtils } from '../../theme/commonTypes';
import KoolHeaderText from '../../components/KoolTableCard';
import KoolOrderStatusTracker from '../../components/KoolOrderStatusTracker';
import RightIcon from '../../../assets/images/RightIcon.svg';
import KoolDivider from '../../components/KoolDivider';
import { getConfirmOrderDetails } from '../../apis/order/order';
import { useTheme } from '../../theme/useTheme';

const KoolOrderCard = ({ route }) => {
  const { id } = route.params;
  const { globalStyles, AppFont, wp, hp, Colors } = useTheme() as ThemeUtils;
  const styles = makeStyles({ wp, hp, Colors });

  const isEstimate = false;

  const [refreshing, setRefreshing] = useState(false);
  const [confirmOrderDetails, setConfirmOrderDetails] = useState<any>({});
  const [showItems, setShowItems] = useState(false);

  useEffect(() => {
    const fetchConfirmOrderDetails = async () => {
      setRefreshing(true);
      try {
        const response = await getConfirmOrderDetails({ id: id });
        setConfirmOrderDetails(response);
      } catch (error) {
        console.error('Estimate Orders Error:', error);
      } finally {
        setRefreshing(false);
      }
    };

    fetchConfirmOrderDetails();
  }, []);

  const billingAddress = useMemo(() => {
    const addr = confirmOrderDetails?.billingAddress;
    if (!addr) return 'N/A';
    return [addr.street, addr.location, addr.city, addr.state, addr.pinCode]
      .filter(Boolean)
      .join(', ');
  }, [confirmOrderDetails]);

  enum StatusStep {
    OPEN = 1,
    'PACKING COMPLETE' = 2,
    INVOICED = 3,
    DISPATCHED = 4,
    DELIVERED = 5,
    CANCELLED = 6,
    CLOSED = 7,
  }

  const currentStep = useMemo(() => {
    const status = confirmOrderDetails?.status;
    return StatusStep[status as keyof typeof StatusStep] || StatusStep.OPEN;
  }, [confirmOrderDetails]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors?.PRIMARY_2,
        paddingHorizontal: 5,
      }}
    >
      <KoolOrderStatusTracker currentStep={currentStep} />

      <View style={styles.container}>
        <View style={styles.orderContent}>
          <View style={styles.rowBetween}>
            <View style={globalStyles?.flex65}>
              <KoolHeaderText value={`# ${confirmOrderDetails?.id || ''}`} />
            </View>
            {!isEstimate && (
              <View style={{ paddingRight: wp(3) }}>
                <KoolHeaderText label={confirmOrderDetails?.orderDt || ''} />
              </View>
            )}
          </View>

          <View style={styles.rowBetween}>
            <View style={globalStyles?.flex65}>
              <KoolHeaderText
                label="Assigned to"
                value={confirmOrderDetails?.assignedToName || 'N/A'}
              />
            </View>
            <View style={globalStyles?.flex35}>
              <KoolHeaderText
                label="ETA"
                value={confirmOrderDetails?.etaDt || 'N/A'}
              />
            </View>
          </View>

          <View style={styles.rowBetween}>
            <View style={globalStyles?.flex65}>
              <KoolHeaderText
                label="Order Enquiry No."
                value={confirmOrderDetails?.orderEnqNum || 'N/A'}
              />
            </View>
            <View style={globalStyles?.flex35}>
              <KoolHeaderText
                label="Status"
                value={confirmOrderDetails?.orderStatus || 'N/A'}
              />
            </View>
          </View>

          <View style={styles.rowBetween}>
            <View style={{ flex: 1, marginBottom: wp(2.5) }}>
              <KoolHeaderText label="Billing Address" value={billingAddress} />
            </View>
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={styles.orderItem}
        activeOpacity={0.5}
        onPress={() => setShowItems((prev) => !prev)}
      >
        <Text style={AppFont?.REGULAR_INTER_14}>Order Items</Text>
        <RightIcon
          style={{ transform: [{ rotate: showItems ? '90deg' : '0deg' }] }}
        />
      </TouchableOpacity>

      {showItems && (
        <FlatList
          data={confirmOrderDetails?.posOrderItems || []}
          keyExtractor={(_, index) => index.toString()}
          contentContainerStyle={styles.itemList}
          renderItem={({ item }) => (
            <View
              style={{
                marginBottom: wp(2),
                borderBottomWidth: 1,
                borderBottomColor: Colors.NEUTRAL_7,
                paddingBottom: wp(2),
              }}
            >
              <View style={styles.rowBetween}>
                <View style={globalStyles?.flex65}>
                  <KoolHeaderText label="Part Name" value={item?.matName} />
                </View>
                <View style={globalStyles?.flex35}>
                  <KoolHeaderText label="Part Code" value={item?.matCode} />
                </View>
              </View>

              <View style={styles.rowBetween}>
                <View style={globalStyles?.flex65}>
                  <KoolHeaderText
                    label="Category"
                    value={item?.materialCategoryName}
                  />
                </View>
                <View style={globalStyles?.flex35}>
                  <KoolHeaderText label="Type" value={item?.orderType} />
                </View>
              </View>

              <View style={styles.rowBetween}>
                <View style={globalStyles?.flex65}>
                  <KoolHeaderText label="Brand" value={item?.prdBrand} />
                </View>
                <View style={globalStyles?.flex35}>
                  <KoolHeaderText label="Quantity" value={item?.orderQty} />
                </View>
              </View>

              <View style={styles.rowBetween}>
                <View style={globalStyles?.flex65}>
                  <KoolHeaderText
                    label="ETA"
                    value={item?.etaDate || '10-05-2025'}
                  />
                </View>
                <View style={globalStyles?.flex35}>
                  <KoolHeaderText label="Status" value={item?.itemStatus} />
                </View>
              </View>

              <View>
                <KoolHeaderText label="Vehicle Details" />
              </View>

              <View style={styles.vehicleDetailsRow}>
                <View style={styles.itemGroup}>
                  <KoolHeaderText label={item?.prdBrand} isPadding isBlack />
                  <KoolDivider />
                </View>
                <View style={styles.itemGroup}>
                  <KoolHeaderText
                    label={item?.vehModel || 'M1'}
                    isPadding
                    isBlack
                  />
                  <KoolDivider />
                </View>
                <View style={styles.itemGroup}>
                  <KoolHeaderText
                    label={item?.fuelType || 'Petrol'}
                    isPadding
                    isBlack
                  />
                  <KoolDivider />
                </View>
                <View style={styles.itemGroup}>
                  <KoolHeaderText
                    label={item?.year || 2012}
                    isPadding
                    isBlack
                  />
                  <KoolDivider />
                </View>
                <KoolHeaderText
                  label={item?.vehicleVariant || 'Q2TRU'}
                  isBlack
                />
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default KoolOrderCard;

const makeStyles = ({ wp, hp, Colors }: ThemeUtils) =>
  StyleSheet.create({
    container: {
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
      justifyContent: 'space-between',
      width: '100%',
    },
    orderItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: wp(3),
      paddingVertical: wp(2),
      borderBottomWidth: 1,
      borderBottomColor: Colors.NEUTRAL_7,
    },

    vehicleDetailsRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      marginLeft: 4,
      marginTop: wp(-1),
    },
    itemGroup: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    itemList: {
      paddingHorizontal: wp(1),
      backgroundColor: Colors.PRIMARY_3,
      paddingBottom: wp(2),
      marginTop: wp(1),
    },
  });
