import NetInfo from "@react-native-community/netinfo";
import { Alert } from "react-native";

export const checkNetwork = async () => {
    const netInfo = await NetInfo.fetch();
    console.log(netInfo, "netInfo")
    if (!netInfo.isConnected) {
        return Alert("Data is off")
    }
};