import AsyncStorage from "@react-native-async-storage/async-storage";

export const storePaymentToken = async (token) => {
  try {
    const jsonToken = JSON.stringify(token);
    await AsyncStorage.setItem("@storage_Token", jsonToken);
    console.log("Data save in store");
  } catch (e) {
    // saving error
    console.log(e);
  }
};

export const getPaymentToken = async () => {
  console.log("call token");
  try {
    const jsonToken = await AsyncStorage.getItem("@storage_Token");
    JSON.stringify(jsonToken);
    return jsonToken != null ? JSON.parse(jsonToken) : null;
  } catch (e) {
    // error reading value
    console.log(e);
  }
};

export const removePaymentToken = async () => {
  try {
    await AsyncStorage.removeItem("@storage_Token");
  } catch (e) {
    // remove error
  }

  console.log("Done.");
};
