import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";
import { colorName } from "../../../styles/color";
const IconField = (props) => {
  return (
    <TextInput
      {...props}
      style={[props.style, styles.input]}
      label={props.label}
      secureTextEntry
      mode="outlined"
      border="none"
      theme={{
        roundness: 25,
        colors: {
          placeholder: "#15294B",
          text: "#15294B",
          primary: "#15294B",

          border: "transparent",
          underlineColor: "transparent",
          background: colorName.accW80,
        },
      }}
      left={<TextInput.Icon name={props.icon} />}
    />
  );
};

export default IconField;

const styles = StyleSheet.create({
  input: {
    outline: "none",
    // height: 60,
    padding: -30,
  },
});
