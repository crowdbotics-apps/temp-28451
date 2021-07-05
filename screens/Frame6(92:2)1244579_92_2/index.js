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
      <View style={styles.View_92_168}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/97ce/ff87/877228e0009ed202ef4665484c31e94a"
          }}
          style={styles.ImageBackground_92_169}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/97ce/ff87/877228e0009ed202ef4665484c31e94a"
          }}
          style={styles.ImageBackground_92_170}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/97ce/ff87/877228e0009ed202ef4665484c31e94a"
          }}
          style={styles.ImageBackground_92_171}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f4c/c8c8/347f94164d17ba80441704a9dccea5cb"
          }}
          style={styles.ImageBackground_92_201}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f4c/c8c8/347f94164d17ba80441704a9dccea5cb"
          }}
          style={styles.ImageBackground_92_202}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f4c/c8c8/347f94164d17ba80441704a9dccea5cb"
          }}
          style={styles.ImageBackground_92_203}
        />
        <View style={styles.View_92_204}>
          <Text style={styles.Text_92_204}>28.00$</Text>
        </View>
        <View style={styles.View_92_205}>
          <Text style={styles.Text_92_205}>7.20$</Text>
        </View>
        <View style={styles.View_92_206}>
          <Text style={styles.Text_92_206}>Summary</Text>
        </View>
        <View style={styles.View_92_207}>
          <Text style={styles.Text_92_207}>35.20$</Text>
        </View>
        <View style={styles.View_92_208}>
          <Text style={styles.Text_92_208}>Ordered Items</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1747/2bf9/47cea7fb7317744accadbee06a505e2d"
          }}
          style={styles.ImageBackground_92_212}
        />
        <View style={styles.View_92_213} />
        <View style={styles.View_92_214}>
          <Text style={styles.Text_92_214}>CONTINUE SHOPPING</Text>
        </View>
        <View style={styles.View_92_215}>
          <Text style={styles.Text_92_215}>ORDER DETAILS</Text>
        </View>
        <View style={styles.View_92_216}>
          <Text style={styles.Text_92_216}>Order</Text>
        </View>
        <View style={styles.View_92_217}>
          <Text style={styles.Text_92_217}>Delivery</Text>
        </View>
        <View style={styles.View_166_24}>
          <Text style={styles.Text_166_24}>Payment</Text>
        </View>
        <View style={styles.View_130_54}>
          <Text style={styles.Text_130_54}>Order number: #9876543</Text>
        </View>
        <View style={styles.View_166_22}>
          <Text style={styles.Text_166_22}>
            {" "}
            you will recieve a confirmatioin message on your mobile
          </Text>
        </View>
        <View style={styles.View_166_26}>
          <Text style={styles.Text_166_26}> UPI </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/599b/fb4a/1db9e811d44905f5bf4ad43fe00308e3"
          }}
          style={styles.ImageBackground_166_27}
        />
        <View style={styles.View_289_54}>
          <Text style={styles.Text_289_54}>30-june-2021</Text>
        </View>
      </View>
      <View style={styles.View_130_1}>
        <Text style={styles.Text_130_1}>Order completed!</Text>
      </View>
      <View style={styles.View_144_45}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e39b/6304/3e8b0a116463fe5aa3b1b10520c3410f"
          }}
          style={styles.ImageBackground_144_46}
        />
        <View style={styles.View_144_47}>
          <View style={styles.View_144_48}>
            <View style={styles.View_144_49} />
            <View style={styles.View_144_50}>
              <Text style={styles.Text_144_50}> EXPLORE</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7977/bea6/2b0c922bcb79fde6220421f434bb7046"
              }}
              style={styles.ImageBackground_144_51}
            />
          </View>
        </View>
        <View style={styles.View_144_56}>
          <View style={styles.View_144_57} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/346a/9205/ed593c58de4096f93d4e809437d3bb55"
            }}
            style={styles.ImageBackground_144_58}
          />
          <View style={styles.View_144_63}>
            <Text style={styles.Text_144_63}>SHOP</Text>
          </View>
        </View>
        <View style={styles.View_144_64}>
          <View style={styles.View_144_65} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/332c/7b35/c5d0c1237a7415cdb79616b98e1286e4"
            }}
            style={styles.ImageBackground_144_66}
          />
          <View style={styles.View_144_69}>
            <Text style={styles.Text_144_69}> ACCOUNT</Text>
          </View>
        </View>
        <View style={styles.View_144_70} />
        <View style={styles.View_144_71}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20b3/4b80/7ff0eb940cc8793b41c100adf65490e6"
            }}
            style={styles.ImageBackground_144_72}
          />
          <View style={styles.View_144_73}>
            <View style={styles.View_144_74}>
              <View style={styles.View_144_75} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c05e/3310/5fa19be2dd61005af7ab5013fddc1070"
                }}
                style={styles.ImageBackground_144_76}
              />
              <View style={styles.View_144_81}>
                <Text style={styles.Text_144_81}> EXPLORE</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_144_82}>
            <View style={styles.View_144_83} />
            <View style={styles.View_144_84}>
              <Text style={styles.Text_144_84}>SHOP</Text>
            </View>
            <View style={styles.View_144_85} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c71/1bbe/48cba4b9223b7d65d92d006c36be5480"
              }}
              style={styles.ImageBackground_144_86}
            />
          </View>
          <View style={styles.View_144_87}>
            <View style={styles.View_144_88} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6bde/51bf/5f6a9efd5cf41a76dec550c0fc3d6a8f"
              }}
              style={styles.ImageBackground_144_90}
            />
            <View style={styles.View_247_48}>
              <Text style={styles.Text_247_48}>CHAT</Text>
            </View>
          </View>
          <View style={styles.View_144_91} />
        </View>
      </View>
      <View style={styles.View_177_29}>
        <View style={styles.View_177_30}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/71de/b363/e38f7ccb00bd0614a5b5e51813fbd79c"
            }}
            style={styles.ImageBackground_177_31}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ff/0c22/0b97200050a886088dbee23e6cec4be9"
            }}
            style={styles.ImageBackground_177_35}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
            }}
            style={styles.ImageBackground_177_39}
          />
        </View>
        <View style={styles.View_177_46}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94cc/b245/9af535a5ccb41c968f7147deb78a7ba3"
            }}
            style={styles.ImageBackground_177_47}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(115, 139, 243, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_92_168: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("83.06010928961749%"),
    minHeight: hp("83.06010928961749%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("23.633879781420767%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_92_169: {
    width: wp("2.3996393731299865%"),
    height: hp("1.3205460511921534%"),
    top: hp("14.01465785959379%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.73294521899933%")
  },
  ImageBackground_92_170: {
    width: wp("2.3996393731299865%"),
    height: hp("1.3205460511921534%"),
    top: hp("18.857384770294352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.132968334441486%")
  },
  ImageBackground_92_171: {
    width: wp("2.3996393731299865%"),
    height: hp("1.3205439666581285%"),
    top: hp("13.134161110132766%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.1329345703125%")
  },
  ImageBackground_92_201: {
    width: wp("100%"),
    height: hp("0.14675119535519124%"),
    top: hp("43.731293391660266%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_92_202: {
    width: wp("100%"),
    height: hp("0.14675119535519124%"),
    top: hp("36.10032712175547%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_92_203: {
    width: wp("100%"),
    height: hp("0.14675119535519124%"),
    top: hp("60.607464065968664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_92_204: {
    width: wp("10.666672726894946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.04255319148936%"),
    top: hp("44.94535519125683%"),
    justifyContent: "flex-start"
  },
  Text_92_204: {
    color: "rgba(66, 67, 71, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_92_205: {
    width: wp("8.77659574468085%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.8404255319149%"),
    top: hp("47.6775956284153%"),
    justifyContent: "flex-start"
  },
  Text_92_205: {
    color: "rgba(66, 67, 71, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_92_206: {
    width: wp("17.066667435017038%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.399990649933511%"),
    top: hp("53.551912568306015%"),
    justifyContent: "flex-start"
  },
  Text_92_206: {
    color: "rgba(66, 67, 71, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_92_207: {
    width: wp("12.533333960999835%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.0666672726895%"),
    top: hp("53.551912568306015%"),
    justifyContent: "flex-start"
  },
  Text_92_207: {
    color: "rgba(66, 67, 71, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_92_208: {
    width: wp("26.933333214293135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.399990649933511%"),
    top: hp("39.34426229508196%"),
    justifyContent: "flex-start"
  },
  Text_92_208: {
    color: "rgba(66, 67, 71, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_92_212: {
    width: wp("100%"),
    height: hp("8.804954987406079%"),
    top: hp("59.97267759562842%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.26595744680851063%")
  },
  View_92_213: {
    width: wp("100%"),
    height: hp("8.804954987406079%"),
    top: hp("68.67867558380294%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.2666716879986702%"),
    backgroundColor: "rgba(155, 155, 155, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_92_214: {
    width: wp("61.43617021276596%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.9468085106383%"),
    top: hp("63.3879781420765%"),
    justifyContent: "flex-start"
  },
  Text_92_214: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.8666666746139526,
    textTransform: "none"
  },
  View_92_215: {
    width: wp("57.97872340425532%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.27659574468085%"),
    top: hp("71.44808743169398%"),
    justifyContent: "flex-start"
  },
  Text_92_215: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.8666666746139526,
    textTransform: "none"
  },
  View_92_216: {
    width: wp("8.533333717508519%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.382978723404255%"),
    top: hp("44.94535519125683%"),
    justifyContent: "flex-start"
  },
  Text_92_216: {
    color: "rgba(66, 67, 71, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_92_217: {
    width: wp("12.26666734573689%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.382978723404255%"),
    top: hp("47.6775956284153%"),
    justifyContent: "flex-start"
  },
  Text_92_217: {
    color: "rgba(66, 67, 71, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_166_24: {
    width: wp("13.563829787234042%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.382978723404255%"),
    top: hp("50.819672131147534%"),
    justifyContent: "flex-start"
  },
  Text_166_24: {
    color: "rgba(66, 67, 71, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_130_54: {
    width: wp("41.86666772720661%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.33333376620678%"),
    top: hp("25.546448087431692%"),
    justifyContent: "flex-start"
  },
  Text_130_54: {
    color: "rgba(153, 153, 153, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_166_22: {
    width: wp("97.07446808510637%"),
    minWidth: wp("97.07446808510637%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.3297872340425532%"),
    top: hp("21.448087431693985%"),
    justifyContent: "flex-start"
  },
  Text_166_22: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_166_26: {
    width: wp("11.96808510638298%"),
    minWidth: wp("11.96808510638298%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.77659574468085%"),
    top: hp("50.819672131147534%"),
    justifyContent: "flex-start"
  },
  Text_166_26: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_166_27: {
    width: wp("32.71276595744681%"),
    minWidth: wp("32.71276595744681%"),
    height: hp("18.0327868852459%"),
    minHeight: hp("18.0327868852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.244680851063826%"),
    top: hp("0.8196721311475379%"),
    resizeMode: "cover"
  },
  View_289_54: {
    width: wp("35.1063829787234%"),
    minWidth: wp("35.1063829787234%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.68085106382979%"),
    top: hp("31.693989071038253%"),
    justifyContent: "flex-start"
  },
  Text_289_54: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_130_1: {
    width: wp("76.59574468085107%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.436170212765957%"),
    top: hp("8.879781420765028%"),
    justifyContent: "flex-start"
  },
  Text_130_1: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_144_45: {
    width: wp("99.7340425531915%"),
    height: hp("9.972677595628415%"),
    top: hp("100.95628415300546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.26595744680851063%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_144_46: {
    width: wp("99.7340425531915%"),
    height: hp("9.972677595628415%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_144_47: {
    flexGrow: 1,
    width: wp("26.329787234042552%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.5957446808510638%"),
    top: hp("-0.4098360655737565%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_144_48: {
    width: wp("26.329787234042552%"),
    height: hp("10.92896174863388%"),
    top: hp("-0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.914893617021276%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_144_49: {
    width: wp("26.329787234042552%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_144_50: {
    width: wp("16.48936170212766%"),
    minWidth: wp("16.48936170212766%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.585106382978723%"),
    top: hp("8.469945355191257%"),
    justifyContent: "flex-start"
  },
  Text_144_50: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_144_51: {
    width: wp("6.382978723404255%"),
    height: hp("3.278688524590164%"),
    top: hp("3.8251366120218506%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.106382978723403%")
  },
  View_144_56: {
    flexGrow: 1,
    width: wp("30.0531914893617%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.702127659574465%"),
    top: hp("-0.9562841530054556%"),
    backgroundColor: "rgba(229, 229, 229, 1)"
  },
  View_144_57: {
    width: wp("30.0531914893617%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_144_58: {
    width: wp("6.382978723404255%"),
    height: hp("3.278688524590164%"),
    top: hp("3.825136612021865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.96808510638298%")
  },
  View_144_63: {
    width: wp("10.106382978723403%"),
    minWidth: wp("10.106382978723403%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.436170212765958%"),
    top: hp("8.469945355191257%"),
    justifyContent: "flex-start"
  },
  Text_144_63: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_144_64: {
    flexGrow: 1,
    width: wp("26.329787234042552%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.40425531914893%"),
    top: hp("-0.9562841530054556%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_144_65: {
    width: wp("26.329787234042552%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_144_66: {
    width: wp("6.382978723404255%"),
    height: hp("3.278688524590164%"),
    top: hp("3.825136612021865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.106382978723403%")
  },
  View_144_69: {
    width: wp("17.02127659574468%"),
    minWidth: wp("17.02127659574468%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.7872340425531945%"),
    top: hp("8.606557377049185%"),
    justifyContent: "flex-start"
  },
  Text_144_69: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_144_70: {
    flexGrow: 1,
    width: wp("99.7340425531915%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.9562841530054556%"),
    backgroundColor: "rgba(217, 208, 227, 1)"
  },
  View_144_71: {
    width: wp("99.7340425531915%"),
    height: hp("9.972677595628415%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_144_72: {
    width: wp("99.7340425531915%"),
    height: hp("9.972677595628415%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_144_73: {
    flexGrow: 1,
    width: wp("30.319148936170215%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.9562841530054556%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_144_74: {
    width: wp("30.319148936170215%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_144_75: {
    width: wp("30.319148936170215%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_144_76: {
    width: wp("6.117021276595745%"),
    height: hp("3.415300546448088%"),
    top: hp("3.1420765027322375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.96808510638298%")
  },
  View_144_81: {
    width: wp("16.48936170212766%"),
    minWidth: wp("16.48936170212766%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.9787234042553195%"),
    top: hp("8.469945355191257%"),
    justifyContent: "flex-start"
  },
  Text_144_81: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_144_82: {
    flexGrow: 1,
    width: wp("39.09574468085106%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.319148936170212%"),
    top: hp("-0.9562841530054556%"),
    backgroundColor: "rgba(229, 229, 229, 1)"
  },
  View_144_83: {
    width: wp("39.09574468085106%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_144_84: {
    width: wp("10.106382978723403%"),
    minWidth: wp("10.106382978723403%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.957446808510639%"),
    top: hp("8.469945355191257%"),
    justifyContent: "flex-start"
  },
  Text_144_84: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_144_85: {
    width: wp("8.51063829787234%"),
    minWidth: wp("8.51063829787234%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.042553191489361%"),
    top: hp("3.278688524590166%")
  },
  ImageBackground_144_86: {
    width: wp("6.382978723404255%"),
    minWidth: wp("6.382978723404255%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.62765957446809%"),
    top: hp("3.825136612021865%"),
    resizeMode: "cover"
  },
  View_144_87: {
    flexGrow: 1,
    width: wp("30.319148936170215%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.41489361702128%"),
    top: hp("-0.9562841530054556%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_144_88: {
    width: wp("30.319148936170215%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_144_90: {
    width: wp("5.585106382978723%"),
    minWidth: wp("5.585106382978723%"),
    height: hp("3.1420765027322406%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.90425531914893%"),
    top: hp("3.278688524590166%"),
    resizeMode: "cover"
  },
  View_247_48: {
    width: wp("23.138297872340424%"),
    minWidth: wp("23.138297872340424%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.90425531914893%"),
    top: hp("8.606557377049185%"),
    justifyContent: "flex-start"
  },
  Text_247_48: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_144_91: {
    flexGrow: 1,
    width: wp("99.7340425531915%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.9562841530054556%"),
    backgroundColor: "rgba(217, 208, 227, 1)"
  },
  View_177_29: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.5319148936170213%"),
    top: hp("0%"),
    backgroundColor: "rgba(115, 139, 243, 1)",
    overflow: "hidden"
  },
  View_177_30: {
    width: wp("17.72908961519282%"),
    minWidth: wp("17.72908961519282%"),
    height: hp("2.8233038271711175%"),
    minHeight: hp("2.8233038271711175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.36878350440493%"),
    top: hp("1.0929128511355874%")
  },
  ImageBackground_177_31: {
    width: wp("6.470222676053961%"),
    minWidth: wp("6.470222676053961%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.258876070063167%"),
    top: hp("1.2750344198258197%")
  },
  ImageBackground_177_35: {
    width: wp("4.0618018901094475%"),
    minWidth: wp("4.0618018901094475%"),
    height: hp("1.4980287499766531%"),
    minHeight: hp("1.4980287499766531%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.858271172706125%"),
    top: hp("1.2746675418374318%")
  },
  ImageBackground_177_39: {
    width: wp("4.521276595744681%"),
    minWidth: wp("4.521276595744681%"),
    height: hp("1.4571949432456428%"),
    minHeight: hp("1.4571949432456428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.3205606429303276%")
  },
  View_177_46: {
    width: wp("14.361702127659576%"),
    minWidth: wp("14.361702127659576%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.585106382978722%"),
    top: hp("1.639344262295082%")
  },
  ImageBackground_177_47: {
    width: wp("14.361702127659576%"),
    minWidth: wp("14.361702127659576%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
