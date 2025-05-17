import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import KoolImage from './KoolImage';
import { useTheme } from '../theme/useTheme';

interface NewOrderHomeBtnProps {
  id: string;
  text: string;
  image: string | any;
  onTap: (id: string) => void;
  accessibilityLabel?: string;
}

const KoolVerticalImageTextButton: React.FC<NewOrderHomeBtnProps> = ({
  id,
  text,
  image,
  onTap,
  accessibilityLabel,
}) => {
  const { AppFont, wp, hp, Colors } = useTheme();
  const styles = makeStyles({ wp, hp, Colors });

  return (
    <View style={styles.container} accessibilityLabel={accessibilityLabel}>
      <TouchableOpacity
        accessibilityLabel={text}
        onPress={() => onTap(id)}
        style={styles.image}
      >
        <KoolImage source={image} style={styles.image} resizeMode="contain" />
      </TouchableOpacity>
      <Text style={[styles.text, AppFont?.REGULAR_INTER_12]}>{text}</Text>
    </View>
  );
};

const makeStyles = ({ wp, hp }: any) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      padding: wp(2),
      marginTop: hp(1.4),
      width: wp(21),
    },
    image: {
      width: wp(20),
      height: wp(19.5),
      borderRadius: wp(2),
    },
    text: {
      textAlign: 'center',
      marginTop: 2,
      textTransform: 'capitalize',
    },
  });

export default KoolVerticalImageTextButton;
