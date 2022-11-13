import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { colorName } from "../../styles/color";

const Container = ({ children }) => {
  return <SafeAreaView>{children}</SafeAreaView>;
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colorName.accW80,
  },
});
