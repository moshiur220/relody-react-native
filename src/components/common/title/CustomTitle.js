import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyle } from "../../../styles/globalStyle";
import { colorName } from "../../../styles/color";
const CustomTitle = (props) => {
  return (
    <Text
      style={[
        props.style,
        props.color ? { color: props.color } : { color: colorName.accBK100 },
      ]}
    >
      {props.children}
    </Text>
  );
};

export default CustomTitle;

const styles = StyleSheet.create({});
