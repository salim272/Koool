import AsyncStorage from "@react-native-async-storage/async-storage";

enum AsyncStoreKeys {
    MOBILE_NUMBER = "MOBILE_NUMBER",
    USER_TOKEN = 'USER_TOKEN',
    ONBOARDING_COMPLETE = 'ONBOARDING_COMPLETE',
    LANGUAGE = 'LANGUAGE',
    THEME = 'THEME',
}

export const saveMobileNumber = async (mobileNumber: string) => {
    try {
        await AsyncStorage.setItem(AsyncStoreKeys.MOBILE_NUMBER, mobileNumber);
    } catch (error) {
        console.error('Failed to save mobile number:', error);
    }
};

export const getMobileNumber = async (): Promise<string | null> => {
    try {
        return await AsyncStorage.getItem(AsyncStoreKeys.MOBILE_NUMBER);
    } catch (error) {
        console.error('Failed to retrieve mobile number:', error);
        return null;
    }
};

export const saveUserToken = async (token: string) => {
    try {
        await AsyncStorage.setItem(AsyncStoreKeys.USER_TOKEN, token);
    } catch (error) {
        console.error('Failed to save token:', error);
    }
};

export const getUserToken = async (): Promise<string | null> => {
    try {
        return await AsyncStorage.getItem(AsyncStoreKeys.USER_TOKEN);
    } catch (error) {
        console.error('Failed to retrieve token:', error);
        return null;
    }
};