import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colorName } from "../../styles/color";

const ContentBox = ({ children }) => {
  return <View style={styles.box}>{children}</View>;
};

export default ContentBox;

const styles = StyleSheet.create({
  box: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colorName.accW100,
    // backgroundColor: "red",
    padding: 20,
    marginHorizontal: 30,
    borderRadius: 20,
  },
});
