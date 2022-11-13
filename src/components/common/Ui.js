import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

// Default futton
export function _UiButton(props) {
  return (
    <Button {...props} style={[style.uiButton, props.style]}>
      {props.children}
    </Button>
  );
}
//Default input
export function UiInput(props) {
  return (
    <TextInput
      {...props}
      selectionColor="#FF9500"
      underlineColor="#FFFFFF"
      style={[style.uiInput, props.style]}
    />
  );
}

// Text components

export function UiTitle1(props) {
  return <Text style={[style.uiTitle1, props.style]}> {props.children}</Text>;
}

export function UiTitle2(props) {
  return <Text style={[style.uiTitle2, props.style]}> {props.children}</Text>;
}
export function UiTitle3(props) {
  return <Text style={[style.uiTitle3, props.style]}> {props.children}</Text>;
}
export function Paragraph(props) {
  return <Text style={[style.paragraph, props.style]}> {props.children}</Text>;
}

export function ProductHead(props) {
  return (
    <Text style={[style.productHead, props.style]}> {props.children}</Text>
  );
}

export function ProductTitle(props) {
  return (
    <Text style={[style.productTitle, props.style]}> {props.children}</Text>
  );
}
export function ProductViewLink(props) {
  return (
    <Text style={[style.productViewLink, props.style]}> {props.children}</Text>
  );
}

export function Container(props) {
  return <View style={[style.container, props.style]}> {props.children}</View>;
}

const style = StyleSheet.create({
  uiButton: {
    width: "100%",
    paddingTop: 7,
    paddingBottom: 7,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  uiInput: {
    width: "100%",
    backgroundColor: "#FFFFFF",
  },
  uiTitle1: {
    fontFamily: "Roboto_700Bold",
    fontStyle: "normal",
    fontSize: 40,
    lineHeight: 52,
    color: "#232326",
  },
  uiTitle2: {
    fontFamily: "Roboto_400Regular",
    fontStyle: "normal",
    fontSize: 34,
    lineHeight: 41,
    color: "#232326",
  },
  uiTitle3: {
    fontFamily: "Roboto_400Regular",
    fontStyle: "normal",
    fontSize: 22,
    lineHeight: 28,
    color: "#232326",
  },
  paragraph: {
    fontFamily: "Roboto_400Regular",
    fontStyle: "normal",
    fontSize: 17,
    lineHeight: 22,
    color: "#77767E",
  },
  productHead: {
    fontFamily: "Roboto_700Bold",
    fontStyle: "normal",
    fontSize: 20,
    lineHeight: 23,
    color: "#232326",
  },
  productViewLink: {
    fontFamily: "Roboto_400Regular",
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 19,
    color: "#FF9500",
  },
  productTitle: {
    fontFamily: "Roboto_400Regular",
    fontStyle: "normal",
    fontSize: 15,
    lineHeight: 18,
    color: "#232326",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
    width: "100%",
  },
});
