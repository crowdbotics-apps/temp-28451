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
      <View style={styles.View_144_213}>
        <View style={styles.View_144_217} />
        <View style={styles.View_144_221}>
          <Text style={styles.Text_144_221}>Oh, cool 👍👍</Text>
        </View>
      </View>
      <View style={styles.View_144_235}>
        <View style={styles.View_144_242} />
        <View style={styles.View_144_243}>
          <Text style={styles.Text_144_243}>Thanks for contacting</Text>
        </View>
        <View style={styles.View_144_223}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5692/6435/7c25405a5cdad548eff4dfb20985d2b6"
            }}
            style={styles.ImageBackground_144_224}
          />
        </View>
      </View>
      <View style={styles.View_144_279}>
        <View style={styles.View_144_285} />
        <View style={styles.View_166_28}>
          <Text style={styles.Text_166_28}>
            try Amla juice and drink alot of water
          </Text>
        </View>
      </View>
      <View style={styles.View_144_323}>
        <View style={styles.View_144_324} />
        <View style={styles.View_144_325}>
          <Text style={styles.Text_144_325}>TUE · 14:48 PM</Text>
        </View>
      </View>
      <View style={styles.View_144_326}>
        <View style={styles.View_144_327} />
        <View style={styles.View_144_334}>
          <Text style={styles.Text_144_334}>
            Hey there! I am suffering from stomach ache
          </Text>
        </View>
      </View>
      <View style={styles.View_144_336}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5692/6435/7c25405a5cdad548eff4dfb20985d2b6"
          }}
          style={styles.ImageBackground_144_337}
        />
      </View>
      <View style={styles.View_144_440}>
        <View style={styles.View_I144_440_48_5} />
        <View source={{ uri: "null" }} style={styles.View_I144_440_48_6} />
      </View>
      <View style={styles.View_244_845}>
        <View style={styles.View_244_846} />
      </View>
      <View style={styles.View_166_125}>
        <View style={styles.View_166_126}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/71de/b363/e38f7ccb00bd0614a5b5e51813fbd79c"
            }}
            style={styles.ImageBackground_166_127}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ff/0c22/0b97200050a886088dbee23e6cec4be9"
            }}
            style={styles.ImageBackground_166_131}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
            }}
            style={styles.ImageBackground_166_135}
          />
        </View>
        <View style={styles.View_166_142}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94cc/b245/9af535a5ccb41c968f7147deb78a7ba3"
            }}
            style={styles.ImageBackground_166_143}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0374/f488/fc87df3c570fa03669b00907f98ebc22"
        }}
        style={styles.ImageBackground_166_124}
      />
      <View style={styles.View_166_123}>
        <Text style={styles.Text_166_123}>Dr. suhani</Text>
      </View>
      <View style={styles.View_166_76}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/77ff/ad03/20b2dbadc946e676d3b19c7dcbeac2bd"
          }}
          style={styles.ImageBackground_166_77}
        />
        <View style={styles.View_166_78}>
          <View style={styles.View_166_79}>
            <View style={styles.View_166_80} />
            <View style={styles.View_166_81}>
              <Text style={styles.Text_166_81}> EXPLORE</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7977/bea6/2b0c922bcb79fde6220421f434bb7046"
              }}
              style={styles.ImageBackground_166_82}
            />
          </View>
        </View>
        <View style={styles.View_166_87}>
          <View style={styles.View_166_88} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/346a/9205/ed593c58de4096f93d4e809437d3bb55"
            }}
            style={styles.ImageBackground_166_89}
          />
          <View style={styles.View_166_94}>
            <Text style={styles.Text_166_94}>SHOP</Text>
          </View>
        </View>
        <View style={styles.View_166_95}>
          <View style={styles.View_166_96} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/332c/7b35/c5d0c1237a7415cdb79616b98e1286e4"
            }}
            style={styles.ImageBackground_166_97}
          />
          <View style={styles.View_166_100}>
            <Text style={styles.Text_166_100}> ACCOUNT</Text>
          </View>
        </View>
        <View style={styles.View_166_101} />
        <View style={styles.View_166_102}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/911f/c027/ef1f44bade8961d145e9c8b142e0bad4"
            }}
            style={styles.ImageBackground_166_103}
          />
          <View style={styles.View_166_104}>
            <View style={styles.View_166_105}>
              <View style={styles.View_166_106} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c05e/3310/5fa19be2dd61005af7ab5013fddc1070"
                }}
                style={styles.ImageBackground_166_107}
              />
              <View style={styles.View_166_112}>
                <Text style={styles.Text_166_112}> EXPLORE</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_166_113}>
            <View style={styles.View_166_114} />
            <View style={styles.View_166_115}>
              <Text style={styles.Text_166_115}>SHOP</Text>
            </View>
            <View style={styles.View_166_116} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c71/1bbe/48cba4b9223b7d65d92d006c36be5480"
              }}
              style={styles.ImageBackground_166_117}
            />
          </View>
          <View style={styles.View_166_118}>
            <View style={styles.View_166_119} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6bde/51bf/5f6a9efd5cf41a76dec550c0fc3d6a8f"
              }}
              style={styles.ImageBackground_166_121}
            />
            <View style={styles.View_247_49}>
              <Text style={styles.Text_247_49}>CHAT</Text>
            </View>
          </View>
          <View style={styles.View_166_122} />
        </View>
      </View>
      <View style={styles.View_189_44}>
        <View style={styles.View_189_45} />
        <View style={styles.View_189_46}>
          <Text style={styles.Text_189_46}>Message...</Text>
        </View>
        <View style={styles.View_189_47}>
          <View style={styles.View_189_48} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/671a/be8e/d17243a1c6b8dc0d4fe1b4e809b979cd"
            }}
            style={styles.ImageBackground_189_49}
          />
        </View>
        <View style={styles.View_189_58}>
          <View style={styles.View_189_59} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8a13/17f1/4f2c6672a3613de5d335f1d76da71f76"
            }}
            style={styles.ImageBackground_189_61}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/61c5/7ab2/bf3f1b2633e2b691b05553b174b8f3d1"
          }}
          style={styles.ImageBackground_189_62}
        />
      </View>
      <View style={styles.View_189_64} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c621/e421/3d57814f82bf3cf3f5ab9f36754e216a"
        }}
        style={styles.ImageBackground_189_65}
      />
      <View style={styles.View_216_429}>
        <View style={styles.View_216_430} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c5f/2d2c/05fcbbf32edfdd2088a2421d20776dc2"
          }}
          style={styles.ImageBackground_216_432}
        />
      </View>
      <View style={styles.View_244_847}>
        <Text style={styles.Text_244_847}>SLOTS</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_144_213: {
    flexGrow: 1,
    width: wp("47.733333333333334%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.13333333333333%"),
    top: hp("72.81420765027322%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_144_217: {
    flexGrow: 1,
    width: wp("33.86666666666667%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.866666666666667%"),
    top: hp("0%"),
    backgroundColor: "rgba(146, 179, 138, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 2
  },
  View_144_221: {
    flexGrow: 1,
    width: wp("27.46666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.06666666666667%"),
    top: hp("1.7759562841530112%"),
    justifyContent: "center"
  },
  Text_144_221: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_144_235: {
    flexGrow: 1,
    width: wp("84.53333333333333%"),
    height: hp("9.426229508196721%"),
    minHeight: hp("9.426229508196721%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333333%"),
    top: hp("81.4207650273224%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_144_242: {
    flexGrow: 1,
    width: wp("70.93333333333334%"),
    height: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.491666666666667%"),
    top: hp("0.07847853697063556%"),
    backgroundColor: "rgba(115, 139, 243, 1)",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_144_243: {
    flexGrow: 1,
    width: wp("64.53333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.691666666666666%"),
    top: hp("2.127658864839475%"),
    justifyContent: "center"
  },
  Text_144_243: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_144_223: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.5027322404371546%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_144_224: {
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
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
  View_144_279: {
    flexGrow: 1,
    width: wp("76.30687662760417%"),
    height: hp("6.6292116550799935%"),
    minHeight: hp("6.6292116550799935%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.866666666666665%"),
    top: hp("64.75409836065575%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_144_285: {
    flexGrow: 1,
    width: wp("62.44061279296875%"),
    height: hp("6.659568724085073%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.05307223627477242%"),
    backgroundColor: "rgba(115, 139, 243, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_166_28: {
    width: wp("46.13333333333333%"),
    minWidth: wp("46.13333333333333%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666703%"),
    top: hp("1.5027239023010424%"),
    justifyContent: "center"
  },
  Text_166_28: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_144_323: {
    width: wp("30.933333333333334%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.2%"),
    top: hp("47.404371584699454%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_144_324: {
    flexGrow: 1,
    width: wp("30.933333333333334%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(242, 242, 242, 1)",
    borderTopLeftRadius: 99,
    borderTopRightRadius: 99,
    borderBottomLeftRadius: 99,
    borderBottomRightRadius: 99
  },
  View_144_325: {
    flexGrow: 1,
    width: wp("22.400000000000002%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666669%"),
    justifyContent: "center"
  },
  Text_144_325: {
    color: "rgba(153, 153, 153, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_144_326: {
    flexGrow: 1,
    width: wp("78.93333333333334%"),
    height: hp("9.368096023309427%"),
    minHeight: hp("9.368096023309427%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.066666666666666%"),
    top: hp("55.46448087431693%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_144_327: {
    flexGrow: 1,
    width: wp("65.33333333333333%"),
    height: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.49166666666667%"),
    top: hp("0.07847853697064266%"),
    backgroundColor: "rgba(146, 179, 138, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_144_334: {
    flexGrow: 1,
    width: wp("58.93333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.691666666666666%"),
    top: hp("0.8981506681181699%"),
    justifyContent: "center"
  },
  Text_144_334: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_144_336: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333333%"),
    top: hp("66.2568306010929%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_144_337: {
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
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
  View_144_440: {
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
  View_I144_440_48_5: {
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
  View_I144_440_48_6: {
    flexGrow: 1,
    width: wp("1.4492757161458334%"),
    height: hp("1.8271857923497268%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.0724609375%"),
    top: hp("9.440462706518955%")
  },
  View_244_845: {
    width: wp("21.866666666666667%"),
    minWidth: wp("21.866666666666667%"),
    height: hp("4.781420765027322%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.53333333333333%"),
    top: hp("8.060109289617486%")
  },
  View_244_846: {
    width: wp("21.866666666666667%"),
    minWidth: wp("21.866666666666667%"),
    height: hp("4.781420765027322%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(146, 179, 138, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_166_125: {
    flexGrow: 1,
    width: wp("100.26666666666667%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(115, 139, 243, 1)",
    overflow: "hidden"
  },
  View_166_126: {
    width: wp("17.7763671875%"),
    minWidth: wp("17.7763671875%"),
    height: hp("2.8233038271711175%"),
    minHeight: hp("2.8233038271711175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.57776692708333%"),
    top: hp("1.0929128511355874%")
  },
  ImageBackground_166_127: {
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
  ImageBackground_166_131: {
    width: wp("4.072633361816407%"),
    minWidth: wp("4.072633361816407%"),
    height: hp("1.4980287499766531%"),
    minHeight: hp("1.4980287499766531%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.873893229166669%"),
    top: hp("1.2746675418374318%")
  },
  ImageBackground_166_135: {
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
  View_166_142: {
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
  ImageBackground_166_143: {
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
  ImageBackground_166_124: {
    width: wp("1.4570154825846355%"),
    height: hp("1.841950546848318%"),
    top: hp("9.516748313695356%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.099544270833333%")
  },
  View_166_123: {
    width: wp("43.733333333333334%"),
    top: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    justifyContent: "flex-start"
  },
  Text_166_123: {
    color: "rgba(254, 254, 255, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_166_76: {
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
  ImageBackground_166_77: {
    width: wp("100%"),
    height: hp("9.972677595628415%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_166_78: {
    flexGrow: 1,
    width: wp("26.400000000000002%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.6%"),
    top: hp("-0.4098360655737565%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_166_79: {
    width: wp("26.400000000000002%"),
    height: hp("10.92896174863388%"),
    top: hp("-0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_166_80: {
    width: wp("26.400000000000002%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_166_81: {
    width: wp("16.53333333333333%"),
    minWidth: wp("16.53333333333333%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6%"),
    top: hp("8.469945355191257%"),
    justifyContent: "flex-start"
  },
  Text_166_81: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_166_82: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("3.8251366120218506%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.133333333333333%")
  },
  View_166_87: {
    flexGrow: 1,
    width: wp("30.133333333333333%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.8%"),
    top: hp("-0.9562841530054556%"),
    backgroundColor: "rgba(229, 229, 229, 1)"
  },
  View_166_88: {
    width: wp("30.133333333333333%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_166_89: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("3.825136612021865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  View_166_94: {
    width: wp("10.133333333333333%"),
    minWidth: wp("10.133333333333333%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.466666666666669%"),
    top: hp("8.469945355191257%"),
    justifyContent: "flex-start"
  },
  Text_166_94: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_166_95: {
    flexGrow: 1,
    width: wp("26.400000000000002%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.6%"),
    top: hp("-0.9562841530054556%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_166_96: {
    width: wp("26.400000000000002%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_166_97: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("3.825136612021865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.13333333333334%")
  },
  View_166_100: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.800000000000011%"),
    top: hp("8.606557377049185%"),
    justifyContent: "flex-start"
  },
  Text_166_100: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_166_101: {
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
  View_166_102: {
    width: wp("100%"),
    height: hp("9.972677595628415%"),
    top: hp("0.2732240437158566%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333335%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_166_103: {
    width: wp("100%"),
    height: hp("9.972677595628415%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_166_104: {
    flexGrow: 1,
    width: wp("32.53333333333333%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.9562841530054698%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_166_105: {
    width: wp("32.53333333333333%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_166_106: {
    width: wp("32.53333333333333%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_166_107: {
    width: wp("6.133333333333333%"),
    height: hp("3.415300546448088%"),
    top: hp("3.1420765027322517%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.066666666666665%")
  },
  View_166_112: {
    width: wp("16.53333333333333%"),
    minWidth: wp("16.53333333333333%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("8.469945355191271%"),
    justifyContent: "flex-start"
  },
  Text_166_112: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_166_113: {
    flexGrow: 1,
    width: wp("34.66666666666667%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.53333333333333%"),
    top: hp("-0.9562841530054698%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_166_114: {
    width: wp("34.66666666666667%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_166_115: {
    width: wp("10.133333333333333%"),
    minWidth: wp("10.133333333333333%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.799999999999997%"),
    top: hp("8.469945355191271%"),
    justifyContent: "flex-start"
  },
  Text_166_115: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_166_116: {
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
  ImageBackground_166_117: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.666666666666664%"),
    top: hp("3.8251366120218506%"),
    resizeMode: "cover"
  },
  View_166_118: {
    flexGrow: 1,
    width: wp("32.800000000000004%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.2%"),
    top: hp("-0.9562841530054698%"),
    backgroundColor: "rgba(229, 229, 229, 1)"
  },
  View_166_119: {
    width: wp("32.800000000000004%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_166_121: {
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
  View_247_49: {
    width: wp("23.200000000000003%"),
    minWidth: wp("23.200000000000003%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.933333333333337%"),
    top: hp("7.513661202185787%"),
    justifyContent: "flex-start"
  },
  Text_247_49: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_166_122: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.9562841530054698%"),
    backgroundColor: "rgba(217, 208, 227, 1)"
  },
  View_189_44: {
    width: wp("91.73333333333333%"),
    minWidth: wp("91.73333333333333%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.733333333333334%"),
    top: hp("93.5792349726776%")
  },
  View_189_45: {
    flexGrow: 1,
    width: wp("50.66666666666667%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.06666666666667%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 99,
    borderTopRightRadius: 99,
    borderBottomLeftRadius: 99,
    borderBottomRightRadius: 99
  },
  View_189_46: {
    flexGrow: 1,
    width: wp("49.86666666666667%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.2%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_189_46: {
    color: "rgba(224, 224, 224, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_189_47: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874316848%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_189_48: {
    width: wp("8%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(105, 121, 248, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_189_49: {
    width: wp("5.6000000000000005%"),
    height: hp("2.8688524590163933%"),
    top: hp("0.6147540983606632%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1999999999999997%")
  },
  View_189_58: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.133333333333331%"),
    top: hp("0.5464480874316848%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_189_59: {
    width: wp("8%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(105, 121, 248, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_189_61: {
    width: wp("5.333333333333334%"),
    height: hp("2.5956284153005464%"),
    top: hp("0.6830601092896273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.333333333333334%"),
    resizeMode: "cover"
  },
  ImageBackground_189_62: {
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    top: hp("0.4098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.46666666666667%")
  },
  View_189_64: {
    width: wp("8%"),
    height: hp("4.098360655737705%"),
    top: hp("94.12568306010928%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.733333333333334%"),
    backgroundColor: "rgba(105, 121, 248, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_189_65: {
    width: wp("3.929824574788411%"),
    minWidth: wp("3.929824574788411%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.866666666666667%"),
    top: hp("94.80874316939891%"),
    resizeMode: "cover"
  },
  View_216_429: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.86666666666667%"),
    top: hp("94.12568306010928%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_216_430: {
    width: wp("8%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(105, 121, 248, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_216_432: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0.6830601092896273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333286%"),
    resizeMode: "cover"
  },
  View_244_847: {
    width: wp("16.266666666666666%"),
    minWidth: wp("16.266666666666666%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.93333333333334%"),
    top: hp("8.879781420765028%"),
    justifyContent: "flex-start"
  },
  Text_244_847: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
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
