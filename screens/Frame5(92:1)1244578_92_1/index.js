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
      <View style={styles.View_92_76}>
        <View style={styles.View_I92_76_48_5} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/726f/03f2/437af520dee754420356b58bfd20012c"
          }}
          style={styles.ImageBackground_I92_76_48_6}
        />
        <View style={styles.View_I92_76_48_55}>
          <Text style={styles.Text_I92_76_48_55}>Products</Text>
        </View>
      </View>
      <View style={styles.View_176_129}>
        <View style={styles.View_176_130} />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec73/1296/f0d9be3eaf9891c20a90716c0c5f1bd5"
        }}
        style={styles.ImageBackground_176_131}
      />
      <View style={styles.View_92_155}>
        <View style={styles.View_92_156}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7783/438e/d6b3acdb96eff63d47319d7c803fbda2"
            }}
            style={styles.ImageBackground_92_157}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0aa0/492b/f3ee70c2515d6824c8b2970118c8c5d9"
            }}
            style={styles.ImageBackground_92_158}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/47e0/67a6/18dbff3cb6aa472d0deefd7b427e97a9"
            }}
            style={styles.ImageBackground_92_159}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/47e0/67a6/18dbff3cb6aa472d0deefd7b427e97a9"
            }}
            style={styles.ImageBackground_92_160}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a77/904e/0cd546071f4b0d608db2a08c74dedf9d"
            }}
            style={styles.ImageBackground_92_161}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d0f7/2d7e/b9c566e54df988337e68c54f43472ec7"
            }}
            style={styles.ImageBackground_92_164}
          />
        </View>
        <View style={styles.View_92_165} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4158/f915/06c627a56d11d1d21c1f251d05d202b5"
          }}
          style={styles.ImageBackground_92_166}
        />
        <View style={styles.View_92_167}>
          <Text style={styles.Text_92_167}>3</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/02d2/ced9/f17e9d41b5a036bed06e83b5ec9c4ce5"
        }}
        style={styles.ImageBackground_92_100}
      />
      <View style={styles.View_92_101}>
        <Text style={styles.Text_92_101}>Sort</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ba63/fb9e/4b2d64d34d18170b0305bb33724757d6"
        }}
        style={styles.ImageBackground_92_102}
      />
      <View style={styles.View_92_107}>
        <Text style={styles.Text_92_107}>Filter</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/651d/6d02/21890ae0757716fb97302414d7968fff"
        }}
        style={styles.ImageBackground_92_108}
      />
      <View style={styles.View_92_111} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5097/7187/4ce2fda5455a18622996fcc829392759"
        }}
        style={styles.ImageBackground_216_361}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3dbc/5f45/7a10d4f5e4a00d91b361833141068169"
        }}
        style={styles.ImageBackground_92_112}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a952/0128/e4720c5632ce84683d1ee096f4bf98c4"
        }}
        style={styles.ImageBackground_92_113}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6270/5258/178cf76a7fa495de823bfbf08b633ace"
        }}
        style={styles.ImageBackground_92_114}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f27f/b659/0d235d1314dd0dbd6d343958e4092426"
        }}
        style={styles.ImageBackground_92_141}
      />
      <View style={styles.View_92_115}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da63/f18c/a5ab8554276bd844eb3c1f68b2749935"
          }}
          style={styles.ImageBackground_92_116}
        />
        <View style={styles.View_92_117}>
          <View style={styles.View_92_118}>
            <View style={styles.View_92_119} />
            <View style={styles.View_92_120}>
              <Text style={styles.Text_92_120}> EXPLORE</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7977/bea6/2b0c922bcb79fde6220421f434bb7046"
              }}
              style={styles.ImageBackground_92_121}
            />
          </View>
        </View>
        <View style={styles.View_92_126}>
          <View style={styles.View_92_127} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/346a/9205/ed593c58de4096f93d4e809437d3bb55"
            }}
            style={styles.ImageBackground_92_128}
          />
          <View style={styles.View_92_133}>
            <Text style={styles.Text_92_133}>SHOP</Text>
          </View>
        </View>
        <View style={styles.View_92_134}>
          <View style={styles.View_92_135} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/332c/7b35/c5d0c1237a7415cdb79616b98e1286e4"
            }}
            style={styles.ImageBackground_92_136}
          />
          <View style={styles.View_92_139}>
            <Text style={styles.Text_92_139}> ACCOUNT</Text>
          </View>
        </View>
        <View style={styles.View_92_140} />
      </View>
      <View style={styles.View_130_2}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd89/709c/ccfd1e707f841a8e38a07ea19abb097e"
          }}
          style={styles.ImageBackground_130_3}
        />
        <View style={styles.View_130_4}>
          <View style={styles.View_130_5}>
            <View style={styles.View_130_6} />
            <View style={styles.View_130_7}>
              <Text style={styles.Text_130_7}> EXPLORE</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7977/bea6/2b0c922bcb79fde6220421f434bb7046"
              }}
              style={styles.ImageBackground_130_8}
            />
          </View>
        </View>
        <View style={styles.View_130_13}>
          <View style={styles.View_130_14} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/346a/9205/ed593c58de4096f93d4e809437d3bb55"
            }}
            style={styles.ImageBackground_130_15}
          />
          <View style={styles.View_130_20}>
            <Text style={styles.Text_130_20}>SHOP</Text>
          </View>
        </View>
        <View style={styles.View_130_21}>
          <View style={styles.View_130_22} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/332c/7b35/c5d0c1237a7415cdb79616b98e1286e4"
            }}
            style={styles.ImageBackground_130_23}
          />
          <View style={styles.View_130_26}>
            <Text style={styles.Text_130_26}> ACCOUNT</Text>
          </View>
        </View>
        <View style={styles.View_130_27} />
        <View style={styles.View_144_24}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/12b3/e109/f20633fa8ac165f7a2de94899ae773b2"
            }}
            style={styles.ImageBackground_144_25}
          />
          <View style={styles.View_144_26}>
            <View style={styles.View_144_27}>
              <View style={styles.View_144_28} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c05e/3310/5fa19be2dd61005af7ab5013fddc1070"
                }}
                style={styles.ImageBackground_144_29}
              />
              <View style={styles.View_144_34}>
                <Text style={styles.Text_144_34}> EXPLORE</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_144_35}>
            <View style={styles.View_144_36} />
            <View style={styles.View_144_37}>
              <Text style={styles.Text_144_37}>SHOP</Text>
            </View>
            <View style={styles.View_144_38} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c71/1bbe/48cba4b9223b7d65d92d006c36be5480"
              }}
              style={styles.ImageBackground_144_39}
            />
          </View>
          <View style={styles.View_144_40}>
            <View style={styles.View_144_41} />
            <View style={styles.View_247_45}>
              <Text style={styles.Text_247_45}>CHAT</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6bde/51bf/5f6a9efd5cf41a76dec550c0fc3d6a8f"
              }}
              style={styles.ImageBackground_144_43}
            />
          </View>
          <View style={styles.View_144_44} />
        </View>
      </View>
      <View style={styles.View_92_142}>
        <Text style={styles.Text_92_142}>Item name</Text>
      </View>
      <View style={styles.View_92_144}>
        <Text style={styles.Text_92_144}>Item name</Text>
      </View>
      <View style={styles.View_121_10}>
        <Text style={styles.Text_121_10}>Item name</Text>
      </View>
      <View style={styles.View_121_9}>
        <Text style={styles.Text_121_9}>Item name</Text>
      </View>
      <View style={styles.View_121_13}>
        <Text style={styles.Text_121_13}>Item name</Text>
      </View>
      <View style={styles.View_92_146}>
        <Text style={styles.Text_92_146}>Company </Text>
      </View>
      <View style={styles.View_121_12}>
        <Text style={styles.Text_121_12}>company</Text>
      </View>
      <View style={styles.View_121_11}>
        <Text style={styles.Text_121_11}>company</Text>
      </View>
      <View style={styles.View_92_148}>
        <Text style={styles.Text_92_148}>company</Text>
      </View>
      <View style={styles.View_132_8}>
        <Text style={styles.Text_132_8}>28.00$</Text>
      </View>
      <View style={styles.View_132_9}>
        <Text style={styles.Text_132_9}>28.00$</Text>
      </View>
      <View style={styles.View_132_10}>
        <Text style={styles.Text_132_10}>28.00$</Text>
      </View>
      <View style={styles.View_132_11}>
        <Text style={styles.Text_132_11}>28.00$</Text>
      </View>
      <View style={styles.View_138_281}>
        <View style={styles.View_138_282}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/71de/b363/e38f7ccb00bd0614a5b5e51813fbd79c"
            }}
            style={styles.ImageBackground_138_283}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ff/0c22/0b97200050a886088dbee23e6cec4be9"
            }}
            style={styles.ImageBackground_138_287}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
            }}
            style={styles.ImageBackground_138_291}
          />
        </View>
        <View style={styles.View_138_298}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94cc/b245/9af535a5ccb41c968f7147deb78a7ba3"
            }}
            style={styles.ImageBackground_138_299}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_92_76: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("14.89071038251366%"),
    minHeight: hp("14.89071038251366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.819672131147541%"),
    backgroundColor: "rgba(115, 139, 243, 1)"
  },
  View_I92_76_48_5: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("14.89071038251366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(115, 139, 243, 1)"
  },
  ImageBackground_I92_76_48_6: {
    flexGrow: 1,
    width: wp("1.4492755240582407%"),
    height: hp("1.8613387978142075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.072459768741689%"),
    top: hp("9.616918511729423%")
  },
  View_I92_76_48_55: {
    flexGrow: 1,
    width: wp("43.46666538968999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.999992857588099%"),
    top: hp("6.980020491803279%"),
    justifyContent: "flex-start"
  },
  Text_I92_76_48_55: {
    color: "rgba(254, 254, 255, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_176_129: {
    width: wp("6.382978723404255%"),
    minWidth: wp("6.382978723404255%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.64893617021277%"),
    top: hp("8.19672131147541%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_176_130: {
    width: wp("6.382978723404255%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_176_131: {
    width: wp("5.053191489361701%"),
    height: hp("2.8688524590163933%"),
    top: hp("8.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.07446808510637%")
  },
  View_92_155: {
    width: wp("7.180851063829788%"),
    minWidth: wp("7.180851063829788%"),
    height: hp("3.1420765027322406%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.7659574468085%"),
    top: hp("8.060109289617486%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_92_156: {
    width: wp("5.318771524632231%"),
    height: hp("2.6393439600376483%"),
    top: hp("0.2513656199304144%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_92_157: {
    width: wp("2.0298146186990937%"),
    height: hp("0.26041327929887614%"),
    top: hp("1.2596880803342714%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9899977014419932%")
  },
  ImageBackground_92_158: {
    width: wp("2.481990672172384%"),
    height: hp("0.2604136050073176%"),
    top: hp("0.8397920535561809%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.768891354824646%")
  },
  ImageBackground_92_159: {
    width: wp("0.8844444092283857%"),
    height: hp("0.47988031731277214%"),
    top: hp("2.159464684991887%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9899977014419932%")
  },
  ImageBackground_92_160: {
    width: wp("0.8844449165019583%"),
    height: hp("0.47988031731277214%"),
    top: hp("2.159464684991887%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.316668246654757%")
  },
  ImageBackground_92_161: {
    width: wp("4.655437773846565%"),
    height: hp("1.6722138462170875%"),
    top: hp("0.35991147567665394%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6633352726064032%")
  },
  ImageBackground_92_164: {
    width: wp("1.0979417790757848%"),
    height: hp("0.6048285896009434%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_92_165: {
    width: wp("5.327727946829289%"),
    height: hp("2.890710622235074%"),
    top: hp("0.2513656199304144%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.23164140417222256%"),
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_92_166: {
    width: wp("2.779684168227176%"),
    height: hp("1.5081965858167639%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.401170446517625%")
  },
  View_92_167: {
    width: wp("1.1582019481253116%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.281399665994854%"),
    top: hp("-0.0683060109289606%"),
    justifyContent: "flex-start"
  },
  Text_92_167: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_92_100: {
    width: wp("40.42553191489361%"),
    minWidth: wp("40.42553191489361%"),
    height: hp("23.497267759562842%"),
    minHeight: hp("23.497267759562842%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.521276595744681%"),
    top: hp("21.584699453551913%"),
    resizeMode: "cover",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_92_101: {
    width: wp("6.382978723404255%"),
    minWidth: wp("6.382978723404255%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.07446808510637%"),
    top: hp("15.983606557377051%"),
    justifyContent: "flex-start"
  },
  Text_92_101: {
    color: "rgba(66, 67, 71, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_92_102: {
    width: wp("2.4561504100231413%"),
    minWidth: wp("2.4561504100231413%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.75531914893617%"),
    top: hp("16.39344262295082%")
  },
  View_92_107: {
    width: wp("7.9787234042553195%"),
    minWidth: wp("7.9787234042553195%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.8936170212766%"),
    top: hp("16.120218579234972%"),
    justifyContent: "flex-start"
  },
  Text_92_107: {
    color: "rgba(66, 67, 71, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_92_108: {
    width: wp("3.206859497313804%"),
    minWidth: wp("3.206859497313804%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.30851063829788%"),
    top: hp("16.120218579234972%")
  },
  View_92_111: {
    width: wp("40.42553191489361%"),
    minWidth: wp("40.42553191489361%"),
    height: hp("23.497267759562842%"),
    minHeight: hp("23.497267759562842%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.52127659574468%"),
    top: hp("21.584699453551913%"),
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_216_361: {
    width: wp("40.42553191489361%"),
    minWidth: wp("40.42553191489361%"),
    height: hp("25.546448087431695%"),
    minHeight: hp("25.546448087431695%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.78723404255319%"),
    top: hp("20.62841530054645%"),
    resizeMode: "cover"
  },
  ImageBackground_92_112: {
    width: wp("40.42553191489361%"),
    minWidth: wp("40.42553191489361%"),
    height: hp("23.497267759562842%"),
    minHeight: hp("23.497267759562842%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.521276595744681%"),
    top: hp("57.377049180327866%"),
    resizeMode: "cover",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_92_113: {
    width: wp("40.42553191489361%"),
    minWidth: wp("40.42553191489361%"),
    height: hp("23.497267759562842%"),
    minHeight: hp("23.497267759562842%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.72340425531915%"),
    top: hp("57.377049180327866%"),
    resizeMode: "cover",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_92_114: {
    width: wp("40.42553191489361%"),
    minWidth: wp("40.42553191489361%"),
    height: hp("23.497267759562842%"),
    minHeight: hp("23.497267759562842%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.319148936170213%"),
    top: hp("92.4863387978142%"),
    resizeMode: "cover",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_92_141: {
    width: wp("40.42553191489361%"),
    minWidth: wp("40.42553191489361%"),
    height: hp("23.497267759562842%"),
    minHeight: hp("23.497267759562842%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.72340425531915%"),
    top: hp("92.4863387978142%"),
    resizeMode: "cover",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_92_115: {
    width: wp("99.7340425531915%"),
    height: hp("9.972677595628415%"),
    top: hp("100.95628415300546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_92_116: {
    width: wp("99.7340425531915%"),
    height: hp("9.972677595628415%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_92_117: {
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
  View_92_118: {
    width: wp("26.329787234042552%"),
    height: hp("10.92896174863388%"),
    top: hp("-0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.914893617021276%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_92_119: {
    width: wp("26.329787234042552%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_92_120: {
    width: wp("16.48936170212766%"),
    minWidth: wp("16.48936170212766%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.585106382978725%"),
    top: hp("8.469945355191257%"),
    justifyContent: "flex-start"
  },
  Text_92_120: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_92_121: {
    width: wp("6.382978723404255%"),
    height: hp("3.278688524590164%"),
    top: hp("3.8251366120218506%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.106382978723403%")
  },
  View_92_126: {
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
  View_92_127: {
    width: wp("30.0531914893617%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_92_128: {
    width: wp("6.382978723404255%"),
    height: hp("3.278688524590164%"),
    top: hp("3.825136612021865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.968085106382986%")
  },
  View_92_133: {
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
  Text_92_133: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_92_134: {
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
  View_92_135: {
    width: wp("26.329787234042552%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_92_136: {
    width: wp("6.382978723404255%"),
    height: hp("3.278688524590164%"),
    top: hp("3.825136612021865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.106382978723417%")
  },
  View_92_139: {
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
  Text_92_139: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_92_140: {
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
  View_130_2: {
    width: wp("99.7340425531915%"),
    height: hp("9.972677595628415%"),
    top: hp("100.95628415300546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_130_3: {
    width: wp("99.7340425531915%"),
    height: hp("9.972677595628415%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_130_4: {
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
  View_130_5: {
    width: wp("26.329787234042552%"),
    height: hp("10.92896174863388%"),
    top: hp("-0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.914893617021276%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_130_6: {
    width: wp("26.329787234042552%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_130_7: {
    width: wp("16.48936170212766%"),
    minWidth: wp("16.48936170212766%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.585106382978725%"),
    top: hp("8.469945355191257%"),
    justifyContent: "flex-start"
  },
  Text_130_7: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_130_8: {
    width: wp("6.382978723404255%"),
    height: hp("3.278688524590164%"),
    top: hp("3.8251366120218506%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.106382978723403%")
  },
  View_130_13: {
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
  View_130_14: {
    width: wp("30.0531914893617%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_130_15: {
    width: wp("6.382978723404255%"),
    height: hp("3.278688524590164%"),
    top: hp("3.825136612021865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.968085106382986%")
  },
  View_130_20: {
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
  Text_130_20: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_130_21: {
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
  View_130_22: {
    width: wp("26.329787234042552%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_130_23: {
    width: wp("6.382978723404255%"),
    height: hp("3.278688524590164%"),
    top: hp("3.825136612021865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.106382978723417%")
  },
  View_130_26: {
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
  Text_130_26: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_130_27: {
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
  View_144_24: {
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
  ImageBackground_144_25: {
    width: wp("99.7340425531915%"),
    height: hp("9.972677595628415%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_144_26: {
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
  View_144_27: {
    width: wp("30.319148936170215%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_144_28: {
    width: wp("30.319148936170215%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_144_29: {
    width: wp("6.117021276595745%"),
    height: hp("3.415300546448088%"),
    top: hp("3.1420765027322375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.96808510638298%")
  },
  View_144_34: {
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
  Text_144_34: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_144_35: {
    flexGrow: 1,
    width: wp("34.308510638297875%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.914893617021278%"),
    top: hp("-0.9562841530054556%"),
    backgroundColor: "rgba(229, 229, 229, 1)"
  },
  View_144_36: {
    width: wp("34.308510638297875%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_144_37: {
    width: wp("10.106382978723403%"),
    minWidth: wp("10.106382978723403%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.627659574468083%"),
    top: hp("8.469945355191257%"),
    justifyContent: "flex-start"
  },
  Text_144_37: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_144_38: {
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
  ImageBackground_144_39: {
    width: wp("6.382978723404255%"),
    minWidth: wp("6.382978723404255%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.627659574468083%"),
    top: hp("3.825136612021865%"),
    resizeMode: "cover"
  },
  View_144_40: {
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
  View_144_41: {
    width: wp("30.319148936170215%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_247_45: {
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
  Text_247_45: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_144_43: {
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
  View_144_44: {
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
  View_92_142: {
    width: wp("20.47872340425532%"),
    minWidth: wp("20.47872340425532%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.382978723404255%"),
    top: hp("47.6775956284153%"),
    justifyContent: "flex-start"
  },
  Text_92_142: {
    color: "rgba(66, 67, 71, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_92_144: {
    width: wp("20.47872340425532%"),
    minWidth: wp("20.47872340425532%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.64893617021277%"),
    top: hp("48.08743169398907%"),
    justifyContent: "flex-start"
  },
  Text_92_144: {
    color: "rgba(66, 67, 71, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_121_10: {
    width: wp("20.47872340425532%"),
    minWidth: wp("20.47872340425532%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.64893617021277%"),
    top: hp("48.08743169398907%"),
    justifyContent: "flex-start"
  },
  Text_121_10: {
    color: "rgba(66, 67, 71, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_121_9: {
    width: wp("20.47872340425532%"),
    minWidth: wp("20.47872340425532%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.319148936170213%"),
    top: hp("83.33333333333334%"),
    justifyContent: "flex-start"
  },
  Text_121_9: {
    color: "rgba(66, 67, 71, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_121_13: {
    width: wp("20.47872340425532%"),
    minWidth: wp("20.47872340425532%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.85106382978723%"),
    top: hp("84.01639344262296%"),
    justifyContent: "flex-start"
  },
  Text_121_13: {
    color: "rgba(66, 67, 71, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_92_146: {
    width: wp("15.957446808510639%"),
    minWidth: wp("15.957446808510639%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.648936170212766%"),
    top: hp("51.775956284153004%"),
    justifyContent: "flex-start"
  },
  Text_92_146: {
    color: "rgba(187, 187, 187, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_121_12: {
    width: wp("15.425531914893616%"),
    minWidth: wp("15.425531914893616%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.64893617021277%"),
    top: hp("87.29508196721312%"),
    justifyContent: "flex-start"
  },
  Text_121_12: {
    color: "rgba(187, 187, 187, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_121_11: {
    width: wp("15.425531914893616%"),
    minWidth: wp("15.425531914893616%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.64893617021277%"),
    top: hp("51.775956284153004%"),
    justifyContent: "flex-start"
  },
  Text_121_11: {
    color: "rgba(187, 187, 187, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_92_148: {
    width: wp("15.425531914893616%"),
    minWidth: wp("15.425531914893616%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.117021276595745%"),
    top: hp("87.29508196721312%"),
    justifyContent: "flex-start"
  },
  Text_92_148: {
    color: "rgba(187, 187, 187, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_132_8: {
    width: wp("10.666672726894946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.648936170212767%"),
    top: hp("49.72677595628415%"),
    justifyContent: "flex-start"
  },
  Text_132_8: {
    color: "rgba(66, 67, 71, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_132_9: {
    width: wp("10.666672726894946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.4468085106383%"),
    top: hp("50.68306010928961%"),
    justifyContent: "flex-start"
  },
  Text_132_9: {
    color: "rgba(66, 67, 71, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_132_10: {
    width: wp("10.666672726894946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.648936170212767%"),
    top: hp("85.65573770491804%"),
    justifyContent: "flex-start"
  },
  Text_132_10: {
    color: "rgba(66, 67, 71, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_132_11: {
    width: wp("10.666672726894946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.4468085106383%"),
    top: hp("85.65573770491804%"),
    justifyContent: "flex-start"
  },
  Text_132_11: {
    color: "rgba(66, 67, 71, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_281: {
    flexGrow: 1,
    width: wp("100%"),
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
  View_138_282: {
    width: wp("17.72908961519282%"),
    minWidth: wp("17.72908961519282%"),
    height: hp("2.8233038271711175%"),
    minHeight: hp("2.8233038271711175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.36879162078209%"),
    top: hp("1.0929128511355874%")
  },
  ImageBackground_138_283: {
    width: wp("6.470222676053961%"),
    minWidth: wp("6.470222676053961%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.258867953685993%"),
    top: hp("1.2750344198258197%")
  },
  ImageBackground_138_287: {
    width: wp("4.0618018901094475%"),
    minWidth: wp("4.0618018901094475%"),
    height: hp("1.4980287499766531%"),
    minHeight: hp("1.4980287499766531%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.858263056328951%"),
    top: hp("1.2746675418374318%")
  },
  ImageBackground_138_291: {
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
  View_138_298: {
    width: wp("14.361702127659576%"),
    minWidth: wp("14.361702127659576%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.585106382978723%"),
    top: hp("1.639344262295082%")
  },
  ImageBackground_138_299: {
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
