import { StyleSheet, Text, View, Alert } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import { colorName } from "../styles/color";
import ImageComponent from "../components/comimage/ImageComponent";
import { images } from "../constants/images";
import ContentBox from "../components/auth/ContentBox";
import CustomTitle from "../components/common/title/CustomTitle";
import { globalStyle } from "../styles/globalStyle";
import React, { useState, useRef } from "react";
import PhoneInput from "react-native-phone-number-input";
import { UiButton } from "../components/common/button/UiButton";
import ButtonTxt from "../components/common/title/ButtonTxt";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import firebase from "firebase/compat/app";
import { firebaseConfig } from "../config/firebaseConfig";
const Signin = ({ navigation }) => {
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [verificationId, setVerificationId] = useState("");
  const recaptchaVerifier = useRef(null);
  const sendVariation = () => {
    if (phone.length > 8) {
      // firebase.auth.settings.isAppVerificationDisabledForTesting = true;
      const phoneProvider = new firebase.auth.PhoneAuthProvider();
      phoneProvider
        .verifyPhoneNumber(phone, recaptchaVerifier.current)
        .then((verificationId) => {
          setVerificationId(verificationId);
          navigation.navigate("OtpVerification", {
            verificationId: verificationId,
            phoneNumber: phone,
          });
        })
        .catch((error) => {
          setPhone("");
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
    const credential = firebase.auth.PhoneAuthProvider.credential(
      verificationId,
      code
    );
    firebase
      .auth()
      .signInWithCredential(credential)
      .then(() => {
        // navigation.navigate("Success")
        setCode();
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("confirmCode", verificationId, code);
  };
  return (
    <Grid style={{ backgroundColor: colorName.accW80 }}>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebaseConfig}
        attemptInvisibleVerification={false}
        // accessibilityElementsHidden={true}
        // accessibilityViewIsModal={false}
      />
      <Row style={styles.center} size={1}>
        <ImageComponent uri={images.sinIn} width={294} height={196} />
      </Row>
      <Row size={2}>
        <Grid>
          <Row size={2}>
            <ContentBox>
              <CustomTitle color={colorName.accBK100} style={globalStyle.body2}>
                Basta digitar seu número de telefone
              </CustomTitle>
              <CustomTitle
                color={colorName.accBK100}
                style={[globalStyle.body2, { marginBottom: 23 }]}
              >
                ou crie uma conta.
              </CustomTitle>
              <PhoneInput
                defaultValue={phone}
                layout="first"
                defaultCode="BR"
                onChangeText={(text) => {
                  console.log("onChangeText", text);
                  // setPhone(text)
                }}
                onChangeFormattedText={(text) => {
                  console.log("onChangeFormattedText", text);
                  setPhone(text);
                }}
                countryPickerProps={{ withAlphaFilter: true }}
                withShadow
                autoFocus
              />
              <CustomTitle
                color={colorName.accBK100}
                style={[globalStyle.body2, { marginTop: 23 }]}
              >
                Ao usar nosso aplicativo móvel, você concorda em
              </CustomTitle>
              <CustomTitle color={colorName.accBK100} style={globalStyle.body2}>
                Termos de uso
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
              <UiButton
                style={styles.button}
                onPress={() =>
                  // navigation.navigate("OtpVerification")
                  sendVariation()
                }
              >
                <ButtonTxt>Mandar</ButtonTxt>
              </UiButton>
              {/* <UiButton
                style={styles.button}
                onPress={() =>
                  // navigation.navigate("OtpVerification")
                  confirmCode()
                }
              >
                <ButtonTxt>Continue</ButtonTxt>
              </UiButton> */}
            </View>
          </Row>
        </Grid>
      </Row>
    </Grid>
  );
};

export default Signin;

const styles = StyleSheet.create({
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  button: {},
});
