import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/FontAwesome5";
import CustomTitle from "../components/common/title/CustomTitle";
import { globalStyle } from "../styles/globalStyle";
import { colorName } from "../styles/color";
import ImageComponent from "../components/comimage/ImageComponent";
import { images } from "../constants/images";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useEffect, useState } from "react";
import { getUser } from "../helpers/userData";
import greetingTime from "greeting-time";
import { accountBalance, paymentToken } from "../services/payment";
import { storePaymentToken } from "../helpers/paymentToken";

export default function Home({ navigation }) {
  const [user, setUser] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  function getLocalUser() {
    getUser().then((userData) => {
      setUser(userData.user);
      // console.log(userData.user);
    });
  }
  function setPaymentToken() {
    paymentToken().then((res) => {
      // console.log("Token" + JSON.stringify(res));
      storePaymentToken(res.access_token);
    });
  }
  useEffect(() => {
    getLocalUser();
    // setPaymentToken();
    accountBalance().then((res) => {
      console.log(res);
      setUserBalance(res);
    });
  }, []);
  return (
    <SafeAreaView style={[styles.container, globalStyle.statusBar]}>
      <View style={styles.mainContainer}>
        {/* Header aria  */}
        <View style={styles.header}>
          <MaterialCommunityIcons name="menu" size={30} />
          <Icon name="search" size={30} />
        </View>
        {/* Header aria end */}
        <ScrollView>
          {/* content aria  */}
          <View style={styles.userContent}>
            <CustomTitle
              color={colorName.primary1}
              style={[globalStyle.body2, { marginBottom: 10 }]}
            >
              Hi {`${user?.name} ${user?.lastName}`}
            </CustomTitle>
            <CustomTitle color={colorName.accBK100} style={globalStyle.title}>
              {greetingTime(new Date())}
            </CustomTitle>
          </View>
          {/* content aria end */}
          {/* Card information start */}
          <View style={styles.cardContainer}>
            <View style={styles.cardHeader}>
              <View style={styles.cardTopContent}>
                <ImageComponent uri={images.card} width={70} height={24} />
                <View>
                  <CustomTitle
                    color={colorName.accW80}
                    style={globalStyle.title}
                  >
                    {`${user?.name} ${user?.lastName}`.toUpperCase()}
                  </CustomTitle>
                  <CustomTitle
                    color={colorName.accW80}
                    style={globalStyle.body2}
                  >
                    CARD HOLDER NAME
                  </CustomTitle>
                </View>
              </View>
              <View style={styles.cardAccount}>
                <CustomTitle color={colorName.accW80} style={globalStyle.body2}>
                  CARD NUMBER
                </CustomTitle>
                <CustomTitle color={colorName.accW80} style={globalStyle.title}>
                  **** **** **** 1990
                </CustomTitle>
              </View>
            </View>
            <View style={styles.cardFooter}>
              <CustomTitle color={colorName.primary1} style={globalStyle.h}>
                {`${userBalance?.currencyCode} ${userBalance?.balance}`}
              </CustomTitle>
              <ImageComponent uri={images.cardIcon} width={43} height={26} />
            </View>
          </View>
          {/* Card information end */}
          {/* Recent activites start */}
          <View style={styles.recentActivity}>
            <CustomTitle color={colorName.accBK100} style={globalStyle.title}>
              Recent Activites
            </CustomTitle>
            <View style={styles.recentActivityContent}>
              {/* account  */}

              <View style={styles.account}>
                <ImageComponent
                  uri={images.account}
                  style={styles.accountImg}
                />
              </View>

              <View style={styles.account}>
                <ImageComponent
                  uri={images.account}
                  width={36}
                  height={27}
                  style={styles.accountImg}
                />
              </View>
              <View style={styles.account}>
                <ImageComponent
                  uri={images.account}
                  width={36}
                  height={27}
                  style={styles.accountImg}
                />
              </View>
              <View style={styles.account}>
                <ImageComponent
                  uri={images.account}
                  width={36}
                  height={27}
                  style={styles.accountImg}
                />
              </View>
            </View>
            {/* account content */}
            <View style={styles.recentActivityContent}>
              <CustomTitle
                color={colorName.accBK100}
                style={[globalStyle.body2, styles.recentActiveText]}
              >
                Account
              </CustomTitle>
              <CustomTitle
                color={colorName.accBK100}
                style={[globalStyle.body2, styles.recentActiveText]}
              >
                Send Money
              </CustomTitle>
              <CustomTitle
                color={colorName.accBK100}
                style={[globalStyle.body2, styles.recentActiveText]}
              >
                Payment
              </CustomTitle>
              <CustomTitle
                color={colorName.accBK100}
                style={[globalStyle.body2, styles.recentActiveText]}
              >
                Recharge
              </CustomTitle>
            </View>
          </View>

          {/* Recent activites end */}
          {/* Account info start */}
          <View style={styles.accountInfo}>
            {/* account info box */}
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Transfer", { screenTitle: "Recharge" });
              }}
            >
              <View style={styles.accountInfoBox}>
                <ImageComponent
                  uri={images.branchPay}
                  width={70}
                  height={70}
                  // style={{ width: 100, height: 100 }}
                />
                <CustomTitle
                  color={colorName.accBK100}
                  style={[globalStyle.body1, styles.accountTxt]}
                >
                  Top Up
                </CustomTitle>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Transfer", {
                  screenTitle: "Top Up",
                });
              }}
            >
              <View style={styles.accountInfoBox}>
                <ImageComponent
                  uri={images.moneyTransfer}
                  width={70}
                  height={70}
                />
                <CustomTitle
                  color={colorName.accBK100}
                  style={[globalStyle.body1, styles.accountTxt]}
                >
                  Others Country
                </CustomTitle>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Transfer", {
                  screenTitle: "Manage Friend",
                });
              }}
            >
              <View style={styles.accountInfoBox}>
                <ImageComponent
                  uri={images.manageFriend}
                  width={70}
                  height={70}
                />
                <CustomTitle
                  color={colorName.accBK100}
                  style={[globalStyle.body1, styles.accountTxt]}
                >
                  Manage Friend
                </CustomTitle>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Transfer", {
                  screenTitle: "Bill Pay",
                });
              }}
            >
              <View style={styles.accountInfoBox}>
                <ImageComponent uri={images.billPay} width={70} height={70} />
                <CustomTitle
                  color={colorName.accBK100}
                  style={[globalStyle.body1, styles.accountTxt]}
                >
                  Bill Pay
                </CustomTitle>
              </View>
            </TouchableOpacity>

            <View style={styles.accountInfoBox}>
              <ImageComponent uri={images.allBudget} width={70} height={70} />
              <CustomTitle
                color={colorName.accBK100}
                style={[globalStyle.body1, styles.accountTxt]}
              >
                Manage Friend
              </CustomTitle>
            </View>
            <View style={styles.accountInfoBox}>
              <ImageComponent uri={images.branchPay} width={70} height={70} />
              <CustomTitle
                color={colorName.accBK100}
                style={[globalStyle.body1, styles.accountTxt]}
              >
                Manage Friend
              </CustomTitle>
            </View>
          </View>
          {/* Account info end */}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorName.accW80,
  },
  mainContainer: {
    flex: 1,
    padding: 15,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  userContent: {
    marginTop: 20,
  },
  cardContainer: {
    backgroundColor: colorName.accW100,
    marginTop: 10,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  cardHeader: {
    backgroundColor: colorName.primary1,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
  cardTopContent: {
    // padding: 15,
    paddingHorizontal: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardAccount: {
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
  cardFooter: {
    padding: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  recentActivity: {
    marginTop: 15,
  },
  recentActivityContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
  },
  account: {
    backgroundColor: colorName.primary1,
    padding: 20,
    borderRadius: 50,
  },
  accountImg: {
    width: hp("4.1"),
    height: wp("8"),
  },
  recentActiveText: {
    fontSize: hp("2.3"),
  },
  accountInfo: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
  },
  accountInfoBox: {
    width: hp("20"),
    height: wp("35"),
    backgroundColor: colorName.accW100,
    borderRadius: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  accountTxt: {
    marginTop: 10,
  },
});
