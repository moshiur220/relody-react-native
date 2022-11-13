import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";
import { colorName } from "../../../styles/color";
const SimpleInput = (props) => {
  return (
    <TextInput
      {...props}
      style={[
        props.style,
        { width: "100%", marginBottom: 8, backgroundColor: colorName.accW100 },
      ]}
      label={props.label}
      // mode="outlined"
      underlineColor={colorName.primary1}
      activeUnderlineColor={colorName.primary1}
      border="none"
      theme={
        {
          // roundness: 25,
          // colors: {
          // placeholder: "#15294B",
          // text: "#15294B",
          // primary: "#15294B",
          // primary: colorName.primary1,
          //   // border: "transparent",
          //   // underlineColor: "transparent",
          // background: "#15294B",
          // background: "red",
          // },
        }
      }
    />
  );
};

export default SimpleInput;

const styles = StyleSheet.create({
  input: {
    outline: "none",
    // height: 60,
    padding: -30,
  },
});
