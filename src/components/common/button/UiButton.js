import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { colorName } from "../../../styles/color";

// Default futton
export function UiButton(props) {
  return (
    <Button
      {...props}
      style={[
        styles.uiButton,
        props.style,
        props.color
          ? { backgroundColor: props.color }
          : { backgroundColor: colorName.primary1 },
        props.width ? { width: props.width } : { width: "100%" },
      ]}
    >
      {props.children}
    </Button>
  );
}
const styles = StyleSheet.create({
  uiButton: {
    borderRadius: 20,
    // width: "100%",
  },
});
