import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Col, Row, Grid } from "react-native-easy-grid";
import Logo from "../components/auth/Logo";
import Heading from "../components/common/title/Heading";
import ContentBox from "../components/auth/ContentBox";
import { colorName } from "../styles/color";
import SubHeading from "../components/common/title/SubHeading";
import { UiButton } from "../components/common/button/UiButton";
import ButtonTxt from "../components/common/title/ButtonTxt";
import Swiper from "react-native-swiper";
import { Button } from "react-native-paper";
import { images } from "../constants/images";
import ImageComponent from "../components/comimage/ImageComponent";
import CustomTitle from "../components/common/title/CustomTitle";
import { globalStyle } from "../styles/globalStyle";
const Success = ({ navigation }) => {
  return (
    <Grid style={{ backgroundColor: colorName.accW80 }}>
      <Row style={styles.logoCenter}>
        <ImageComponent uri={images.success} width={294} height={196} />
      </Row>
      <Row>
        <ContentBox>
          <View style={{ marginBottom: 20 }}>
            <CustomTitle color={colorName.primary1} style={[globalStyle.title]}>
              Account Created!
            </CustomTitle>
          </View>

          <CustomTitle color={colorName.accBK100} style={globalStyle.body2}>
            our Terms of Service and Privacy Policy
          </CustomTitle>
          <CustomTitle color={colorName.accBK100} style={globalStyle.body2}>
            successfully.
          </CustomTitle>
          <CustomTitle color={colorName.accBK100} style={globalStyle.body2}>
            Please sign in to use your account
          </CustomTitle>
          <CustomTitle color={colorName.accBK100} style={globalStyle.body2}>
            and enjoy
          </CustomTitle>
          <UiButton
            style={styles.button}
            onPress={() => navigation.navigate("Home")}
          >
            <ButtonTxt>Take me to sign in</ButtonTxt>
          </UiButton>
        </ContentBox>
      </Row>
    </Grid>
  );
};

export default Success;

const styles = StyleSheet.create({
  logoCenter: {
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginTop: 15,
  },
  buttonSkip: {
    marginTop: 15,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonSkipBorder: {
    borderRadius: 20,
    backgroundColor: colorName.accY100,
  },
});
