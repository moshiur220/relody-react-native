import { StyleSheet, Text, View, Alert } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import { colorName } from "../styles/color";
import ImageComponent from "../components/comimage/ImageComponent";
import { images } from "../constants/images";
import ContentBox from "../components/auth/ContentBox";
import CustomTitle from "../components/common/title/CustomTitle";
import { globalStyle } from "../styles/globalStyle";
import React, { useState, useRef } from "react";
import { UiButton } from "../components/common/button/UiButton";
import ButtonTxt from "../components/common/title/ButtonTxt";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import firebase from "firebase/compat/app";
import { firebaseConfig } from "../config/firebaseConfig";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import SimpleInput from "../components/common/input/SimpleInput";
const SignOtpVerification = () => {
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [verificationId, setVerificationId] = useState("");
  const route = useRoute();
  const navigation = useNavigation();
  const recaptchaVerifier = useRef(null);
  // setVerificationId(route.params.verificationId);
  // setPhone(route.params.phoneNumber);
  // console.log(route.params.verificationId);
  // console.log(route.params.phoneNumber);
  const sendVariation = () => {
    if (phone.length > 8) {
      const phoneProvider = new firebase.auth.PhoneAuthProvider();
      phoneProvider
        .verifyPhoneNumber(phone, recaptchaVerifier.current)
        .then((verificationId) => {
          setVerificationId(verificationId);
          // navigation.navigate("SignOtpVerification");
        })
        .catch((error) => {
          Alert.alert("Otp Alert Title", "Please enter valid phone number", [
            { text: "OK", onPress: () => console.log("OK Pressed") },
          ]);
          console.log(error);
        });
      setPhone("");
    } else {
      Alert.alert("Otp Alert Title", "Please enter valid phone number", [
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    }
  };
  const confirmCode = () => {
    if (code.length === 6) {
      // setVerificationId(route.params.verificationId);
      const credential = firebase.auth.PhoneAuthProvider.credential(
        route.params.verificationId,
        code
      );
      firebase
        .auth()
        .signInWithCredential(credential)
        .then(() => {
          // navigation.navigate("Success")
          navigation.navigate("Home", {
            phoneNumber: route.params.phoneNumber,
          });
          setCode();
        })
        .catch((error) => {
          console.log(error);
          Alert.alert("Otp Alert Title", "Please enter valid code", [
            { text: "OK", onPress: () => console.log("OK Pressed") },
          ]);
        });
      console.log("confirmCode", verificationId, code);
    } else {
      Alert.alert("Otp Alert Title", "Please enter valid code", [
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    }
  };
  return (
    <Grid style={{ backgroundColor: colorName.accW80 }}>
      <Row style={styles.center} size={1}>
        <ImageComponent uri={images.otp} width={294} height={196} />
      </Row>
      <Row size={2}>
        <Grid>
          <Row size={2}>
            <ContentBox>
              <CustomTitle color={colorName.accBK100} style={globalStyle.body2}>
                An authentication code has been sent
              </CustomTitle>
              <CustomTitle
                color={colorName.accBK100}
                style={[globalStyle.body2, { marginBottom: 23 }]}
              >
                {/* (+880) 111 222 333 */}
                {route.params.phoneNumber}
              </CustomTitle>
              {/* <OTP
                codeCount={4}
                // containerStyle={{ marginTop: 50 }}
                otpStyles={{ backgroundColor: "#eee" }}
              /> */}

              <SimpleInput
                label="Enter OTP"
                value={code}
                onChangeText={(value) => {
                  setCode(value);
                }}
              />
              <CustomTitle
                color={colorName.accBK100}
                style={[globalStyle.body2, { marginTop: 23 }]}
              >
                I didn't receive code.
              </CustomTitle>
              <CustomTitle color={colorName.primary1} style={globalStyle.body2}>
                1:20 Sec left
              </CustomTitle>
            </ContentBox>
          </Row>
          <Row size={1}>
            <View
              style={{
                width: "100%",
                display: "flex",
                padding: 25,
                alignContent: "center",
              }}
            >
              {/* () => navigation.navigate("SignUp") */}
              <UiButton style={styles.button} onPress={confirmCode}>
                <ButtonTxt>Continue</ButtonTxt>
              </UiButton>
            </View>
          </Row>
        </Grid>
      </Row>
    </Grid>
  );
};

export default SignOtpVerification;

const styles = StyleSheet.create({
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  button: {},
});
