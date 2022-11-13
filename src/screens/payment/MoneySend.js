import { StyleSheet, Text, View, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { Col, Row, Grid } from "react-native-easy-grid";
import ContentBox from "../../components/auth/ContentBox";
import SimpleInput from "../../components/common/input/SimpleInput";
import { UiButton } from "../../components/common/button/UiButton";
import ButtonTxt from "../../components/common/title/ButtonTxt";
import {
  getOperatorByCountryCodePhone,
  sentPaymentTopUp,
} from "../../services/payment";
import { colorName } from "../../styles/color";
import CustomTitle from "../../components/common/title/CustomTitle";
import { globalStyle } from "../../styles/globalStyle";
import ImageComponent from "../../components/comimage/ImageComponent";
import FitImage from "react-native-fit-image";
const MoneySend = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [operator, setOperator] = useState(null);
  const [amount, setAmount] = useState(0);
  useEffect(() => {
    navigation.setOptions({ title: route.params.countrycode });
    searchOperator();
  }, []);
  async function searchOperator() {
    try {
      const response = await getOperatorByCountryCodePhone(
        route.params.phone,
        route.params.countrycode
      );
      setOperator(response);
      console.log(JSON.stringify(response));
    } catch (error) {
      console.log(JSON.stringify(error));
    }
    // console.log(mobile);
  }
  return (
    <Grid>
      <Row>
        <ContentBox>
          <FitImage
            resizeMode="contain"
            source={{ uri: operator?.logoUrls[0] }}
            // originalWidth={400}
            // originalHeight={400}
            style={{ width: 120, height: 120 }}
          />
          <CustomTitle color={colorName.primary1} style={[globalStyle.body2]}>
            Operator Id: {operator?.operatorId}
          </CustomTitle>
          <CustomTitle color={colorName.primary1} style={[globalStyle.body2]}>
            {operator?.name}
          </CustomTitle>
          {(() => {
            if (operator?.denominationType === "RANGE") {
              return (
                <CustomTitle
                  color={colorName.accY100}
                  style={[globalStyle.body2, { marginTop: 10 }]}
                >
                  {`You send Min: ${operator.minAmount} Max: ${operator.maxAmount}`}
                </CustomTitle>
              );
            } else {
              return (
                <CustomTitle
                  color={colorName.accY100}
                  style={[globalStyle.body2, { marginTop: 10 }]}
                >
                  {operator?.fixedAmounts.map((val) => `[${val}]-`)}
                </CustomTitle>
              );
            }
          })()}

          <SimpleInput
            label="Amount"
            value={amount}
            onChangeText={(value) => {
              setAmount(value);
            }}
          />

          <UiButton
            onPress={() => {
              let sendAmount = {
                operatorId: operator?.operatorId,
                amount,
                recipientPhone: {
                  countryCode: route.params.countrycode,
                  number: route.params.phone,
                },
              };
              sentPaymentTopUp(sendAmount).then((res) => {
                if (res.status === "SUCCESSFUL") {
                  Alert.alert("Mensagem", "Successfully sent payment", [
                    { text: "OK", onPress: () => console.log("OK Pressed") },
                  ]);
                } else {
                  Alert.alert("Mensagem", "Insira uma senha e CPF válidos", [
                    { text: "OK", onPress: () => console.log("OK Pressed") },
                  ]);
                }
                console.log(JSON.stringify(res));
              });
            }}
          >
            <ButtonTxt>Send</ButtonTxt>
          </UiButton>
        </ContentBox>
      </Row>
    </Grid>
  );
};

export default MoneySend;

const styles = StyleSheet.create({
  fitImageWithSize: {
    height: 100,
    width: 30,
  },
});
