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
const WelcomeLogin = ({ navigation }) => {
  return (
    <Grid style={{ backgroundColor: colorName.accW80 }}>
      <Row style={styles.logoCenter}>
        <Logo />
      </Row>
      <Row>
        <ContentBox>
          <Heading>Welcome to</Heading>
          <Heading>Mobile Banking App</Heading>
          <View style={{ alignItems: "center", marginTop: 16 }}>
            <SubHeading>Deliver your Order around </SubHeading>
            <SubHeading>without hesitation</SubHeading>
          </View>
          <UiButton
            style={styles.button}
            onPress={() => navigation.navigate("Login")}
          >
            <ButtonTxt>Conecte-se</ButtonTxt>
          </UiButton>
          <UiButton
            color={colorName.accY100}
            style={styles.button}
            onPress={() => navigation.navigate("Signin")}
          >
            <ButtonTxt>Registro</ButtonTxt>
          </UiButton>
        </ContentBox>
      </Row>
    </Grid>
  );
};

export default WelcomeLogin;

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
