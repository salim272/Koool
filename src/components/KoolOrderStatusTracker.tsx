import React from 'react';
import { View, StyleSheet } from 'react-native';
import TrackIcon from '../../assets/images/Track.svg';
import { useTheme } from '../theme/useTheme';
import { ThemeUtils } from '../theme/commonTypes';
import KoolHeaderText from './KoolTableCard';

interface KoolOrderStatusTrackerProps {
  totalSteps?: number;
  currentStep: number;
}

const KoolOrderStatusTracker: React.FC<KoolOrderStatusTrackerProps> = ({
  totalSteps = 7,
  currentStep,
}) => {
  const { wp, hp, Colors } = useTheme() as ThemeUtils;
  const styles = makeStyles({ wp, hp, Colors });

  return (
    <>
      <View style={styles.statusTracker}>
        {Array.from({ length: totalSteps }).map((_, index) => {
          const isCompleted = index < currentStep;
          const isCurrent = index === currentStep;

          return (
            <View key={index} style={styles.statusStep}>
              <View
                style={[
                  styles.circle,
                  {
                    backgroundColor:
                      isCompleted || isCurrent
                        ? Colors.INFORMATION
                        : Colors.NEUTRAL_7,
                  },
                ]}
              >
                {isCurrent && <TrackIcon width={40} height={40} />}
              </View>
              {index < totalSteps - 1 && (
                <View
                  style={[
                    styles.line,
                    {
                      backgroundColor:
                        index < currentStep
                          ? Colors.INFORMATION
                          : Colors.NEUTRAL_7,
                    },
                  ]}
                />
              )}
            </View>
          );
        })}
      </View>
      <View style={styles.rowBetween}>
        <View>
          <KoolHeaderText label="10-10-2025" />
        </View>
        <View>
          <KoolHeaderText label="16-10-2025" />
        </View>
      </View>
    </>
  );
};

export default KoolOrderStatusTracker;

const makeStyles = ({ wp, hp, Colors }: ThemeUtils) =>
  StyleSheet.create({
    statusTracker: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: hp(3.8),
    },
    statusStep: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    circle: {
      width: wp(3),
      height: wp(3),
      borderRadius: wp(3),
      alignItems: 'center',
      justifyContent: 'center',
    },
    line: {
      height: 2.5,
      width: wp(9.5),
      marginHorizontal: wp(1),
    },
    rowBetween: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: wp(1.5),
      paddingTop: 2,
    },
  });
