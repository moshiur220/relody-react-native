import { StyleSheet, Text, View, Alert } from "react-native";
import React, { useEffect, useState } from "react";
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
import { getAllCountry } from "../../services/payment";
import SelectList from "react-native-dropdown-select-list";
const CountrySelect = () => {
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [selected, setSelected] = React.useState("BRL");
  const [data, setData] = React.useState([]);
  const route = useRoute();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: route.params.screenTitle });
    getAllCountry().then((response) => {
      let newArray = response.map((item) => {
        return { key: item.isoName, value: item.name };
      });
      //Set Data Variable
      setData(newArray);
    });
  }, []);
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
                {`${route.params.screenTitle}  your country`}
              </CustomTitle>

              {/* <CustomTitle
                color={colorName.accBK100}
                style={[globalStyle.body2, { marginBottom: 23 }]}
              >
                or create an account.
              </CustomTitle> */}
              <SelectList
                setSelected={setSelected}
                data={data}
                search={true}
                placeholder="Search country"
              />

              {selected != "" ? (
                <View style={{ flex: 1, alignItems: "center", marginTop: 50 }}>
                  <Text style={{ fontSize: 12 }}>Selected Value</Text>
                  <Text style={{ color: "gray" }}>{selected}</Text>
                </View>
              ) : null}
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
                    console.log("Button pressed");
                    navigation.navigate("MoneySend", {
                      countrycode: selected,
                    });
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

export default CountrySelect;

const styles = StyleSheet.create({
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
});
