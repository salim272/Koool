import { StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import KoolHeaderText from '../../components/KoolTableCard';
import { useTheme } from '../../theme/useTheme';
import { ThemeUtils } from '../../theme/commonTypes';
import KoolOrderCard from '../../components/KoolOrderCard';
import { getEstimateOrderDetails } from '../../apis/order/order';

const EstimateOrderDetails = ({ route }) => {
  const { id } = route.params;
  const { wp, hp, Colors } = useTheme() as ThemeUtils;
  const styles = makeStyles({ wp, hp, Colors });

  const [refreshing, setRefreshing] = useState(false);
  const [estimateList, setEstimateList] = useState([]);
  const fetchEstimateOrders = async () => {
    setRefreshing(true);
    try {
      const response = await getEstimateOrderDetails({
        id: id,
      });
      setEstimateList(response);
    } catch (error) {
      console.error('Estimate Orders Error:', error);
    } finally {
      setRefreshing(false);
    }
  };
  useEffect(() => {
    if (id) {
      fetchEstimateOrders();
    }
  }, [id]);
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <KoolHeaderText value={'# ' + estimateList?.id} />
        <KoolHeaderText label={estimateList?.soDt} />
      </View>

      <KoolOrderCard
        item={estimateList}
        isEstimate
        onPress={() => console.log('Pressed:', item.id)}
      />
    </View>
  );
};

export default EstimateOrderDetails;

const makeStyles = ({ wp, hp, Colors }: ThemeUtils) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.PRIMARY_2,
    },
    headerRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingTop: 20,
      paddingHorizontal: 10,
      borderBottomWidth: 1,
      paddingBottom: wp(2.5),
      borderBottomColor: Colors?.NEUTRAL_7,
    },
  });
