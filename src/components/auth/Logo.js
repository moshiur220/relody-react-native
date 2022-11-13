import { StyleSheet, Image, Text, View } from "react-native";
import React from "react";
import { images } from "../../constants/images";

const Logo = () => {
  return <Image style={styles.logo} source={images.logo}></Image>;
};

export default Logo;

const styles = StyleSheet.create({
  logo: {
    width: 214,
    height: 214,
  },
});
