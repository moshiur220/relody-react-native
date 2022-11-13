import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeUser = async (user) => {
  try {
    const jsonUser = JSON.stringify(user);
    await AsyncStorage.setItem("@storage_User", jsonUser);
    console.log("Data save in store");
  } catch (e) {
    // saving error
    console.log(e);
  }
};

export const getUser = async () => {
  try {
    const jsonUser = await AsyncStorage.getItem("@storage_User");
    return jsonUser != null ? JSON.parse(jsonUser) : null;
  } catch (e) {
    // error reading value
    console.log(e);
  }
};

export const removeUser = async () => {
  try {
    await AsyncStorage.removeItem("@storage_User");
  } catch (e) {
    // remove error
  }

  console.log("Done.");
};

export const clearAll = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    // clear error
  }

  console.log("Done.");
};
