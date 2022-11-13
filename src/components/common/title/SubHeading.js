import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyle } from "../../../styles/globalStyle";
import { colorName } from "../../../styles/color";
const SubHeading = (props) => {
  return (
    <Text
      style={[
        globalStyle.hSub,
        props.style,
        props.color ? { color: props.color } : { color: colorName.accBK100 },
      ]}
    >
      {props.children}
    </Text>
  );
};

export default SubHeading;

const styles = StyleSheet.create({});
