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
      <View style={styles.View_166_162}>
        <View style={styles.View_I166_162_48_5} />
        <View source={{ uri: "null" }} style={styles.View_I166_162_48_6} />
        <View style={styles.View_I166_162_48_55}>
          <Text style={styles.Text_I166_162_48_55}>Payment</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/47c8/84b4/6397e4292575c877041ae781b239081f"
          }}
          style={styles.ImageBackground_I166_162_138_8}
        />
      </View>
      <View style={styles.View_166_248}>
        <Text style={styles.Text_166_248}>Expires</Text>
      </View>
      <View style={styles.View_166_247}>
        <Text style={styles.Text_166_247}>12/23</Text>
      </View>
      <View style={styles.View_166_246}>
        <Text style={styles.Text_166_246}>Card Holder</Text>
      </View>
      <View style={styles.View_166_245}>
        <Text style={styles.Text_166_245}>Aycan Doganlar</Text>
      </View>
      <View style={styles.View_166_240}>
        <View style={styles.View_166_241}>
          <Text style={styles.Text_166_241}>••••</Text>
        </View>
        <View style={styles.View_166_242}>
          <Text style={styles.Text_166_242}>••••</Text>
        </View>
        <View style={styles.View_166_243}>
          <Text style={styles.Text_166_243}>••••</Text>
        </View>
        <View style={styles.View_166_244}>
          <Text style={styles.Text_166_244}>3282</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a52/6d69/d7a6eb3542797742bbb8a4d7b2706dc8"
        }}
        style={styles.ImageBackground_166_234}
      />
      <View style={styles.View_166_163}>
        <View style={styles.View_166_164}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/71de/b363/e38f7ccb00bd0614a5b5e51813fbd79c"
            }}
            style={styles.ImageBackground_166_165}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ff/0c22/0b97200050a886088dbee23e6cec4be9"
            }}
            style={styles.ImageBackground_166_169}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
            }}
            style={styles.ImageBackground_166_173}
          />
        </View>
        <View style={styles.View_166_180}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94cc/b245/9af535a5ccb41c968f7147deb78a7ba3"
            }}
            style={styles.ImageBackground_166_181}
          />
        </View>
      </View>
      <View style={styles.View_166_207}>
        <View style={styles.View_I166_207_48_58}>
          <View style={styles.View_I166_207_48_59} />
          <View style={styles.View_I166_207_48_60}>
            <Text text="" style={styles.Text_I166_207_48_60} />
          </View>
        </View>
      </View>
      <View style={styles.View_166_227}>
        <Text style={styles.Text_166_227}>Complete Order</Text>
      </View>
      <View style={styles.View_176_132}>
        <View style={styles.View_176_133} />
        <View style={styles.View_176_134} />
        <View style={styles.View_176_135} />
        <View style={styles.View_176_136}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fdb5/33ec/83b119b377b57d9c1ec29f73a0d2226d"
            }}
            style={styles.ImageBackground_176_137}
          />
          <View style={styles.View_176_140}>
            <Text style={styles.Text_176_140}>Add New Card</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed7a/032c/f7f94effc025b8fcffed1dffb37be654"
          }}
          style={styles.ImageBackground_176_141}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a52/6d69/d7a6eb3542797742bbb8a4d7b2706dc8"
          }}
          style={styles.ImageBackground_176_145}
        />
        <View style={styles.View_176_151}>
          <View style={styles.View_176_152}>
            <Text style={styles.Text_176_152}>••••</Text>
          </View>
          <View style={styles.View_176_153}>
            <Text style={styles.Text_176_153}>••••</Text>
          </View>
          <View style={styles.View_176_154}>
            <Text style={styles.Text_176_154}>••••</Text>
          </View>
          <View style={styles.View_176_155}>
            <Text style={styles.Text_176_155}>3282</Text>
          </View>
        </View>
        <View style={styles.View_176_156}>
          <View style={styles.View_176_157}>
            <Text style={styles.Text_176_157}>Aycan Doganlar</Text>
          </View>
          <View style={styles.View_176_158}>
            <Text style={styles.Text_176_158}>Card Holder</Text>
          </View>
        </View>
        <View style={styles.View_176_159}>
          <View style={styles.View_176_160}>
            <Text style={styles.Text_176_160}>12/23</Text>
          </View>
          <View style={styles.View_176_161}>
            <Text style={styles.Text_176_161}>Expires</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20ef/e8bc/a930f11bc8e0dcdbb87fa8bc9ae23b41"
          }}
          style={styles.ImageBackground_176_163}
        />
      </View>
      <View style={styles.View_216_412}>
        <View style={styles.View_216_413}>
          <Text style={styles.Text_216_413}>Name on card</Text>
        </View>
        <View style={styles.View_216_414}>
          <Text style={styles.Text_216_414}>Aycan Doganlar</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad2c/a4b1/7483037587a9990ba42145c2f726523f"
          }}
          style={styles.ImageBackground_216_415}
        />
      </View>
      <View style={styles.View_216_416}>
        <View style={styles.View_216_417}>
          <Text style={styles.Text_216_417}>Card number</Text>
        </View>
        <View style={styles.View_216_418}>
          <Text style={styles.Text_216_418}>1234 4567 7890 1234</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad2c/a4b1/7483037587a9990ba42145c2f726523f"
          }}
          style={styles.ImageBackground_216_419}
        />
      </View>
      <View style={styles.View_216_420}>
        <View style={styles.View_216_421}>
          <Text style={styles.Text_216_421}>Expiry date</Text>
        </View>
        <View style={styles.View_216_422}>
          <Text style={styles.Text_216_422}>CVV</Text>
        </View>
        <View style={styles.View_216_423}>
          <Text style={styles.Text_216_423}>02/24</Text>
        </View>
        <View style={styles.View_216_424}>
          <Text style={styles.Text_216_424}>•••</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dcda/a4f0/997c339a8e8bd399a80ef1eca650d67b"
          }}
          style={styles.ImageBackground_216_425}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dcda/a4f0/997c339a8e8bd399a80ef1eca650d67b"
          }}
          style={styles.ImageBackground_216_426}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6bd4/02a8/c6e3424575bb917e720bd211f512fc95"
        }}
        style={styles.ImageBackground_216_427}
      />
      <View style={styles.View_216_428}>
        <Text style={styles.Text_216_428}>Add New Card</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_166_162: {
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
  View_I166_162_48_5: {
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
  View_I166_162_48_6: {
    flexGrow: 1,
    width: wp("1.4492757161458334%"),
    height: hp("1.8271857923497268%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.0724609375%"),
    top: hp("9.440458537450905%")
  },
  View_I166_162_48_55: {
    flexGrow: 1,
    width: wp("43.46666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("6.851946721311474%"),
    justifyContent: "flex-start"
  },
  Text_I166_162_48_55: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I166_162_138_8: {
    flexGrow: 1,
    width: wp("1.4531402587890625%"),
    height: hp("1.8081529544350878%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.085986328125%"),
    top: hp("9.342122729358778%")
  },
  View_166_248: {
    width: wp("8.799999999999999%"),
    minWidth: wp("8.799999999999999%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.33333333333334%"),
    top: hp("35.24590163934426%"),
    justifyContent: "flex-start"
  },
  Text_166_248: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_166_247: {
    width: wp("9.333333333333334%"),
    minWidth: wp("9.333333333333334%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.8%"),
    top: hp("37.15846994535519%"),
    justifyContent: "flex-start"
  },
  Text_166_247: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_166_246: {
    width: wp("14.133333333333335%"),
    minWidth: wp("14.133333333333335%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.8%"),
    top: hp("35.24590163934426%"),
    justifyContent: "flex-start"
  },
  Text_166_246: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_166_245: {
    width: wp("24.266666666666666%"),
    minWidth: wp("24.266666666666666%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.8%"),
    top: hp("37.15846994535519%"),
    justifyContent: "flex-start"
  },
  Text_166_245: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_166_240: {
    width: wp("61.33333333333333%"),
    minWidth: wp("61.33333333333333%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.8%"),
    top: hp("29.23497267759563%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_166_241: {
    width: wp("10.133333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666657%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_166_241: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19.14858055114746,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 1.6602150201797485,
    textTransform: "none"
  },
  View_166_242: {
    width: wp("10.133333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.10712890625%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_166_242: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19.14858055114746,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 1.6602150201797485,
    textTransform: "none"
  },
  View_166_243: {
    width: wp("10.133333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.01113281250001%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_166_243: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19.14858055114746,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 1.6602150201797485,
    textTransform: "none"
  },
  View_166_244: {
    width: wp("10.133333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.04554036458333%"),
    top: hp("0.721653172227203%"),
    justifyContent: "flex-start"
  },
  Text_166_244: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12.092863082885742,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 1.0376343727111816,
    textTransform: "none"
  },
  ImageBackground_166_234: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("2.3253109937157133%"),
    minHeight: hp("2.3253109937157133%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.8%"),
    top: hp("23.08743169398907%")
  },
  View_166_163: {
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
  View_166_164: {
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
  ImageBackground_166_165: {
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
  ImageBackground_166_169: {
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
  ImageBackground_166_173: {
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
  View_166_180: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("1.639344262295082%")
  },
  ImageBackground_166_181: {
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
  View_166_207: {
    width: wp("100%"),
    height: hp("12.021857923497267%"),
    top: hp("98.90710382513662%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I166_207_48_58: {
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
  View_I166_207_48_59: {
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
  View_I166_207_48_60: {
    width: wp("32.800000000000004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.6%"),
    top: hp("4.098360655737693%"),
    justifyContent: "flex-start"
  },
  Text_I166_207_48_60: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_166_227: {
    width: wp("62.93333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("103.00546448087431%"),
    justifyContent: "flex-start"
  },
  Text_166_227: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_176_132: {
    width: wp("211.73333333333332%"),
    minWidth: wp("211.73333333333332%"),
    height: hp("43.98907103825137%"),
    minHeight: hp("43.98907103825137%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-54.93333333333334%"),
    top: hp("16.120218579234972%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_176_133: {
    width: wp("61.86666666666667%"),
    height: hp("19.53551912568306%"),
    top: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("149.86666666666667%"),
    backgroundColor: "rgba(122, 160, 218, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_176_134: {
    width: wp("77.33333333333333%"),
    height: hp("24.453551912568305%"),
    top: hp("9.016393442622952%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.2%"),
    backgroundColor: "rgba(134, 136, 188, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_176_135: {
    width: wp("61.86666666666667%"),
    height: hp("19.53551912568306%"),
    top: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(235, 119, 119, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_176_136: {
    width: wp("28.000000000000004%"),
    height: hp("1.7759562841530054%"),
    top: hp("0.5464480874316919%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("121.33333333333334%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_176_137: {
    width: wp("3.2%"),
    height: hp("1.639344262295082%"),
    top: hp("0.13661202185792476%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_176_140: {
    width: wp("22.133333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.86666666666666%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_176_140: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_176_141: {
    width: wp("7.6%"),
    height: hp("0.819672131147541%"),
    top: hp("37.568306010928964%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("101.86666666666667%")
  },
  ImageBackground_176_145: {
    width: wp("13.333333333333334%"),
    height: hp("2.3253109937157133%"),
    top: hp("13.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.2%")
  },
  View_176_151: {
    width: wp("61.33333333333333%"),
    height: hp("4.098360655737705%"),
    top: hp("19.262295081967217%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_176_152: {
    width: wp("10.133333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.26666666666666927%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_176_152: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19.14858055114746,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 1.6602150201797485,
    textTransform: "none"
  },
  View_176_153: {
    width: wp("10.133333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.107128906250004%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_176_153: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19.14858055114746,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 1.6602150201797485,
    textTransform: "none"
  },
  View_176_154: {
    width: wp("10.133333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.0111328125%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_176_154: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19.14858055114746,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 1.6602150201797485,
    textTransform: "none"
  },
  View_176_155: {
    width: wp("10.133333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.2%"),
    top: hp("1.1314892378009702%"),
    justifyContent: "flex-start"
  },
  Text_176_155: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12.092863082885742,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 1.037634015083313,
    textTransform: "none"
  },
  View_176_156: {
    width: wp("25.6%"),
    height: hp("3.6885245901639343%"),
    top: hp("25.5464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_176_157: {
    width: wp("24.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.9125683060109253%"),
    justifyContent: "flex-start"
  },
  Text_176_157: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_176_158: {
    width: wp("14.133333333333335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_176_158: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_176_159: {
    width: wp("9.066666666666666%"),
    height: hp("3.6885245901639343%"),
    top: hp("25.5464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("127.46666666666667%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_176_160: {
    width: wp("9.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.2666666666666657%"),
    top: hp("1.9125683060109253%"),
    justifyContent: "flex-start"
  },
  Text_176_160: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_176_161: {
    width: wp("8.799999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666657%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_176_161: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_176_163: {
    width: wp("100%"),
    height: hp("0.1366120218579235%"),
    top: hp("43.852459016393446%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.733333333333334%")
  },
  View_216_412: {
    width: wp("87.2%"),
    height: hp("7.240437158469945%"),
    top: hp("71.72131147540983%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_216_413: {
    width: wp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_216_413: {
    color: "rgba(153, 153, 153, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_216_414: {
    width: wp("29.86666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.868852459016395%"),
    justifyContent: "flex-start"
  },
  Text_216_414: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_216_415: {
    width: wp("87.2%"),
    height: hp("0.1366120218579235%"),
    top: hp("7.0355191256830665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_216_416: {
    width: wp("87.2%"),
    height: hp("7.240437158469945%"),
    top: hp("81.14754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_216_417: {
    width: wp("18.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_216_417: {
    color: "rgba(153, 153, 153, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_216_418: {
    width: wp("44.800000000000004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.868852459016395%"),
    justifyContent: "flex-start"
  },
  Text_216_418: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_216_419: {
    width: wp("87.2%"),
    height: hp("0.1366120218579235%"),
    top: hp("7.035519125683052%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_216_420: {
    width: wp("87.2%"),
    height: hp("7.240437158469945%"),
    top: hp("90.57377049180327%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_216_421: {
    width: wp("15.733333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_216_421: {
    color: "rgba(153, 153, 153, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_216_422: {
    width: wp("6.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.6%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_216_422: {
    color: "rgba(153, 153, 153, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_216_423: {
    width: wp("11.466666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.8688524590164093%"),
    justifyContent: "flex-start"
  },
  Text_216_423: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_216_424: {
    width: wp("5.6000000000000005%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.6%"),
    top: hp("2.4590163934426243%"),
    justifyContent: "flex-start"
  },
  Text_216_424: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  ImageBackground_216_425: {
    width: wp("41.6%"),
    height: hp("0.1366120218579235%"),
    top: hp("7.0355191256830665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_216_426: {
    width: wp("41.6%"),
    height: hp("0.1366120218579235%"),
    top: hp("7.0355191256830665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.6%")
  },
  ImageBackground_216_427: {
    width: wp("3.2%"),
    height: hp("1.639344262295082%"),
    top: hp("60.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%")
  },
  View_216_428: {
    width: wp("37.6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("65.02732240437157%"),
    justifyContent: "flex-start"
  },
  Text_216_428: {
    color: "rgba(66, 67, 71, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
