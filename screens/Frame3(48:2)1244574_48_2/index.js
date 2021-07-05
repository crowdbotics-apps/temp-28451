import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@modules"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_48_4}>
        <View style={styles.View_48_5} />
        <View source={{ uri: "null" }} style={styles.View_48_6} />
        <View style={styles.View_48_55}>
          <Text style={styles.Text_48_55}>Check out</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/47c8/84b4/6397e4292575c877041ae781b239081f"
          }}
          style={styles.ImageBackground_138_8}
        />
      </View>
      <View style={styles.View_48_7}>
        <View style={styles.View_48_8}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/71de/b363/e38f7ccb00bd0614a5b5e51813fbd79c"
            }}
            style={styles.ImageBackground_48_9}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ff/0c22/0b97200050a886088dbee23e6cec4be9"
            }}
            style={styles.ImageBackground_48_13}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
            }}
            style={styles.ImageBackground_48_17}
          />
        </View>
        <View style={styles.View_48_24}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94cc/b245/9af535a5ccb41c968f7147deb78a7ba3"
            }}
            style={styles.ImageBackground_48_25}
          />
        </View>
      </View>
      <View style={styles.View_48_57}>
        <View style={styles.View_48_58}>
          <View style={styles.View_48_59} />
          <View style={styles.View_48_60}>
            <Text style={styles.Text_48_60}>Payment</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_48_61}>
        <View style={styles.View_48_62} />
        <View style={styles.View_48_63}>
          <Text style={styles.Text_48_63}>Order Details</Text>
        </View>
      </View>
      <View style={styles.View_177_69}>
        <View style={styles.View_177_70}>
          <Text style={styles.Text_177_70}>Shipping address</Text>
        </View>
        <View style={styles.View_177_71}>
          <Text style={styles.Text_177_71}>
            202 Wayne St, Durand, MI, 48429
          </Text>
        </View>
        <View style={styles.View_177_72}>
          <Text style={styles.Text_177_72}>Change</Text>
        </View>
        <View style={styles.View_177_121}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3cc8/c206/8b5e77a20c9745ff1beb3666ceba50ac"
            }}
            style={styles.ImageBackground_177_122}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0f61/9c0b/45f61209e82f072eac19a5e230be60ee"
          }}
          style={styles.ImageBackground_177_74}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0f61/9c0b/45f61209e82f072eac19a5e230be60ee"
          }}
          style={styles.ImageBackground_177_75}
        />
      </View>
      <View style={styles.View_177_76}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0f61/9c0b/45f61209e82f072eac19a5e230be60ee"
          }}
          style={styles.ImageBackground_177_77}
        />
        <View style={styles.View_177_111}>
          <View style={styles.View_177_112}>
            <Text style={styles.Text_177_112}>Metal Earrings</Text>
          </View>
          <View style={styles.View_177_113}>
            <Text style={styles.Text_177_113}>$12</Text>
          </View>
          <View style={styles.View_177_114}>
            <Text style={styles.Text_177_114}>・</Text>
          </View>
          <View style={styles.View_177_115}>
            <Text style={styles.Text_177_115}>In stock</Text>
          </View>
          <View style={styles.View_177_116}>
            <Text style={styles.Text_177_116}>Special Design</Text>
          </View>
          <View style={styles.View_177_117}>
            <View style={styles.View_177_118} />
            <View style={styles.View_177_119} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d52/fb5f/dadfa480ad4b29036edea931a30a8c89"
              }}
              style={styles.ImageBackground_177_120}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35b9/3ad4/4d218457d412b95ae05a20160ea300a2"
            }}
            style={styles.ImageBackground_177_126}
          />
        </View>
        <View style={styles.View_177_79}>
          <View style={styles.View_177_80}>
            <Text style={styles.Text_177_80}>Scarf</Text>
          </View>
          <View style={styles.View_177_81}>
            <Text style={styles.Text_177_81}>$16</Text>
          </View>
          <View style={styles.View_177_82}>
            <Text style={styles.Text_177_82}>・</Text>
          </View>
          <View style={styles.View_177_83}>
            <Text style={styles.Text_177_83}>In stock</Text>
          </View>
          <View style={styles.View_177_84}>
            <Text style={styles.Text_177_84}>Special Design</Text>
          </View>
          <View style={styles.View_177_85}>
            <View style={styles.View_177_86} />
            <View style={styles.View_177_87} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/92ea/17a8/89f617718d2481db13f009a2287302d1"
              }}
              style={styles.ImageBackground_177_88}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d7f0/2b83/5380510437983c3e0ccaf35de84137b4"
          }}
          style={styles.ImageBackground_177_127}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_48_4: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("14.617486338797814%"),
    minHeight: hp("14.617486338797814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(115, 139, 243, 1)"
  },
  View_48_5: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("14.617486338797814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(115, 139, 243, 1)"
  },
  View_48_6: {
    flexGrow: 1,
    width: wp("1.4492757161458334%"),
    height: hp("1.8271857923497268%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.072465006510416%"),
    top: hp("9.440458537450905%")
  },
  View_48_55: {
    flexGrow: 1,
    width: wp("43.46666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("6.851946721311474%"),
    justifyContent: "flex-start"
  },
  Text_48_55: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_138_8: {
    flexGrow: 1,
    width: wp("1.4531402587890625%"),
    height: hp("1.8081529544350878%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.085986328125%"),
    top: hp("9.342122729358778%")
  },
  View_48_7: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_48_8: {
    width: wp("17.7763671875%"),
    minWidth: wp("17.7763671875%"),
    height: hp("2.8233038271711175%"),
    minHeight: hp("2.8233038271711175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.31110026041667%"),
    top: hp("1.0929128511355874%")
  },
  ImageBackground_48_9: {
    width: wp("6.487476603190104%"),
    minWidth: wp("6.487476603190104%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.288899739583343%"),
    top: hp("1.2750344198258197%")
  },
  ImageBackground_48_13: {
    width: wp("4.072633616129558%"),
    minWidth: wp("4.072633616129558%"),
    height: hp("1.49802888026003%"),
    minHeight: hp("1.49802888026003%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.873893229166669%"),
    top: hp("1.2746675418374318%")
  },
  ImageBackground_48_17: {
    width: wp("4.533333333333333%"),
    minWidth: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    minHeight: hp("1.4571949432456428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.3205606429303276%")
  },
  View_48_24: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.600008138020833%"),
    top: hp("1.639344262295082%")
  },
  ImageBackground_48_25: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_48_57: {
    width: wp("100%"),
    height: hp("12.021857923497267%"),
    top: hp("98.90710382513662%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_48_58: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_48_59: {
    width: wp("100%"),
    height: hp("12.021857923497267%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(115, 139, 243, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_48_60: {
    width: wp("32.800000000000004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.6%"),
    top: hp("4.098360655737693%"),
    justifyContent: "flex-start"
  },
  Text_48_60: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_48_61: {
    width: wp("100%"),
    height: hp("11.202185792349727%"),
    top: hp("87.70491803278688%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_48_62: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(134, 136, 188, 1)",
    borderColor: "rgba(115, 139, 243, 1)",
    borderWidth: 3
  },
  View_48_63: {
    flexGrow: 1,
    width: wp("44.800000000000004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.73333333333333%"),
    top: hp("3.6885245901639365%"),
    justifyContent: "flex-start"
  },
  Text_48_63: {
    color: "rgba(115, 139, 243, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_177_69: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("25.40983606557377%"),
    minHeight: hp("25.40983606557377%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("48.70218579234973%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_177_70: {
    width: wp("43.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("5.532786885245898%"),
    justifyContent: "flex-start"
  },
  Text_177_70: {
    color: "rgba(66, 67, 71, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.550000011920929,
    textTransform: "none"
  },
  View_177_71: {
    width: wp("28.000000000000004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("10.86065573770491%"),
    justifyContent: "flex-start"
  },
  Text_177_71: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_177_72: {
    width: wp("12.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("17.964480874316926%"),
    justifyContent: "flex-start"
  },
  Text_177_72: {
    color: "rgba(115, 139, 243, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.1555556058883667,
    textTransform: "none"
  },
  View_177_121: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("12.22677595628415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_177_122: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_177_74: {
    width: wp("100%"),
    height: hp("0.1366120218579235%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_177_75: {
    width: wp("100%"),
    height: hp("0.1366120218579235%"),
    top: hp("25.27322404371585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_177_76: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("29.508196721311474%"),
    minHeight: hp("29.508196721311474%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17.349726775956285%")
  },
  ImageBackground_177_77: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_177_111: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("9.972677595628415%"),
    minHeight: hp("9.972677595628415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("5.532786885245901%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_177_112: {
    width: wp("27.200000000000003%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054627%"),
    justifyContent: "flex-start"
  },
  Text_177_112: {
    color: "rgba(66, 67, 71, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.17777779698371887,
    textTransform: "none"
  },
  View_177_113: {
    width: wp("6.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.967213114754102%"),
    justifyContent: "flex-start"
  },
  Text_177_113: {
    color: "rgba(66, 67, 71, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.1555556058883667,
    textTransform: "none"
  },
  View_177_114: {
    width: wp("3.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.800000000000001%"),
    top: hp("6.557377049180332%"),
    justifyContent: "flex-start"
  },
  Text_177_114: {
    color: "rgba(216, 216, 216, 1)",
    fontSize: 11,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_177_115: {
    width: wp("13.066666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.066666666666666%"),
    top: hp("6.967213114754102%"),
    justifyContent: "flex-start"
  },
  Text_177_115: {
    color: "rgba(115, 139, 243, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.1555556058883667,
    textTransform: "none"
  },
  View_177_116: {
    width: wp("22.933333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.9617486338797825%"),
    justifyContent: "flex-start"
  },
  Text_177_116: {
    color: "rgba(187, 187, 187, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_177_117: {
    width: wp("21.333333333333336%"),
    minWidth: wp("21.333333333333336%"),
    height: hp("9.972677595628415%"),
    minHeight: hp("9.972677595628415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.86666666666666%"),
    top: hp("0%")
  },
  View_177_118: {
    width: wp("21.333333333333336%"),
    height: hp("9.972677595628415%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_177_119: {
    width: wp("21.333333333333336%"),
    height: hp("9.972677595628415%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_177_120: {
    width: wp("21.333333333333336%"),
    height: hp("9.972677595628415%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_177_126: {
    width: wp("21.333333333333336%"),
    minWidth: wp("21.333333333333336%"),
    height: hp("12.704918032786885%"),
    minHeight: hp("12.704918032786885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.86666666666666%"),
    top: hp("-1.4344262295081975%"),
    resizeMode: "cover"
  },
  View_177_79: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("9.972677595628415%"),
    minHeight: hp("9.972677595628415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("18.784153005464482%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_177_80: {
    width: wp("10.133333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054627%"),
    justifyContent: "flex-start"
  },
  Text_177_80: {
    color: "rgba(66, 67, 71, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.17777779698371887,
    textTransform: "none"
  },
  View_177_81: {
    width: wp("6.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.967213114754095%"),
    justifyContent: "flex-start"
  },
  Text_177_81: {
    color: "rgba(66, 67, 71, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.1555556058883667,
    textTransform: "none"
  },
  View_177_82: {
    width: wp("3.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("6.5573770491803245%"),
    justifyContent: "flex-start"
  },
  Text_177_82: {
    color: "rgba(216, 216, 216, 1)",
    fontSize: 11,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_177_83: {
    width: wp("13.066666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.666666666666666%"),
    top: hp("6.967213114754095%"),
    justifyContent: "flex-start"
  },
  Text_177_83: {
    color: "rgba(115, 139, 243, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.1555556058883667,
    textTransform: "none"
  },
  View_177_84: {
    width: wp("22.933333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.961748633879779%"),
    justifyContent: "flex-start"
  },
  Text_177_84: {
    color: "rgba(187, 187, 187, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_177_85: {
    width: wp("21.333333333333336%"),
    minWidth: wp("21.333333333333336%"),
    height: hp("9.972677595628415%"),
    minHeight: hp("9.972677595628415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.86666666666666%"),
    top: hp("0%")
  },
  View_177_86: {
    width: wp("21.333333333333336%"),
    height: hp("9.972677595628415%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_177_87: {
    width: wp("21.333333333333336%"),
    height: hp("9.972677595628415%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_177_88: {
    width: wp("21.333333333333336%"),
    height: hp("9.972677595628415%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_177_127: {
    width: wp("21.6%"),
    minWidth: wp("21.6%"),
    height: hp("10.792349726775956%"),
    minHeight: hp("10.792349726775956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.73333333333333%"),
    top: hp("18.715846994535518%"),
    resizeMode: "cover",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
