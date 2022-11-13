import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import { images } from "../../../constants/images";
const LoadingApp = () => {
  return (
    <View style={[StyleSheet.absoluteFill, styles.container]}>
      <LottieView source={images.loading} autoPlay loop />
    </View>
  );
};

export default LoadingApp;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.80)",
    zIndex: 1,
  },
});
