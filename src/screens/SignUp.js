import { StyleSheet, Text, View, ScrollView, Alert } from "react-native";
import React, { useState } from "react";
import { Col, Row, Grid } from "react-native-easy-grid";
import { globalStyle } from "../styles/globalStyle";
import ContentBox from "../components/auth/ContentBox";
import { images } from "../constants/images";
import ImageComponent from "../components/comimage/ImageComponent";
import { Checkbox } from "react-native-paper";
import { colorName } from "../styles/color";
import SimpleInput from "../components/common/input/SimpleInput";
import CustomTitle from "../components/common/title/CustomTitle";
import { UiButton } from "../components/common/button/UiButton";
import ButtonTxt from "../components/common/title/ButtonTxt";
import * as yup from "yup";
import { Formik } from "formik";
import { createUser } from "../services/auth";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import LoadingApp from "../components/common/loading/LoadingApp";
const SignUp = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [loading, setLoading] = React.useState(false);
  const [checked, setChecked] = React.useState(true);

  return (
    <Grid style={globalStyle.bgPrimary}>
      <ScrollView>
        <Formik
          initialValues={{
            // businessUnitId: "61b86ffc8fad53c7b45dc7c9",
            // partnerId: "",
            taxNumber: "",
            name: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          onSubmit={async (values) => {
            setLoading(true);
            let newValues = {
              ...values,
              phone: route.params.phoneNumber,
              businessUnitId: "61b86ffc8fad53c7b45dc7c9",
              partnerId: 606,
            };
            try {
              const response = await createUser(newValues);
              if (response.success) {
                console.log(JSON.stringify(response));
                setLoading(false);
                navigation.navigate("Login");
              }

              // console.log(JSON.stringify(response));
            } catch (error) {
              console.log(JSON.stringify(error));
              // alert (error.message);
              setLoading(false);
              Alert.alert("Mensagem", "Some things went wrong!", [
                { text: "OK", onPress: () => console.log("OK Pressed") },
              ]);
            }
          }}
          validationSchema={yup.object().shape({
            // businessUnitId: yup
            //   .string()
            //   .required("Please, provide your Business Unit Id!"),
            // partnerId: yup
            //   .number()
            //   .required("Please, provide your Partner Id!"),
            taxNumber: yup
              .string()
              .required("Please, provide your Tax Number!"),
            name: yup.string().required("Please, provide your first name!"),
            lastName: yup.string().required("Please, provide your Last name!"),
            email: yup.string().email().required("Please, provide your Email!"),
            password: yup
              .string()
              .matches(/\w*[a-z]\w*/, "Password must have a small letter")
              .matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
              .matches(/\d/, "Password must have a number")
              .matches(
                /[!@#$%^&*()\-_"=+{}; :,<.>]/,
                "Password must have a special character"
              )
              .min(
                8,
                ({ min }) => `Password must be at least ${min} characters`
              )
              .required("Password is required"),
            confirmPassword: yup
              .string()
              .oneOf([yup.ref("password")], "Passwords do not match")
              .required("Confirm password is required"),
          })}
        >
          {({
            values,
            handleChange,
            errors,
            setFieldTouched,
            touched,
            isValid,
            handleSubmit,
          }) => (
            <Row>
              <ContentBox>
                <View style={styles.capImage}>
                  <ImageComponent uri={images.camera} width={99} height={99} />
                </View>
                {/* First name start */}
                <SimpleInput
                  error={touched.name && errors.name ? true : false}
                  label="First Name"
                  value={values.name}
                  onChangeText={handleChange("name")}
                />
                {touched.name && errors.name && (
                  <CustomTitle
                    color={colorName.accR100}
                    style={[globalStyle.body1, styles.errorText, ,]}
                  >
                    {errors.name}
                  </CustomTitle>
                )}
                {/* first name end */}
                {/* last name start */}
                <SimpleInput
                  error={touched.lastName && errors.lastName ? true : false}
                  label="Last Name"
                  value={values.lastName}
                  onChangeText={handleChange("lastName")}
                />
                {touched.lastName && errors.lastName && (
                  <CustomTitle
                    color={colorName.accR100}
                    style={[globalStyle.body1, styles.errorText, ,]}
                  >
                    {errors.lastName}
                  </CustomTitle>
                )}
                {/* last name end */}
                {/* email name start */}
                <SimpleInput
                  error={touched.email && errors.email ? true : false}
                  label="Email"
                  value={values.email}
                  onChangeText={handleChange("email")}
                />
                {touched.email && errors.email && (
                  <CustomTitle
                    color={colorName.accR100}
                    style={[globalStyle.body1, styles.errorText, ,]}
                  >
                    {errors.email}
                  </CustomTitle>
                )}
                {/* last name end */}
                {/* business start */}
                {/* ************************* */}
                {/* <SimpleInput
                  error={
                    touched.businessUnitId && errors.businessUnitId
                      ? true
                      : false
                  }
                  label="Business Unit Id"
                  value={values.businessUnitId}
                  onChangeText={handleChange("businessUnitId")}
                />
                {touched.businessUnitId && errors.businessUnitId && (
                  <CustomTitle
                    color={colorName.accR100}
                    style={[globalStyle.body1, styles.errorText, ,]}
                  >
                    {errors.businessUnitId}
                  </CustomTitle>
                )} */}
                {/* ************************* */}
                {/* business end */}
                {/* Parner Id start */}
                {/* ************************* */}
                {/* <SimpleInput
                  error={touched.partnerId && errors.partnerId ? true : false}
                  label="Partner Id Number"
                  value={values.partnerId}
                  onChangeText={handleChange("partnerId")}
                />
                {touched.partnerId && errors.partnerId && (
                  <CustomTitle
                    color={colorName.accR100}
                    style={[globalStyle.body1, styles.errorText, ,]}
                  >
                    {errors.partnerId}
                  </CustomTitle>
                )} */}
                {/* ************************* */}
                {/* Parner Id start end*/}
                {/* taxt is start */}
                <SimpleInput
                  error={touched.taxNumber && errors.taxNumber ? true : false}
                  label="Tax Number"
                  value={values.taxNumber}
                  onChangeText={handleChange("taxNumber")}
                />
                {touched.taxNumber && errors.taxNumber && (
                  <CustomTitle
                    color={colorName.accR100}
                    style={[globalStyle.body1, styles.errorText, ,]}
                  >
                    {errors.taxNumber}
                  </CustomTitle>
                )}
                {/* taxt is end */}
                <SimpleInput
                  error={touched.password && errors.password ? true : false}
                  label="Password"
                  secureTextEntry
                  value={values.password}
                  onChangeText={handleChange("password")}
                />
                {touched.name && errors.password && (
                  <CustomTitle
                    color={colorName.accR100}
                    style={[globalStyle.body1, styles.errorText, ,]}
                  >
                    {errors.password}
                  </CustomTitle>
                )}
                <SimpleInput
                  error={
                    touched.confirmPassword && errors.confirmPassword
                      ? true
                      : false
                  }
                  label="Confirm Password"
                  secureTextEntry
                  value={values.confirmPassword}
                  onChangeText={handleChange("confirmPassword")}
                />
                {touched.confirmPassword && errors.confirmPassword && (
                  <CustomTitle
                    color={colorName.accR100}
                    style={[globalStyle.body1, styles.errorText, ,]}
                  >
                    {errors.confirmPassword}
                  </CustomTitle>
                )}
                {/* end from here  */}
                <View style={styles.agree}>
                  <Checkbox
                    color={colorName.primary1}
                    status={checked ? "checked" : "unchecked"}
                    onPress={() => {
                      setChecked(!checked);
                    }}
                  />

                  <CustomTitle
                    color={colorName.primary1}
                    style={globalStyle.body2}
                  >
                    By creating an account you agree to
                  </CustomTitle>
                </View>
                <CustomTitle
                  color={colorName.primary1}
                  style={globalStyle.body2}
                >
                  our Terms of Service and Privacy Policy
                </CustomTitle>

                <UiButton
                  style={styles.button}
                  // onPress={() => navigation.navigate("Success")}
                  // disabled={!isValid}
                  onPress={handleSubmit}
                >
                  <ButtonTxt>Sign up</ButtonTxt>
                </UiButton>

                <View style={styles.haveAccount}>
                  <CustomTitle
                    color={colorName.accBK100}
                    style={globalStyle.body2}
                  >
                    Already have an account?
                  </CustomTitle>
                  <CustomTitle
                    color={colorName.primary2}
                    style={globalStyle.body2}
                  >
                    Sign in !
                  </CustomTitle>
                </View>
              </ContentBox>
            </Row>
          )}
        </Formik>
      </ScrollView>
      {loading ? <LoadingApp /> : null}
    </Grid>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  boxPadding: {
    marginVertical: 20,
  },
  agree: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 14,
  },
  button: { marginTop: 14 },
  haveAccount: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 14,
  },
  capImage: {
    marginBottom: 30,
  },
  errorText: { alignSelf: "flex-start", marginBottom: 8 },
});
