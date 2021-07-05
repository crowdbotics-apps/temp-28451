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
      <View style={styles.View_177_129}>
        <View style={styles.View_I177_129_48_5} />
        <View source={{ uri: "null" }} style={styles.View_I177_129_48_6} />
        <View style={styles.View_I177_129_48_55}>
          <Text style={styles.Text_I177_129_48_55}>Payment</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/47c8/84b4/6397e4292575c877041ae781b239081f"
          }}
          style={styles.ImageBackground_I177_129_138_8}
        />
      </View>
      <View style={styles.View_177_130}>
        <Text style={styles.Text_177_130}>Expires</Text>
      </View>
      <View style={styles.View_177_131}>
        <Text style={styles.Text_177_131}>12/23</Text>
      </View>
      <View style={styles.View_177_132}>
        <Text style={styles.Text_177_132}>Card Holder</Text>
      </View>
      <View style={styles.View_177_133}>
        <Text style={styles.Text_177_133}>Aycan Doganlar</Text>
      </View>
      <View style={styles.View_177_134}>
        <View style={styles.View_177_135}>
          <Text style={styles.Text_177_135}>••••</Text>
        </View>
        <View style={styles.View_177_136}>
          <Text style={styles.Text_177_136}>••••</Text>
        </View>
        <View style={styles.View_177_137}>
          <Text style={styles.Text_177_137}>••••</Text>
        </View>
        <View style={styles.View_177_138}>
          <Text style={styles.Text_177_138}>3282</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a52/6d69/d7a6eb3542797742bbb8a4d7b2706dc8"
        }}
        style={styles.ImageBackground_177_139}
      />
      <View style={styles.View_177_145}>
        <View style={styles.View_177_146}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/71de/b363/e38f7ccb00bd0614a5b5e51813fbd79c"
            }}
            style={styles.ImageBackground_177_147}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ff/0c22/0b97200050a886088dbee23e6cec4be9"
            }}
            style={styles.ImageBackground_177_151}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
            }}
            style={styles.ImageBackground_177_155}
          />
        </View>
        <View style={styles.View_177_162}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94cc/b245/9af535a5ccb41c968f7147deb78a7ba3"
            }}
            style={styles.ImageBackground_177_163}
          />
        </View>
      </View>
      <View style={styles.View_177_165}>
        <View style={styles.View_I177_165_48_58}>
          <View style={styles.View_I177_165_48_59} />
          <View style={styles.View_I177_165_48_60}>
            <Text text="" style={styles.Text_I177_165_48_60} />
          </View>
        </View>
      </View>
      <View style={styles.View_177_166}>
        <Text style={styles.Text_177_166}>Complete Order</Text>
      </View>
      <View style={styles.View_177_167}>
        <View style={styles.View_177_168} />
        <View style={styles.View_177_169} />
        <View style={styles.View_177_170} />
        <View style={styles.View_177_171}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fdb5/33ec/83b119b377b57d9c1ec29f73a0d2226d"
            }}
            style={styles.ImageBackground_177_172}
          />
          <View style={styles.View_177_175}>
            <Text style={styles.Text_177_175}>Add New Card</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed7a/032c/f7f94effc025b8fcffed1dffb37be654"
          }}
          style={styles.ImageBackground_177_176}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a52/6d69/d7a6eb3542797742bbb8a4d7b2706dc8"
          }}
          style={styles.ImageBackground_177_180}
        />
        <View style={styles.View_177_186}>
          <View style={styles.View_177_187}>
            <Text style={styles.Text_177_187}>••••</Text>
          </View>
          <View style={styles.View_177_188}>
            <Text style={styles.Text_177_188}>••••</Text>
          </View>
          <View style={styles.View_177_189}>
            <Text style={styles.Text_177_189}>••••</Text>
          </View>
          <View style={styles.View_177_190}>
            <Text style={styles.Text_177_190}>3282</Text>
          </View>
        </View>
        <View style={styles.View_177_191}>
          <View style={styles.View_177_192}>
            <Text style={styles.Text_177_192}>Aycan Doganlar</Text>
          </View>
          <View style={styles.View_177_193}>
            <Text style={styles.Text_177_193}>Card Holder</Text>
          </View>
        </View>
        <View style={styles.View_177_194}>
          <View style={styles.View_177_195}>
            <Text style={styles.Text_177_195}>12/23</Text>
          </View>
          <View style={styles.View_177_196}>
            <Text style={styles.Text_177_196}>Expires</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20ef/e8bc/a930f11bc8e0dcdbb87fa8bc9ae23b41"
          }}
          style={styles.ImageBackground_177_197}
        />
      </View>
      <View style={styles.View_189_101}>
        <View style={styles.View_189_102} />
        <View style={styles.View_189_172} />
        <View style={styles.View_189_103}>
          <Text style={styles.Text_189_103}>Cash on Delivery</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/805c/6e0a/b4fbfe0c9f06702c2caa030962f927d0"
          }}
          style={styles.ImageBackground_189_110}
        />
        <View style={styles.View_189_123}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2bb4/61c6/39deaa2a199c1d43f7e010218d5bed46"
            }}
            style={styles.ImageBackground_189_124}
          />
        </View>
      </View>
      <View style={styles.View_189_173}>
        <View style={styles.View_189_174} />
        <View style={styles.View_189_175} />
        <View style={styles.View_189_176}>
          <Text style={styles.Text_189_176}>UPI </Text>
        </View>
        <View style={styles.View_189_184}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2bb4/61c6/39deaa2a199c1d43f7e010218d5bed46"
            }}
            style={styles.ImageBackground_189_185}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9cba/567c/99d45dab7a0cf9f7d9a5eeadeac8cbfa"
          }}
          style={styles.ImageBackground_189_204}
        />
      </View>
      <View style={styles.View_189_188}>
        <View style={styles.View_189_189} />
        <View style={styles.View_189_190} />
        <View style={styles.View_189_191}>
          <Text style={styles.Text_189_191}>Internet Banking</Text>
        </View>
        <View style={styles.View_189_199}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2bb4/61c6/39deaa2a199c1d43f7e010218d5bed46"
            }}
            style={styles.ImageBackground_189_200}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ffd/4b39/5d6c6c1f9eecb2341e1c2dd40799a6d7"
          }}
          style={styles.ImageBackground_189_203}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_177_129: {
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
  View_I177_129_48_5: {
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
  View_I177_129_48_6: {
    flexGrow: 1,
    width: wp("1.4492757161458334%"),
    height: hp("1.8271857923497268%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.0724609375%"),
    top: hp("9.440458537450905%")
  },
  View_I177_129_48_55: {
    flexGrow: 1,
    width: wp("43.46666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("6.851946721311474%"),
    justifyContent: "flex-start"
  },
  Text_I177_129_48_55: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I177_129_138_8: {
    flexGrow: 1,
    width: wp("1.4531402587890625%"),
    height: hp("1.8081529544350878%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.086002604166667%"),
    top: hp("9.342122729358778%")
  },
  View_177_130: {
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
  Text_177_130: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_177_131: {
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
  Text_177_131: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_177_132: {
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
  Text_177_132: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_177_133: {
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
  Text_177_133: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_177_134: {
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
  View_177_135: {
    width: wp("10.133333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666657%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_177_135: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19.14858055114746,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 1.6602150201797485,
    textTransform: "none"
  },
  View_177_136: {
    width: wp("10.133333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.10712890625%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_177_136: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19.14858055114746,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 1.6602150201797485,
    textTransform: "none"
  },
  View_177_137: {
    width: wp("10.133333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.01113281250001%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_177_137: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19.14858055114746,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 1.6602150201797485,
    textTransform: "none"
  },
  View_177_138: {
    width: wp("10.133333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.04554036458333%"),
    top: hp("0.721653172227203%"),
    justifyContent: "flex-start"
  },
  Text_177_138: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12.092863082885742,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 1.0376343727111816,
    textTransform: "none"
  },
  ImageBackground_177_139: {
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
  View_177_145: {
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
  View_177_146: {
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
  ImageBackground_177_147: {
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
  ImageBackground_177_151: {
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
  ImageBackground_177_155: {
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
  View_177_162: {
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
  ImageBackground_177_163: {
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
  View_177_165: {
    width: wp("100%"),
    height: hp("12.021857923497267%"),
    top: hp("98.90710382513662%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I177_165_48_58: {
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
  View_I177_165_48_59: {
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
  View_I177_165_48_60: {
    width: wp("32.800000000000004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.6%"),
    top: hp("4.098360655737693%"),
    justifyContent: "flex-start"
  },
  Text_I177_165_48_60: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_177_166: {
    width: wp("62.93333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("103.00546448087431%"),
    justifyContent: "flex-start"
  },
  Text_177_166: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_177_167: {
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
  View_177_168: {
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
  View_177_169: {
    width: wp("77.33333333333333%"),
    height: hp("24.453551912568305%"),
    top: hp("9.016393442622952%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.2%"),
    backgroundColor: "rgba(134, 136, 188, 1)",
    borderColor: "rgba(65, 65, 65, 1)",
    borderWidth: 5
  },
  View_177_170: {
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
  View_177_171: {
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
  ImageBackground_177_172: {
    width: wp("3.2%"),
    height: hp("1.639344262295082%"),
    top: hp("0.13661202185792476%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_177_175: {
    width: wp("22.133333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.86666666666666%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_177_175: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_177_176: {
    width: wp("7.6%"),
    height: hp("0.819672131147541%"),
    top: hp("37.568306010928964%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("101.86666666666667%")
  },
  ImageBackground_177_180: {
    width: wp("13.333333333333334%"),
    height: hp("2.3253109937157133%"),
    top: hp("13.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.2%")
  },
  View_177_186: {
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
  View_177_187: {
    width: wp("10.133333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.26666666666666927%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_177_187: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19.14858055114746,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 1.6602150201797485,
    textTransform: "none"
  },
  View_177_188: {
    width: wp("10.133333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.107128906250004%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_177_188: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19.14858055114746,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 1.6602150201797485,
    textTransform: "none"
  },
  View_177_189: {
    width: wp("10.133333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.0111328125%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_177_189: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19.14858055114746,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 1.6602150201797485,
    textTransform: "none"
  },
  View_177_190: {
    width: wp("10.133333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.2%"),
    top: hp("1.1314892378009702%"),
    justifyContent: "flex-start"
  },
  Text_177_190: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12.092863082885742,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 1.037634015083313,
    textTransform: "none"
  },
  View_177_191: {
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
  View_177_192: {
    width: wp("24.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.9125683060109253%"),
    justifyContent: "flex-start"
  },
  Text_177_192: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_177_193: {
    width: wp("14.133333333333335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_177_193: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_177_194: {
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
  View_177_195: {
    width: wp("9.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.2666666666666657%"),
    top: hp("1.9125683060109253%"),
    justifyContent: "flex-start"
  },
  Text_177_195: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_177_196: {
    width: wp("8.799999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666657%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_177_196: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_177_197: {
    width: wp("100%"),
    height: hp("0.1366120218579235%"),
    top: hp("43.852459016393446%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.733333333333334%")
  },
  View_189_101: {
    width: wp("102.13333333333334%"),
    minWidth: wp("102.13333333333334%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.3333333333333335%"),
    top: hp("60.10928961748634%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_189_102: {
    width: wp("102.13333333333334%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_189_172: {
    width: wp("102.13333333333334%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_189_103: {
    width: wp("80.1771240234375%"),
    top: hp("2.185792349726775%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.022233072916666%"),
    justifyContent: "center"
  },
  Text_189_103: {
    color: "rgba(115, 139, 243, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.29817327857017517,
    textTransform: "none"
  },
  ImageBackground_189_110: {
    width: wp("5.920771789550781%"),
    height: hp("3.278688524590164%"),
    top: hp("2.185792349726775%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.933984375%")
  },
  View_189_123: {
    width: wp("5.447111002604166%"),
    height: hp("2.73224043715847%"),
    top: hp("2.322404371584696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.78382161458333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_189_124: {
    width: wp("5.447111002604166%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_189_173: {
    width: wp("102.13333333333334%"),
    minWidth: wp("102.13333333333334%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.3333333333333335%"),
    top: hp("67.75956284153006%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_189_174: {
    width: wp("102.13333333333334%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_189_175: {
    width: wp("102.13333333333334%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_189_176: {
    width: wp("80.1771240234375%"),
    top: hp("2.185792349726782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.022233072916666%"),
    justifyContent: "center"
  },
  Text_189_176: {
    color: "rgba(115, 139, 243, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.29817327857017517,
    textTransform: "none"
  },
  View_189_184: {
    width: wp("5.447111002604166%"),
    height: hp("2.73224043715847%"),
    top: hp("2.322404371584696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.78382161458333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_189_185: {
    width: wp("5.447111002604166%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_189_204: {
    width: wp("10.933333333333334%"),
    height: hp("5.46448087431694%"),
    top: hp("1.0928961748633839%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333334%"),
    resizeMode: "cover"
  },
  View_189_188: {
    width: wp("102.13333333333334%"),
    minWidth: wp("102.13333333333334%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.5333333333333333%"),
    top: hp("75.40983606557377%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_189_189: {
    width: wp("102.13333333333334%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_189_190: {
    width: wp("102.13333333333334%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_189_191: {
    width: wp("80.1771240234375%"),
    top: hp("2.1857923497267677%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.022233072916666%"),
    justifyContent: "center"
  },
  Text_189_191: {
    color: "rgba(115, 139, 243, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.29817327857017517,
    textTransform: "none"
  },
  View_189_199: {
    width: wp("5.447111002604166%"),
    height: hp("2.73224043715847%"),
    top: hp("2.322404371584696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.78382161458333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_189_200: {
    width: wp("5.447111002604166%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_189_203: {
    width: wp("7.199999999999999%"),
    height: hp("3.551912568306011%"),
    top: hp("2.322404371584696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333334%"),
    resizeMode: "cover"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
