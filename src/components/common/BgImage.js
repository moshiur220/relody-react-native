import { View, Text, ImageBackground } from "react-native";
import React from "react";

const BgImage = ({ children }) => {
  return (
    <ImageBackground
      source={require("../../../assets/images/bg/allbg.png")}
      style={{ flex: 1 }}
      resizeMode="stretch"
    >
      {children}
    </ImageBackground>
  );
};

export default BgImage;
