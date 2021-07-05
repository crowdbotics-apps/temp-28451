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
      <View style={styles.View_7_2}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/32cc/84b6/9f7e0b85f636edda1fc8384f1f7e00d1"
          }}
          style={styles.ImageBackground_29_1}
        />
        <View style={styles.View_34_17} />
        <View source={{ uri: "null" }} style={styles.View_41_22} />
        <View source={{ uri: "null" }} style={styles.View_41_23} />
        <View source={{ uri: "null" }} style={styles.View_46_2} />
        <View style={styles.View_113_30} />
        <View style={styles.View_121_16}>
          <Text style={styles.Text_121_16}>WhatsApp</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/51f4/94c6/d480568e78c35afda109e8163d2ecd71"
          }}
          style={styles.ImageBackground_132_4}
        />
        <View style={styles.View_22_78}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/77ff/ad03/20b2dbadc946e676d3b19c7dcbeac2bd"
            }}
            style={styles.ImageBackground_22_79}
          />
          <View style={styles.View_22_101}>
            <View style={styles.View_22_109}>
              <View style={styles.View_22_110} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c05e/3310/5fa19be2dd61005af7ab5013fddc1070"
                }}
                style={styles.ImageBackground_22_116}
              />
              <View style={styles.View_41_14}>
                <Text style={styles.Text_41_14}> EXPLORE</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_22_121}>
            <View style={styles.View_22_122} />
            <View style={styles.View_41_16}>
              <Text style={styles.Text_41_16}>SHOP</Text>
            </View>
            <View style={styles.View_144_1} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c71/1bbe/48cba4b9223b7d65d92d006c36be5480"
              }}
              style={styles.ImageBackground_144_2}
            />
          </View>
          <View style={styles.View_22_133}>
            <View style={styles.View_22_134} />
            <View style={styles.View_41_19}>
              <Text style={styles.Text_41_19}>SAVED CHATS</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6bde/51bf/5f6a9efd5cf41a76dec550c0fc3d6a8f"
              }}
              style={styles.ImageBackground_144_0}
            />
          </View>
          <View style={styles.View_22_83} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9328/1f44/6521f044b9cc6a77b22304a1a2f1dd34"
          }}
          style={styles.ImageBackground_132_7}
        />
        <View style={styles.View_133_8}>
          <Text style={styles.Text_133_8}>Happy International Yoga day!!</Text>
        </View>
        <View style={styles.View_195_174}>
          <View style={styles.View_195_175} />
          <View style={styles.View_195_176} />
          <View style={styles.View_195_177} />
          <View style={styles.View_195_178} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/32cc/587c/f272e9defcb8c0d3dbc44687aa271a35"
            }}
            style={styles.ImageBackground_195_204}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/81f1/17e4/b537c662eefcb0ba4b2323cd81d5a1ce"
            }}
            style={styles.ImageBackground_195_205}
          />
          <View style={styles.View_195_209}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cfe7/1372/c2aafb473ed9492d37cb667315fd28af"
              }}
              style={styles.ImageBackground_195_210}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9339/3c2a/a424054ebc9670742f8a7648fd9bed1e"
          }}
          style={styles.ImageBackground_195_244}
        />
        <View style={styles.View_195_221}>
          <View style={styles.View_195_222} />
          <View style={styles.View_195_223} />
          <View style={styles.View_195_224} />
          <View style={styles.View_195_225} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/32cc/587c/f272e9defcb8c0d3dbc44687aa271a35"
            }}
            style={styles.ImageBackground_195_226}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/81f1/17e4/b537c662eefcb0ba4b2323cd81d5a1ce"
            }}
            style={styles.ImageBackground_195_227}
          />
          <View style={styles.View_195_231}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cfe7/1372/c2aafb473ed9492d37cb667315fd28af"
              }}
              style={styles.ImageBackground_195_232}
            />
          </View>
        </View>
        <View style={styles.View_195_243}>
          <Text style={styles.Text_195_243}>FEED</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e0b/e2dc/78e1003827c7b6ea0f8e6188b6fd2d17"
        }}
        style={styles.ImageBackground_131_14}
      />
      <View style={styles.View_133_9}>
        <Text style={styles.Text_133_9}>Benefits of Walnuts</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a2b/3d53/02b88d55aab9b01f1862a564f1ca9c1a"
        }}
        style={styles.ImageBackground_142_16}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b1e/c57f/ae4461565006b3e61b52ea3b7164fa6a"
        }}
        style={styles.ImageBackground_142_43}
      />
      <View style={styles.View_166_147} />
      <View style={styles.View_142_22}>
        <View style={styles.View_142_23}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/71de/b363/e38f7ccb00bd0614a5b5e51813fbd79c"
            }}
            style={styles.ImageBackground_142_24}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ff/0c22/0b97200050a886088dbee23e6cec4be9"
            }}
            style={styles.ImageBackground_142_28}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
            }}
            style={styles.ImageBackground_142_32}
          />
        </View>
        <View style={styles.View_142_39}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94cc/b245/9af535a5ccb41c968f7147deb78a7ba3"
            }}
            style={styles.ImageBackground_142_40}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0386/1c03/35cde8be8ca4516c11b0b76583bae00b"
        }}
        style={styles.ImageBackground_142_21}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("110.92896174863387%") },
  View_7_2: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_29_1: {
    width: wp("62.93333333333333%"),
    minWidth: wp("62.93333333333333%"),
    height: hp("23.633879781420767%"),
    minHeight: hp("23.633879781420767%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_34_17: {
    width: wp("102.13333333333334%"),
    minWidth: wp("102.13333333333334%"),
    height: hp("22.131147540983605%"),
    minHeight: hp("22.131147540983605%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666667%"),
    top: hp("16.939890710382514%")
  },
  View_41_22: {
    width: wp("97.86666666666667%"),
    minWidth: wp("97.86666666666667%"),
    height: hp("17.89617486338798%"),
    minHeight: hp("17.89617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666667%"),
    top: hp("39.89071038251366%")
  },
  View_41_23: {
    width: wp("97.86666666666667%"),
    minWidth: wp("97.86666666666667%"),
    height: hp("17.89617486338798%"),
    minHeight: hp("17.89617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666667%"),
    top: hp("60.245901639344254%")
  },
  View_46_2: {
    width: wp("73.06666666666666%"),
    minWidth: wp("73.06666666666666%"),
    height: hp("15.983606557377051%"),
    minHeight: hp("15.983606557377051%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("81.83060109289617%")
  },
  View_113_30: {
    width: wp("55.46666666666666%"),
    minWidth: wp("55.46666666666666%"),
    height: hp("7.377049180327869%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666666%"),
    top: hp("25.273224043715846%")
  },
  View_121_16: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.39999999999999%"),
    top: hp("98.08743169398907%"),
    justifyContent: "flex-start"
  },
  Text_121_16: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_132_4: {
    width: wp("6.133333333333333%"),
    minWidth: wp("6.133333333333333%"),
    height: hp("3.1420765027322406%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.2%"),
    top: hp("87.43169398907104%"),
    resizeMode: "cover"
  },
  View_22_78: {
    width: wp("100%"),
    height: hp("9.972677595628415%"),
    top: hp("100.95628415300546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_22_79: {
    width: wp("100%"),
    height: hp("9.972677595628415%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_22_101: {
    flexGrow: 1,
    width: wp("30.4%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.9562841530054556%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_22_109: {
    width: wp("30.4%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(229, 229, 229, 1)"
  },
  View_22_110: {
    width: wp("30.4%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_22_116: {
    width: wp("6.133333333333333%"),
    height: hp("3.415300546448088%"),
    top: hp("3.1420765027322375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  View_41_14: {
    width: wp("16.53333333333333%"),
    minWidth: wp("16.53333333333333%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("8.469945355191257%"),
    justifyContent: "flex-start"
  },
  Text_41_14: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_121: {
    flexGrow: 1,
    width: wp("26.400000000000002%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.8%"),
    top: hp("-0.9562841530054556%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_22_122: {
    width: wp("26.400000000000002%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_41_16: {
    width: wp("10.133333333333333%"),
    minWidth: wp("10.133333333333333%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.600000000000009%"),
    top: hp("8.469945355191257%"),
    justifyContent: "flex-start"
  },
  Text_41_16: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_144_1: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.06666666666667%"),
    top: hp("3.278688524590166%")
  },
  ImageBackground_144_2: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.133333333333333%"),
    top: hp("3.278688524590166%"),
    resizeMode: "cover"
  },
  View_22_133: {
    flexGrow: 1,
    width: wp("30.4%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.6%"),
    top: hp("-0.9562841530054556%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_22_134: {
    width: wp("30.4%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_41_19: {
    width: wp("23.200000000000003%"),
    minWidth: wp("23.200000000000003%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.13333333333334%"),
    top: hp("8.606557377049185%"),
    justifyContent: "flex-start"
  },
  Text_41_19: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_144_0: {
    width: wp("5.6000000000000005%"),
    minWidth: wp("5.6000000000000005%"),
    height: hp("3.1420765027322406%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.933333333333337%"),
    top: hp("3.278688524590166%"),
    resizeMode: "cover"
  },
  View_22_83: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.9562841530054556%"),
    backgroundColor: "rgba(217, 208, 227, 1)"
  },
  ImageBackground_132_7: {
    width: wp("6.666666666666667%"),
    minWidth: wp("6.666666666666667%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.93333333333334%"),
    top: hp("53.96174863387978%"),
    resizeMode: "cover"
  },
  View_133_8: {
    width: wp("56.00000000000001%"),
    minWidth: wp("56.00000000000001%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.199999999999999%"),
    top: hp("54.50819672131148%"),
    justifyContent: "flex-start"
  },
  Text_133_8: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_195_174: {
    width: wp("211.73333333333332%"),
    minWidth: wp("211.73333333333332%"),
    height: hp("42.48633879781421%"),
    minHeight: hp("42.48633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-58.93333333333334%"),
    top: hp("18.71584699453552%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_195_175: {
    width: wp("61.86666666666667%"),
    height: hp("18.86815555760118%"),
    top: hp("11.083392367336916%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("149.86666666666667%"),
    backgroundColor: "rgba(122, 160, 218, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_195_176: {
    width: wp("77.33333333333333%"),
    height: hp("23.618181155679004%"),
    top: hp("8.70838269509904%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.2%"),
    backgroundColor: "rgba(46, 50, 155, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_195_177: {
    width: wp("61.86666666666667%"),
    height: hp("18.86815555760118%"),
    top: hp("11.083392367336916%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(235, 119, 119, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_195_178: {
    width: wp("28.000000000000004%"),
    height: hp("1.7152869636243808%"),
    top: hp("0.5277790007044025%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("121.33333333333334%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_195_204: {
    width: wp("100%"),
    height: hp("0.1319426656420765%"),
    top: hp("42.35439613217213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.733333333333334%")
  },
  ImageBackground_195_205: {
    width: wp("7.6%"),
    height: hp("0.7916726701246584%"),
    top: hp("33.382119767652824%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("102.13333333333334%")
  },
  View_195_209: {
    width: wp("10.666666666666668%"),
    height: hp("5.277805641049245%"),
    top: hp("5.805585684020659%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_195_210: {
    width: wp("10.666666666666668%"),
    height: hp("5.277805641049245%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover",
    borderColor: "rgba(228, 228, 228, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 300,
    borderTopRightRadius: 300,
    borderBottomLeftRadius: 300,
    borderBottomRightRadius: 300
  },
  ImageBackground_195_244: {
    width: wp("12.8%"),
    height: hp("6.693989071038252%"),
    top: hp("15.163934426229508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.8%"),
    resizeMode: "cover"
  },
  View_195_221: {
    width: wp("211.73333333333332%"),
    minWidth: wp("211.73333333333332%"),
    height: hp("42.48633879781421%"),
    minHeight: hp("42.48633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-58.13333333333334%"),
    top: hp("52.86885245901639%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_195_222: {
    width: wp("61.86666666666667%"),
    height: hp("18.86815555760118%"),
    top: hp("11.08339236733692%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("149.86666666666667%"),
    backgroundColor: "rgba(122, 160, 218, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_195_223: {
    width: wp("77.33333333333333%"),
    height: hp("23.618181155679004%"),
    top: hp("8.708382695099054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.2%"),
    backgroundColor: "rgba(46, 50, 155, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_195_224: {
    width: wp("61.86666666666667%"),
    height: hp("18.86815555760118%"),
    top: hp("11.08339236733692%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(235, 119, 119, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_195_225: {
    width: wp("28.000000000000004%"),
    height: hp("1.7152869636243808%"),
    top: hp("0.5277790007044132%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("121.33333333333334%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_195_226: {
    width: wp("100%"),
    height: hp("0.1319426656420765%"),
    top: hp("42.354396132172134%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.73333333333334%")
  },
  ImageBackground_195_227: {
    width: wp("7.6%"),
    height: hp("0.7916726701246584%"),
    top: hp("33.38212810578893%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("102.13333333333334%")
  },
  View_195_231: {
    width: wp("10.666666666666668%"),
    height: hp("5.277805641049245%"),
    top: hp("5.80558568402067%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_195_232: {
    width: wp("10.666666666666668%"),
    height: hp("5.277805641049245%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover",
    borderColor: "rgba(228, 228, 228, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 300,
    borderTopRightRadius: 300,
    borderBottomLeftRadius: 300,
    borderBottomRightRadius: 300
  },
  View_195_243: {
    width: wp("38.4%"),
    minWidth: wp("38.4%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.933333333333333%"),
    top: hp("16.256830601092894%"),
    justifyContent: "flex-start"
  },
  Text_195_243: {
    color: "rgba(115, 139, 243, 1)",
    fontSize: 29,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_131_14: {
    width: wp("14.933333333333335%"),
    minWidth: wp("14.933333333333335%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.13333333333334%"),
    top: hp("89.89071038251366%"),
    resizeMode: "cover"
  },
  View_133_9: {
    width: wp("56.00000000000001%"),
    minWidth: wp("56.00000000000001%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%"),
    top: hp("88.25136612021858%"),
    justifyContent: "flex-start"
  },
  Text_133_9: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_142_16: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("14.48087431693989%"),
    minHeight: hp("14.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_142_43: {
    width: wp("57.333333333333336%"),
    minWidth: wp("57.333333333333336%"),
    height: hp("15.437158469945356%"),
    minHeight: hp("15.437158469945356%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666667%"),
    top: hp("4.098360655737705%")
  },
  View_166_147: {
    width: wp("15.466666666666667%"),
    minWidth: wp("15.466666666666667%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.4%"),
    top: hp("15.027322404371585%")
  },
  View_142_22: {
    flexGrow: 1,
    width: wp("98.13333333333333%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.26666666666666666%"),
    top: hp("0%"),
    backgroundColor: "rgba(115, 139, 243, 1)",
    overflow: "hidden"
  },
  View_142_23: {
    width: wp("17.7763671875%"),
    minWidth: wp("17.7763671875%"),
    height: hp("2.8233038271711175%"),
    minHeight: hp("2.8233038271711175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.44443359375%"),
    top: hp("1.0929128511355874%")
  },
  ImageBackground_142_24: {
    width: wp("6.487476603190104%"),
    minWidth: wp("6.487476603190104%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.288899739583329%"),
    top: hp("1.2750344198258197%")
  },
  ImageBackground_142_28: {
    width: wp("4.072633616129558%"),
    minWidth: wp("4.072633616129558%"),
    height: hp("1.4980287499766531%"),
    minHeight: hp("1.4980287499766531%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.873893229166669%"),
    top: hp("1.2746675418374318%")
  },
  ImageBackground_142_32: {
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
  View_142_39: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6%"),
    top: hp("1.639344262295082%")
  },
  ImageBackground_142_40: {
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
  ImageBackground_142_21: {
    width: wp("14.133333333333335%"),
    minWidth: wp("14.133333333333335%"),
    height: hp("7.377049180327869%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.78792317708333%"),
    top: hp("6.215846994535519%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
