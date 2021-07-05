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
      <View style={styles.View_214_37}>
        <View style={styles.View_I214_37_48_5} />
        <View source={{ uri: "null" }} style={styles.View_I214_37_48_6} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/47c8/84b4/6397e4292575c877041ae781b239081f"
          }}
          style={styles.ImageBackground_I214_37_138_8}
        />
      </View>
      <View style={styles.View_214_353}>
        <Text style={styles.Text_214_353}>Cart</Text>
      </View>
      <View style={styles.View_214_38}>
        <View style={styles.View_214_39}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/71de/b363/e38f7ccb00bd0614a5b5e51813fbd79c"
            }}
            style={styles.ImageBackground_214_40}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ff/0c22/0b97200050a886088dbee23e6cec4be9"
            }}
            style={styles.ImageBackground_214_44}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
            }}
            style={styles.ImageBackground_214_48}
          />
        </View>
        <View style={styles.View_214_55}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94cc/b245/9af535a5ccb41c968f7147deb78a7ba3"
            }}
            style={styles.ImageBackground_214_56}
          />
        </View>
      </View>
      <View style={styles.View_214_58}>
        <View style={styles.View_I214_58_48_58}>
          <View style={styles.View_I214_58_48_59} />
          <View style={styles.View_I214_58_48_60}>
            <Text style={styles.Text_I214_58_48_60}>Order</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_214_320}>
        <View style={styles.View_214_325}>
          <View style={styles.View_214_326}>
            <Text style={styles.Text_214_326}>Item 1</Text>
          </View>
          <View style={styles.View_214_327}>
            <Text style={styles.Text_214_327}>$12</Text>
          </View>
          <View style={styles.View_214_328}>
            <Text style={styles.Text_214_328}>・</Text>
          </View>
          <View style={styles.View_214_329}>
            <Text style={styles.Text_214_329}>In stock</Text>
          </View>
          <View style={styles.View_214_330}>
            <Text style={styles.Text_214_330}>short description</Text>
          </View>
          <View style={styles.View_214_331}>
            <View style={styles.View_214_332}>
              <View style={styles.View_214_333} />
              <View style={styles.View_214_334} />
              <View style={styles.View_214_335} />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f30b/cbb5/89ea7b2c6e2edb0abbdde25656303731"
              }}
              style={styles.ImageBackground_214_336}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c117/0dac/85042bba54f8a415a9ba0678c31f2b26"
              }}
              style={styles.ImageBackground_214_337}
            />
            <View style={styles.View_214_340}>
              <Text style={styles.Text_214_340}>1</Text>
            </View>
          </View>
          <View style={styles.View_214_341} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b398/43c9/2be74e02ab1b3041a5d946af60361418"
            }}
            style={styles.ImageBackground_214_342}
          />
          <View style={styles.View_214_348} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec85/6515/04e8db5eeed0a0f6a258ff25ce1b408a"
            }}
            style={styles.ImageBackground_214_349}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/810c/0cf4/63e4ff54b5995d8e5b160d90632a1373"
          }}
          style={styles.ImageBackground_214_350}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/810c/0cf4/63e4ff54b5995d8e5b160d90632a1373"
        }}
        style={styles.ImageBackground_214_352}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/810c/0cf4/63e4ff54b5995d8e5b160d90632a1373"
        }}
        style={styles.ImageBackground_214_351}
      />
      <View style={styles.View_214_206}>
        <View style={styles.View_214_211}>
          <View style={styles.View_214_212}>
            <Text style={styles.Text_214_212}>Item 2</Text>
          </View>
          <View style={styles.View_214_213}>
            <Text style={styles.Text_214_213}>$16</Text>
          </View>
          <View style={styles.View_214_214}>
            <Text style={styles.Text_214_214}>・</Text>
          </View>
          <View style={styles.View_214_215}>
            <Text style={styles.Text_214_215}>In stock</Text>
          </View>
          <View style={styles.View_214_216}>
            <Text style={styles.Text_214_216}>short description</Text>
          </View>
          <View style={styles.View_214_217}>
            <View style={styles.View_214_218}>
              <View style={styles.View_214_219} />
              <View style={styles.View_214_220} />
              <View style={styles.View_214_221} />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f30b/cbb5/89ea7b2c6e2edb0abbdde25656303731"
              }}
              style={styles.ImageBackground_214_222}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c117/0dac/85042bba54f8a415a9ba0678c31f2b26"
              }}
              style={styles.ImageBackground_214_223}
            />
            <View style={styles.View_214_226}>
              <Text style={styles.Text_214_226}>1</Text>
            </View>
          </View>
          <View style={styles.View_214_227} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b398/43c9/2be74e02ab1b3041a5d946af60361418"
            }}
            style={styles.ImageBackground_214_228}
          />
          <View style={styles.View_214_234} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec85/6515/04e8db5eeed0a0f6a258ff25ce1b408a"
            }}
            style={styles.ImageBackground_214_235}
          />
        </View>
      </View>
      <View style={styles.View_214_236}>
        <View style={styles.View_214_241}>
          <View style={styles.View_214_242}>
            <Text style={styles.Text_214_242}>Item 3</Text>
          </View>
          <View style={styles.View_214_243}>
            <Text style={styles.Text_214_243}>$36</Text>
          </View>
          <View style={styles.View_214_244}>
            <Text style={styles.Text_214_244}>・</Text>
          </View>
          <View style={styles.View_214_245}>
            <Text style={styles.Text_214_245}>Out of stock</Text>
          </View>
          <View style={styles.View_214_246}>
            <Text style={styles.Text_214_246}>short description</Text>
          </View>
          <View style={styles.View_214_247}>
            <View style={styles.View_214_248}>
              <View style={styles.View_214_249}>
                <View style={styles.View_214_250} />
                <View style={styles.View_214_251} />
                <View style={styles.View_214_252} />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f30b/cbb5/89ea7b2c6e2edb0abbdde25656303731"
                }}
                style={styles.ImageBackground_214_253}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c117/0dac/85042bba54f8a415a9ba0678c31f2b26"
                }}
                style={styles.ImageBackground_214_254}
              />
              <View style={styles.View_214_257}>
                <Text style={styles.Text_214_257}>1</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_214_258} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b398/43c9/2be74e02ab1b3041a5d946af60361418"
            }}
            style={styles.ImageBackground_214_259}
          />
          <View style={styles.View_214_265} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec85/6515/04e8db5eeed0a0f6a258ff25ce1b408a"
            }}
            style={styles.ImageBackground_214_266}
          />
        </View>
      </View>
      <View style={styles.View_214_272}>
        <View style={styles.View_214_273}>
          <Text style={styles.Text_214_273}>Select All</Text>
        </View>
        <View style={styles.View_214_274}>
          <Text style={styles.Text_214_274}>Delete Selected</Text>
        </View>
        <View style={styles.View_214_275}>
          <Text style={styles.Text_214_275}>3 items</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4cd9/bc3a/3a5a9a4eb8e5e95e9932c7ee57869889"
          }}
          style={styles.ImageBackground_214_276}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b2f7/5002/09f73b76a439342e879519d878f0dd5f"
          }}
          style={styles.ImageBackground_214_277}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_214_37: {
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
  View_I214_37_48_5: {
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
  View_I214_37_48_6: {
    flexGrow: 1,
    width: wp("1.4492757161458334%"),
    height: hp("1.8271857923497268%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.072465006510416%"),
    top: hp("9.440458537450905%")
  },
  ImageBackground_I214_37_138_8: {
    flexGrow: 1,
    width: wp("1.4531402587890625%"),
    height: hp("1.8081529544350878%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.085986328125%"),
    top: hp("9.342122729358778%")
  },
  View_214_353: {
    width: wp("43.46666666666666%"),
    top: hp("6.851946721311474%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    justifyContent: "flex-start"
  },
  Text_214_353: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_214_38: {
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
  View_214_39: {
    width: wp("17.7763671875%"),
    minWidth: wp("17.7763671875%"),
    height: hp("2.8233038271711175%"),
    minHeight: hp("2.8233038271711175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.3111083984375%"),
    top: hp("1.0929128511355874%")
  },
  ImageBackground_214_40: {
    width: wp("6.487476603190104%"),
    minWidth: wp("6.487476603190104%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.288891601562511%"),
    top: hp("1.2750344198258197%")
  },
  ImageBackground_214_44: {
    width: wp("4.072633616129558%"),
    minWidth: wp("4.072633616129558%"),
    height: hp("1.49802888026003%"),
    minHeight: hp("1.49802888026003%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.873885091145837%"),
    top: hp("1.2746675418374318%")
  },
  ImageBackground_214_48: {
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
  View_214_55: {
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
  ImageBackground_214_56: {
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
  View_214_58: {
    width: wp("100%"),
    height: hp("12.021857923497267%"),
    top: hp("98.90710382513662%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I214_58_48_58: {
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
  View_I214_58_48_59: {
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
  View_I214_58_48_60: {
    width: wp("32.800000000000004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.6%"),
    top: hp("4.098360655737693%"),
    justifyContent: "flex-start"
  },
  Text_I214_58_48_60: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_214_320: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("15.027322404371585%"),
    minHeight: hp("15.027322404371585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("23.224043715846996%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_214_325: {
    width: wp("43.733333333333334%"),
    height: hp("13.934426229508196%"),
    top: hp("0.5464480874316919%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_214_326: {
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666664%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_214_326: {
    color: "rgba(66, 67, 71, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.17777779698371887,
    textTransform: "none"
  },
  View_214_327: {
    width: wp("6.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666664%"),
    top: hp("6.010928961748633%"),
    justifyContent: "flex-start"
  },
  Text_214_327: {
    color: "rgba(66, 67, 71, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.1555556058883667,
    textTransform: "none"
  },
  View_214_328: {
    width: wp("3.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.266666666666666%"),
    top: hp("5.601092896174862%"),
    justifyContent: "flex-start"
  },
  Text_214_328: {
    color: "rgba(216, 216, 216, 1)",
    fontSize: 11,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_214_329: {
    width: wp("13.066666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.53333333333333%"),
    top: hp("6.010928961748633%"),
    justifyContent: "flex-start"
  },
  Text_214_329: {
    color: "rgba(115, 139, 243, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.1555556058883667,
    textTransform: "none"
  },
  View_214_330: {
    width: wp("26.400000000000002%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666664%"),
    top: hp("3.00546448087432%"),
    justifyContent: "flex-start"
  },
  Text_214_330: {
    color: "rgba(187, 187, 187, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_214_331: {
    width: wp("25.6%"),
    height: hp("4.371584699453552%"),
    top: hp("9.56284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666664%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_214_332: {
    width: wp("25.6%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_214_333: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(243, 243, 243, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 2
  },
  View_214_334: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.06666666666667%"),
    backgroundColor: "rgba(243, 243, 243, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 0
  },
  View_214_335: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333337%"),
    backgroundColor: "rgba(243, 243, 243, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_214_336: {
    width: wp("2.1333333333333333%"),
    height: hp("0.273224043715847%"),
    top: hp("2.0491803278688607%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000001%")
  },
  ImageBackground_214_337: {
    width: wp("2.1333333333333333%"),
    height: hp("1.092896174863388%"),
    top: hp("1.63934426229509%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.266666666666666%")
  },
  View_214_340: {
    width: wp("2.1333333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.733333333333336%"),
    top: hp("1.3661202185792405%"),
    justifyContent: "flex-start"
  },
  Text_214_340: {
    color: "rgba(187, 187, 187, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_214_341: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    top: hp("9.56284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.199999999999996%"),
    backgroundColor: "rgba(245, 245, 245, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_214_342: {
    width: wp("3.2%"),
    height: hp("1.912568306010929%"),
    top: hp("10.792349726775953%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.86666666666666%")
  },
  View_214_348: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(115, 139, 243, 1)",
    borderColor: "rgba(243, 243, 243, 1)",
    borderWidth: 1
  },
  ImageBackground_214_349: {
    width: wp("2.6667195638020833%"),
    height: hp("1.366133768050397%"),
    top: hp("0.4098235583696237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999755859374984%")
  },
  ImageBackground_214_350: {
    width: wp("25.333333333333336%"),
    height: hp("16.120218579234972%"),
    top: hp("0.5464480874316919%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.86666666666667%"),
    resizeMode: "cover",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_214_352: {
    width: wp("25.333333333333336%"),
    height: hp("16.120218579234972%"),
    top: hp("62.841530054644814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.46666666666667%"),
    resizeMode: "cover",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_214_351: {
    width: wp("25.333333333333336%"),
    height: hp("16.120218579234972%"),
    top: hp("44.39890710382514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.46666666666667%"),
    resizeMode: "cover",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_214_206: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("13.934426229508196%"),
    minHeight: hp("13.934426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("43.98907103825137%")
  },
  View_214_211: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("13.934426229508196%"),
    minHeight: hp("13.934426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_214_212: {
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666664%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_214_212: {
    color: "rgba(66, 67, 71, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.17777779698371887,
    textTransform: "none"
  },
  View_214_213: {
    width: wp("6.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666664%"),
    top: hp("6.010928961748633%"),
    justifyContent: "flex-start"
  },
  Text_214_213: {
    color: "rgba(66, 67, 71, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.1555556058883667,
    textTransform: "none"
  },
  View_214_214: {
    width: wp("3.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.866666666666664%"),
    top: hp("5.601092896174862%"),
    justifyContent: "flex-start"
  },
  Text_214_214: {
    color: "rgba(216, 216, 216, 1)",
    fontSize: 11,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_214_215: {
    width: wp("13.066666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.133333333333333%"),
    top: hp("6.010928961748633%"),
    justifyContent: "flex-start"
  },
  Text_214_215: {
    color: "rgba(115, 139, 243, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.1555556058883667,
    textTransform: "none"
  },
  View_214_216: {
    width: wp("26.400000000000002%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666664%"),
    top: hp("3.0054644808743163%"),
    justifyContent: "flex-start"
  },
  Text_214_216: {
    color: "rgba(187, 187, 187, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_214_217: {
    width: wp("25.6%"),
    height: hp("4.371584699453552%"),
    top: hp("9.562841530054648%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666664%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_214_218: {
    width: wp("25.6%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_214_219: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(243, 243, 243, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 2
  },
  View_214_220: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.06666666666667%"),
    backgroundColor: "rgba(243, 243, 243, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 0
  },
  View_214_221: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333337%"),
    backgroundColor: "rgba(243, 243, 243, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_214_222: {
    width: wp("2.1333333333333333%"),
    height: hp("0.273224043715847%"),
    top: hp("2.0491803278688465%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000001%")
  },
  ImageBackground_214_223: {
    width: wp("2.1333333333333333%"),
    height: hp("1.092896174863388%"),
    top: hp("1.6393442622950758%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.266666666666666%")
  },
  View_214_226: {
    width: wp("2.1333333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.733333333333336%"),
    top: hp("1.3661202185792334%"),
    justifyContent: "flex-start"
  },
  Text_214_226: {
    color: "rgba(187, 187, 187, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_214_227: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    top: hp("9.562841530054648%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.199999999999996%"),
    backgroundColor: "rgba(245, 245, 245, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_214_228: {
    width: wp("3.2%"),
    height: hp("1.912568306010929%"),
    top: hp("10.792349726775953%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.86666666666666%")
  },
  View_214_234: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(115, 139, 243, 1)",
    borderColor: "rgba(243, 243, 243, 1)",
    borderWidth: 1
  },
  ImageBackground_214_235: {
    width: wp("2.6667195638020833%"),
    height: hp("1.366133768050397%"),
    top: hp("0.4098225161026079%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999755859374984%")
  },
  View_214_236: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("13.934426229508196%"),
    minHeight: hp("13.934426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666666%"),
    top: hp("63.52459016393443%")
  },
  View_214_241: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("13.934426229508196%"),
    minHeight: hp("13.934426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_214_242: {
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666667%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_214_242: {
    color: "rgba(66, 67, 71, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.17777779698371887,
    textTransform: "none"
  },
  View_214_243: {
    width: wp("6.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666667%"),
    top: hp("6.01092896174864%"),
    justifyContent: "flex-start"
  },
  Text_214_243: {
    color: "rgba(66, 67, 71, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.1555556058883667,
    textTransform: "none"
  },
  View_214_244: {
    width: wp("3.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.866666666666667%"),
    top: hp("5.601092896174855%"),
    justifyContent: "flex-start"
  },
  Text_214_244: {
    color: "rgba(216, 216, 216, 1)",
    fontSize: 11,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_214_245: {
    width: wp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.133333333333336%"),
    top: hp("6.01092896174864%"),
    justifyContent: "flex-start"
  },
  Text_214_245: {
    color: "rgba(187, 187, 187, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.1555556058883667,
    textTransform: "none"
  },
  View_214_246: {
    width: wp("26.400000000000002%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666667%"),
    top: hp("3.0054644808743163%"),
    justifyContent: "flex-start"
  },
  Text_214_246: {
    color: "rgba(187, 187, 187, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_214_247: {
    width: wp("25.6%"),
    minWidth: wp("25.6%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666667%"),
    top: hp("9.562841530054648%")
  },
  View_214_248: {
    width: wp("25.6%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_214_249: {
    width: wp("25.6%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_214_250: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(243, 243, 243, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 2
  },
  View_214_251: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.066666666666663%"),
    backgroundColor: "rgba(243, 243, 243, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 0
  },
  View_214_252: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333333%"),
    backgroundColor: "rgba(243, 243, 243, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_214_253: {
    width: wp("2.1333333333333333%"),
    height: hp("0.273224043715847%"),
    top: hp("2.0491803278688394%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999993%")
  },
  ImageBackground_214_254: {
    width: wp("2.1333333333333333%"),
    height: hp("1.092896174863388%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.266666666666673%")
  },
  View_214_257: {
    width: wp("2.1333333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.733333333333333%"),
    top: hp("1.3661202185792263%"),
    justifyContent: "flex-start"
  },
  Text_214_257: {
    color: "rgba(187, 187, 187, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_214_258: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    top: hp("9.562841530054648%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.2%"),
    backgroundColor: "rgba(245, 245, 245, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_214_259: {
    width: wp("3.2%"),
    height: hp("1.912568306010929%"),
    top: hp("10.79234972677596%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.866666666666674%")
  },
  View_214_265: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(134, 136, 188, 1)",
    borderColor: "rgba(222, 222, 222, 1)",
    borderWidth: 2
  },
  ImageBackground_214_266: {
    width: wp("2.6667195638020833%"),
    height: hp("1.366133768050397%"),
    top: hp("0.4098225161026079%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999755859375002%")
  },
  View_214_272: {
    width: wp("88.53333333333333%"),
    height: hp("1.7759562841530054%"),
    top: hp("18.0327868852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_214_273: {
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.866666666666674%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_214_273: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_214_274: {
    width: wp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.66666666666667%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_214_274: {
    color: "rgba(62, 62, 62, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_214_275: {
    width: wp("11.466666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_214_275: {
    color: "rgba(187, 187, 187, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_214_276: {
    width: wp("2.9866455078125%"),
    height: hp("1.530049277133629%"),
    top: hp("0.05464814399761053%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.86666666666666%")
  },
  ImageBackground_214_277: {
    width: wp("2.933333333333333%"),
    height: hp("1.639344262295082%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.66666666666667%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
