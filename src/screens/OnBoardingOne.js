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
const OnBoardingOne = ({ navigation }) => {
  return (
    <Grid style={{ backgroundColor: colorName.accW80 }}>
      <Row style={styles.logoCenter}>
        <Logo />
      </Row>
      <Row>
        <Grid>
          <Row size={2}>
            <Swiper
              onMomentumScrollEnd={(e, state, context) =>
                console.log("index:", state.index)
              }
              dot={
                <View
                  style={{
                    backgroundColor: "rgba(0,0,0,.2)",
                    width: 20,
                    height: 8,
                    borderRadius: 4,
                    marginLeft: 3,
                    marginRight: 3,
                    marginTop: 3,
                    marginBottom: 3,
                  }}
                />
              }
              activeDot={
                <View
                  style={{
                    backgroundColor: colorName.primary1,
                    width: 36,
                    height: 8,
                    borderRadius: 4,
                    marginLeft: 3,
                    marginRight: 3,
                    marginTop: 3,
                    marginBottom: 3,
                  }}
                />
              }
              paginationStyle={{
                bottom: -23,
                left: 20,
                right: 10,
              }}
              loop
            >
              <ContentBox>
                <Heading>Welcome to</Heading>
                <Heading>Fintech Mobile App</Heading>
                <View style={{ alignItems: "center", marginTop: 16 }}>
                  <SubHeading>Reference site about Lorem</SubHeading>
                  <SubHeading>Ipsum, giving information origins</SubHeading>
                </View>
                <UiButton style={styles.button}>
                  <ButtonTxt>Get Started</ButtonTxt>
                </UiButton>
              </ContentBox>
              <ContentBox>
                <Heading>Hello to</Heading>
                <Heading>Bankin Mobile App</Heading>
                <View style={{ alignItems: "center", marginTop: 16 }}>
                  <SubHeading>Reference site about Lorem</SubHeading>
                  <SubHeading>Ipsum, giving information origins</SubHeading>
                </View>
                <UiButton style={styles.button}>
                  <ButtonTxt>Get Started</ButtonTxt>
                </UiButton>
              </ContentBox>
            </Swiper>
          </Row>
          <Row size={1}>
            {/* <UiButton style={styles.buttonSkip}>
              <ButtonTxt>Skip</ButtonTxt>
            </UiButton> */}
            <View style={styles.buttonSkip}>
              <Button
                style={styles.buttonSkipBorder}
                type="contained"
                onPress={() => navigation.navigate("OnBoardingTow")}
              >
                <ButtonTxt>Skip</ButtonTxt>
              </Button>
            </View>
          </Row>
        </Grid>
      </Row>
    </Grid>
  );
};

export default OnBoardingOne;

const styles = StyleSheet.create({
  logoCenter: {
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginTop: 30,
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
