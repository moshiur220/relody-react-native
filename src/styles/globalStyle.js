import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import { colorName } from "./color";
export const globalStyle = StyleSheet.create({
  // This is font color
  clorPrimary: {
    color: "#FF9500",
  },
  colorBlue: {
    color: "#007AFF",
  },
  colorFb: {
    color: "#3B5999",
  },
  colorBlack: {
    color: "#000000",
  },
  colorWhite: {
    color: "#FFFFFF",
  },
  colorPara: {
    color: "#77767E",
  },
  // backgroundColor

  bgBlue: {
    backgroundColor: "#007AFF",
  },
  bgFb: {
    backgroundColor: "#3B5999",
  },
  colorBlack: {
    color: "#000000",
  },
  bgWhite: {
    backgroundColor: "#FFFFFF",
  },
  bgPara: {
    backgroundColor: "#77767E",
  },
  // BorderColor
  borderPrimary: {
    borderColor: "#FF9500",
  },
  borderBlue: {
    borderColor: "#007AFF",
  },
  borderFb: {
    borderColor: "#3B5999",
  },
  borderBlack: {
    borderColor: "#000000",
  },
  borderWhite: {
    borderColor: "#FFFFFF",
  },
  borderPara: {
    borderColor: "#77767E",
  },

  bgPrimary: {
    backgroundColor: colorName.accW80,
  },

  // font and family

  h: {
    fontFamily: "Roboto_700Bold",
    fontWeight: "700",
    fontStyle: "normal",
    fontSize: 30,
    lineHeight: 35,
  },
  hSub: {
    fontFamily: "Lato_400Regular",
    fontWeight: "400",
    fontStyle: "normal",
    fontSize: 18,
    lineHeight: 21,
  },
  btnTxt: {
    fontFamily: "Roboto_700Bold",
    fontWeight: "700",
    fontStyle: "normal",
    fontSize: 18,
    lineHeight: 21,
    color: colorName.accW100,
    textTransform: "capitalize",
  },
  title: {
    fontFamily: "Roboto_700Bold",
    fontWeight: "700",
    fontStyle: "normal",
    fontSize: 22,
    lineHeight: 26,
  },
  subTitle: {
    fontFamily: "Roboto_700Bold",
    fontWeight: "700",
    fontStyle: "normal",
    fontSize: 12,
    lineHeight: 14,
  },
  body1: {
    fontFamily: "Roboto_700Bold",
    fontWeight: "700",
    fontStyle: "normal",
    fontSize: 12,
    lineHeight: 14,
  },
  body2: {
    fontFamily: "Lato_400Regular",
    fontWeight: "400",
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 19,
  },
  body3: {
    fontFamily: "Roboto_700Bold",
    fontWeight: "700",
    fontStyle: "normal",
    fontSize: 14,
    lineHeight: 16,
  },
  body4: {
    fontFamily: "Lato_400Regular",
    fontWeight: "400",
    fontStyle: "normal",
    fontSize: 14,
    lineHeight: 16,
  },
  caption1: {
    fontFamily: "Roboto_700Bold",
    fontWeight: "700",
    fontStyle: "normal",
    fontSize: 12,
    lineHeight: 14,
  },
  caption12: {
    fontFamily: "Lato_400Regular",
    fontWeight: "400",
    fontStyle: "normal",
    fontSize: 12,
    lineHeight: 14,
  },
  robotoMedium: {
    fontFamily: "Roboto_500Medium",
    fontWeight: "500",
    fontStyle: "normal",
  },
  robotoLight: {
    fontFamily: "Roboto_300Light",
    fontWeight: "300",
    fontStyle: "normal",
  },
  mainContainer: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#F7F7FA",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
    width: "100%",
  },
  rowContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  statusBar: {
    marginTop: Constants.statusBarHeight,
  },
  btnBorderRadius: {
    borderRadius: 8,
  },
  productBorderRadius: {
    borderRadius: 4,
  },
  // Flex Box
  flexD: {
    display: "flex",
  },
  flexRow: {
    flexDirection: "row",
  },
  flexColumn: {
    flexDirection: "column",
  },
  contenCenter: {
    justifyContent: "center",
    alignItems: "center",
  },
  //justifyContent
  flexJcCenter: {
    justifyContent: "center",
  },
  flexJcStart: {
    justifyContent: "flex-start",
  },
  flexJcSpaceAround: {
    justifyContent: "space-around",
  },
  flexJcSpaceBetween: {
    justifyContent: "space-between",
  },
  flexJcSpaceEvenly: {
    justifyContent: "space-evenly",
  },
  flexJcEnd: {
    justifyContent: "flex-end",
  },
  flexAiStart: {
    alignItems: "flex-start",
  },
  flexAiCenter: {
    alignItems: "center",
  },
  flexAiEnd: {
    alignItems: "flex-end",
  },
  flexAiStretch: {
    alignItems: "stretch",
  },
  flexAiBaseline: {
    alignItems: "baseline",
  },

  textCenter: {
    textAlign: "center",
  },

  // Shadow classes

  shadowBtn: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },

  shadowBox: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  shadowRound: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 50,

    elevation: 1,
  },
});

// Parametter with style sheet
export class StyleCustom {
  static getSheet(value = 5) {
    return StyleSheet.create({
      // padding aria
      padding: {
        padding: value,
      },
      pT: {
        paddingTop: value,
      },
      pB: {
        paddingBottom: value,
      },
      pL: {
        paddingLeft: value,
      },
      pR: {
        paddingRight: value,
      },
      pE: {
        paddingEnd: value,
      },
      pH: {
        paddingHorizontal: value,
      },
      pS: {
        paddingStart: value,
      },
      pV: {
        paddingVertical: value,
      },
      // margin aria
      margin: {
        margin: value,
      },
      mB: {
        marginBottom: value,
      },
      mE: {
        marginEnd: value,
      },
      mH: {
        marginHorizontal: value,
      },
      mL: {
        marginLeft: value,
      },
      mR: {
        marginRight: value,
      },
      mS: {
        marginStart: value,
      },
      mT: {
        marginTop: value,
      },
      mV: {
        marginVertical: value,
      },
      // border aria
      bWidth: {
        borderWidth: value,
      },
      bRadius: {
        borderRadius: value,
      },
      w100: {
        width: `${value}%`,
      },
      w: {
        width: value,
      },
      h: {
        height: value,
      },
    });
  }
}
