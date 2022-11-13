import { StyleSheet, Image, Text, View } from "react-native";
import React from "react";
import { images } from "../../constants/images";
import FitImage from "react-native-fit-image";
const ImageComponent = (props) => {
  if (props.uri) {
    return (
      <FitImage
        style={[
          props.width && props.height
            ? { height: props.width, width: props.width }
            : styles.logo,
          props.style,
        ]}
        source={props.uri}
        resizeMode="contain"
      />
    );
  } else {
    return <Image style={styles.logo} source={images.logo}></Image>;
  }
};

export default ImageComponent;

const styles = StyleSheet.create({
  logo: {
    width: 214,
    height: 214,
  },
});
