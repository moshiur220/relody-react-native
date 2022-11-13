import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Home from "./screens/Home";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic,
} from "@expo-google-fonts/roboto";
import {
  useFonts,
  Lato_100Thin,
  Lato_100Thin_Italic,
  Lato_300Light,
  Lato_300Light_Italic,
  Lato_400Regular,
  Lato_400Regular_Italic,
  Lato_700Bold,
  Lato_700Bold_Italic,
  Lato_900Black,
  Lato_900Black_Italic,
} from "@expo-google-fonts/lato";
// import SignUp from "./screens/SignUp";
import OnBoardingOne from "./screens/OnBoardingOne";
import OnBoardingTow from "./screens/OnBoardingTow";
import OnBoardingThree from "./screens/OnBoardingThree";
import WelcomeLogin from "./screens/WelcomeLogin";
import Login from "./screens/Login";
import Signin from "./screens/Signin";
import OtpVerification from "./screens/OtpVerification";
import SignUp from "./screens/SignUp";
import SignOtpVerification from "./screens/SignOtpVerification";
import Success from "./screens/Success";
import Dashboard from "./screens/Dashboard";
import Wallet from "./screens/Wallet";
import { colorName } from "./styles/color";
import Add from "./screens/others/Add";
import Chat from "./screens/others/Chat";
import Setting from "./screens/others/Setting";
import Transfer from "./screens/payment/Transfer";
import CountrySelect from "./screens/payment/CountrySelect";
import MoneySend from "./screens/payment/MoneySend";
const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();
export default function Main() {
  let [fontsLoaded] = useFonts({
    Lato_100Thin,
    Lato_100Thin_Italic,
    Lato_300Light,
    Lato_300Light_Italic,
    Lato_400Regular,
    Lato_400Regular_Italic,
    Lato_700Bold,
    Lato_700Bold_Italic,
    Lato_900Black,
    Lato_900Black_Italic,
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic,
  });

  if (!fontsLoaded) {
    // return <AppLoading />;
    return (
      <View>
        <Text>AppLoading ....</Text>
      </View>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OnBoardingThree">
        <Stack.Screen
          name="OnBoardingOne"
          component={OnBoardingOne}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OnBoardingTow"
          component={OnBoardingTow}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OnBoardingThree"
          component={OnBoardingThree}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WelcomeLogin"
          component={WelcomeLogin}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen name="Home" component={Home} /> */}
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="OtpVerification" component={OtpVerification} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Transfer" component={Transfer} />
        <Stack.Screen name="CountrySelect" component={CountrySelect} />
        <Stack.Screen name="MoneySend" component={MoneySend} />
        <Stack.Screen name="Success" component={Success} />
        {/* <Stack.Screen name="Home" component={Home} /> */}
        <Stack.Screen
          name="Dashboard"
          component={MyTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignOtpVerification"
          component={SignOtpVerification}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      activeColor={colorName.primary1}
      inactiveColor={colorName.accBK100}
      barStyle={{
        // borderWidth: 0.5,
        // borderBottomWidth: 1,
        backgroundColor: "rgba(255, 255, 255, 1)",
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderColor: "transparent",
        overflow: "hidden",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="wallet-membership"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={Add}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="plus-circle-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="chat-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="store-settings"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// custom material tab bar
