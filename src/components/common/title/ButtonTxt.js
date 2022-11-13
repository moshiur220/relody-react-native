import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyle } from "../../../styles/globalStyle";

const ButtonTxt = (props) => {
  return (
    <Text style={[globalStyle.btnTxt, props.style]}> {props.children}</Text>
  );
};

export default ButtonTxt;

const styles = StyleSheet.create({
  btnTxt: {},
});
