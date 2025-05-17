import { Text, TouchableOpacity, View } from "react-native"
import { Icon } from "react-native-elements"

interface KoolProfileCardProps {
    name: string,
    maskedPhone: string,
    address: string,
    onEdit: () => void
}

const KoolProfileCard: React.FC<KoolProfileCardProps> = ({ name, maskedPhone, address, onEdit }) => (
    <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#F8F8F8',
        justifyContent: 'space-between',
    }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: '#D8D8D8',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#555' }}>
                    {name.charAt(0)}
                </Text>
            </View>

            <View style={{ marginLeft: 10 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{name}</Text>
                <Text style={{ fontSize: 14, color: '#777' }}>{maskedPhone}</Text>
                <Text style={{ fontSize: 12, color: '#777', marginTop: 3 }}>{address}</Text>
            </View>
        </View >
        <TouchableOpacity onPress={onEdit}>
            <Icon name='edit-3' size={18} color='#555' />
        </TouchableOpacity>

    </View>
);

export default KoolProfileCard;