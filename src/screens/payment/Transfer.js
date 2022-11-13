import { StyleSheet, Text, View, Alert } from "react-native";
import React, { useEffect, useState, useRef } from "react";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import PhoneInput from "react-native-phone-number-input";
import { Col, Row, Grid } from "react-native-easy-grid";
import { colorName } from "../../styles/color";
import ImageComponent from "../../components/comimage/ImageComponent";
import ContentBox from "../../components/auth/ContentBox";
import CustomTitle from "../../components/common/title/CustomTitle";
import { UiButton } from "../../components/common/button/UiButton";
import ButtonTxt from "../../components/common/title/ButtonTxt";
import { images } from "../../constants/images";
import { globalStyle } from "../../styles/globalStyle";

const Transfer = () => {
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef(null);
  const [code, setCode] = useState("");
  const route = useRoute();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: route.params.screenTitle });
  }, []);
  function mobileValidityCheck() {
    const checkValid = phoneInput.current?.isValidNumber(value);
    setShowMessage(true);
    setValid(checkValid ? checkValid : false);
    if (valid) {
      // console.log("Mobile Validity Checkbox");
      navigation.navigate("MoneySend", {
        phone: value,
        countrycode: code,
      });
      console.log(code);
      console.log(value);
    } else {
      Alert.alert("Mensagem", "Por favor, digite uma senha válida", [
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    }
  }
  return (
    <Grid style={{ backgroundColor: colorName.accW80 }}>
      <Row style={styles.center} size={1}>
        <ImageComponent uri={images.transfer} width={294} height={196} />
      </Row>
      <Row size={2}>
        <Grid>
          <Row size={2}>
            <ContentBox>
              <CustomTitle
                color={colorName.accBK100}
                style={[globalStyle.body2, { marginBottom: 23 }]}
              >
                {`Enter Phone`}
              </CustomTitle>
              {/* <CustomTitle
                color={colorName.accBK100}
                style={[globalStyle.body2, { marginBottom: 23 }]}
              >
                or create an account.
              </CustomTitle> */}
              <PhoneInput
                ref={phoneInput}
                defaultValue={value}
                defaultCode="BR"
                layout="first"
                onChangeCountry={(country) => {
                  console.log("onChangeCountry", country.cca2);
                  setCode(country.cca2);
                }}
                onChangeText={(text) => {
                  setValue(text);
                }}
                onChangeFormattedText={(text) => {
                  setFormattedValue(text);
                }}
                // withDarkTheme
                withShadow
                autoFocus
              />
              {/* onChangeCountry={(country) => {
                  console.log("onChangeCountry", country.cca2);
                  setCode(country.cca2);
                }} */}
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
                onPress={
                  () => {
                    mobileValidityCheck();
                  }

                  // navigation.navigate("OtpVerification")
                }
              >
                <ButtonTxt>Continue</ButtonTxt>
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

export default Transfer;

const styles = StyleSheet.create({
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
});
