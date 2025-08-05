import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    // saving error
  }
};

export const getData = async <T>(
  key: string,
  defaultValue?: T
): Promise<T | undefined> => {
  try {
    const value = await AsyncStorage.getItem(key);

    if (value !== null) {
      return JSON.parse(value) as T;
    }
    return defaultValue;
  } catch (e) {
    // error reading value
    return defaultValue;
  }
};
