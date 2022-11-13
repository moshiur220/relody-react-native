import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import React, { useRef } from "react";
import { Col, Row, Grid } from "react-native-easy-grid";
import ContentBox from "../components/auth/ContentBox";
import { colorName } from "../styles/color";
import { UiButton } from "../components/common/button/UiButton";
import ButtonTxt from "../components/common/title/ButtonTxt";
import ImageComponent from "../components/comimage/ImageComponent";
import { images } from "../constants/images";
import { Checkbox } from "react-native-paper";
import IconField from "../components/common/input/IconField";
import { globalStyle } from "../styles/globalStyle";
import CustomTitle from "../components/common/title/CustomTitle";
import * as yup from "yup";
import { Formik } from "formik";
import SimpleInput from "../components/common/input/SimpleInput";
import { loginUser } from "../services/auth";
import AppLoading from "expo-app-loading";
import LoadingApp from "../components/common/loading/LoadingApp";
import firebase from "firebase/compat/app";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { firebaseConfig } from "../config/firebaseConfig";
import { storeUser } from "../helpers/userData";
import { paymentToken } from "../services/payment";
import { storePaymentToken } from "../helpers/paymentToken";
const Login = ({ navigation }) => {
  const [checked, setChecked] = React.useState(true);
  const [taxtNumber, setTaxtNumber] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [verificationId, setVerificationId] = React.useState("");
  const recaptchaVerifier = useRef(null);
  const sendVariation = (myPhone) => {
    const phoneProvider = new firebase.auth.PhoneAuthProvider();
    phoneProvider
      .verifyPhoneNumber(myPhone, recaptchaVerifier.current)
      .then((verificationId) => {
        setVerificationId(verificationId);
        navigation.navigate("SignOtpVerification", {
          verificationId: verificationId,
          phoneNumber: myPhone,
        });
      })
      .catch((error) => {
        Alert.alert("Mensagem", "Insira um número de telefone válido", [
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]);
        console.log(error);
      });
  };
  const sendUser = async () => {
    if (taxtNumber !== "" && password !== "") {
      try {
        setLoading(true);
        const userResponse = await loginUser({
          taxNumber: taxtNumber,
          password: password,
        });
        if (userResponse.success) {
          // console.log(userResponse.data.user.phone);
          // sendVariation(userResponse.data.user.phone);
          setLoading(false);
          storeUser(userResponse.data);
          paymentToken().then((userResponse) => {
            //setPaymentToken(userResponse.token)
            storePaymentToken(userResponse.access_token);
          });

          navigation.navigate("Dashboard");
        }
        console.log(JSON.stringify(userResponse));
      } catch (error) {
        setLoading(false);
        console.log(error);
        Alert.alert("Mensagem", "Insira uma senha e CPF válidos", [
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]);
      }
    } else {
      Alert.alert("Mensagem", "Por favor, digite uma senha válida", [
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    }
  };

  return (
    <Grid style={{ backgroundColor: colorName.accW80 }}>
      {/* <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebaseConfig}
      /> */}
      <Row style={styles.logoCenter} size={1}>
        <ImageComponent uri={images.singUp} width={294} height={196} />
      </Row>
      <Row size={2}>
        <Grid>
          <Row size={2}>
            <ContentBox>
              <View
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                {/* Taxt number start */}
                <SimpleInput
                  label="Enter Taxt number "
                  value={taxtNumber}
                  onChangeText={(value) => {
                    setTaxtNumber(value);
                  }}
                />

                {/* Taxt number end */}
                {/* Taxt number start */}
                <SimpleInput
                  label="Password"
                  value={password}
                  secureTextEntry
                  onChangeText={(value) => {
                    setPassword(value);
                  }}
                />

                {/* Taxt number end */}
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: 17,
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Checkbox
                      color={colorName.primary1}
                      status={checked ? "checked" : "unchecked"}
                      onPress={() => {
                        setChecked(!checked);
                      }}
                    />
                    <CustomTitle
                      color={colorName.accBK100}
                      style={globalStyle.body2}
                    >
                      Lembrar
                    </CustomTitle>
                  </View>
                  {/* <SubHeading color={colorName.primary2}>
                    Forget password ?
                  </SubHeading> */}
                  <CustomTitle
                    color={colorName.primary2}
                    style={globalStyle.body2}
                  >
                    Esqueceu a senha?
                  </CustomTitle>
                </View>
                <UiButton
                  style={styles.button}
                  onPress={() =>
                    //  navigation.navigate("SignOtpVerification")
                    sendUser()
                  }
                >
                  <ButtonTxt>Entrar</ButtonTxt>
                </UiButton>
              </View>
            </ContentBox>
          </Row>

          <Row size={1}>
            <View
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-evenly",
                // alignItems: "space-between",
                alignSelf: "center",
              }}
            >
              <CustomTitle color={colorName.accBK100} style={globalStyle.body2}>
                Já não tem uma conta?
              </CustomTitle>
              <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
                <CustomTitle
                  color={colorName.primary2}
                  style={globalStyle.body2}
                >
                  Cante!
                </CustomTitle>
              </TouchableOpacity>
            </View>
          </Row>
        </Grid>
      </Row>
      {loading ? <LoadingApp /> : null}
    </Grid>
  );
};

export default Login;

const styles = StyleSheet.create({
  logoCenter: {
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginTop: 15,
    alignSelf: "center",
  },
  input: {
    borderRadius: 25,
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
