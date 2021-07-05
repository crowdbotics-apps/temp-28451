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
      <View style={styles.View_138_85}>
        <View style={styles.View_138_86} />
        <View style={styles.View_138_87}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5bec/f245/cf8cccb75f19339381259b08634b63ce"
            }}
            style={styles.ImageBackground_138_88}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49a8/d34f/24501f6a0217353f649c9935892fa485"
          }}
          style={styles.ImageBackground_138_99}
        />
        <View style={styles.View_138_101}>
          <View style={styles.View_138_102}>
            <Text style={styles.Text_138_102}>
              get some rest and take giloy
            </Text>
          </View>
          <View style={styles.View_138_103}>
            <Text style={styles.Text_138_103}>April 10, 2019 5:08 PM</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3df4/9ab7/6debdb177d5a1a28e1bc976ab16991c2"
          }}
          style={styles.ImageBackground_138_104}
        />
      </View>
      <View style={styles.View_138_105}>
        <View style={styles.View_138_106} />
        <View style={styles.View_138_107}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4269/a8a2/f01403e4bb1b24efe33ebefc478942eb"
            }}
            style={styles.ImageBackground_138_108}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49a8/d34f/24501f6a0217353f649c9935892fa485"
          }}
          style={styles.ImageBackground_138_119}
        />
        <View style={styles.View_138_121}>
          <View style={styles.View_138_122}>
            <Text style={styles.Text_138_122}>
              Well I thought this is just a normal stomcach ache but it is does
              not seem ....
            </Text>
          </View>
          <View style={styles.View_138_123}>
            <Text style={styles.Text_138_123}>June 24, 2018 5:46 AM</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3df4/9ab7/6debdb177d5a1a28e1bc976ab16991c2"
          }}
          style={styles.ImageBackground_138_124}
        />
      </View>
      <View style={styles.View_138_125}>
        <View style={styles.View_138_126} />
        <View style={styles.View_138_127}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2aac/c79d/aaebf2507604512b46aca435ec1faaae"
            }}
            style={styles.ImageBackground_138_128}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49a8/d34f/24501f6a0217353f649c9935892fa485"
          }}
          style={styles.ImageBackground_138_139}
        />
        <View style={styles.View_138_141}>
          <View style={styles.View_138_142}>
            <Text style={styles.Text_138_142}>
              I am unable to sleep for past few nights
            </Text>
          </View>
          <View style={styles.View_138_143}>
            <Text style={styles.Text_138_143}>July 14, 2014 1:05 PM</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3df4/9ab7/6debdb177d5a1a28e1bc976ab16991c2"
          }}
          style={styles.ImageBackground_138_144}
        />
      </View>
      <View style={styles.View_138_145}>
        <View style={styles.View_138_146} />
        <View style={styles.View_138_147}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9d8c/13d6/6a6d30ad5c907c5bba6a5ed54c0ae89f"
            }}
            style={styles.ImageBackground_138_148}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49a8/d34f/24501f6a0217353f649c9935892fa485"
          }}
          style={styles.ImageBackground_138_159}
        />
        <View style={styles.View_138_161}>
          <View style={styles.View_138_162}>
            <Text style={styles.Text_138_162}>I just sent you a picture.</Text>
          </View>
          <View style={styles.View_138_163}>
            <Text style={styles.Text_138_163}>June 23, 2018 8:21 PM</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3df4/9ab7/6debdb177d5a1a28e1bc976ab16991c2"
          }}
          style={styles.ImageBackground_138_164}
        />
      </View>
      <View style={styles.View_138_243}>
        <Text style={styles.Text_138_243}>dr. Suhani Kumar</Text>
      </View>
      <View style={styles.View_138_244}>
        <Text style={styles.Text_138_244}>dr. Shivani Pandey</Text>
      </View>
      <View style={styles.View_138_245}>
        <Text style={styles.Text_138_245}>dr. Aman Pandey</Text>
      </View>
      <View style={styles.View_138_246}>
        <Text style={styles.Text_138_246}>dr. Ramiya Narayan</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d7e9/57ab/b6053b436db4ec035977910863200f3f"
        }}
        style={styles.ImageBackground_138_251}
      />
      <View style={styles.View_138_253}>
        <Text style={styles.Text_138_253}>WhatsApp</Text>
      </View>
      <View style={styles.View_138_255}>
        <View style={styles.View_I138_255_48_5} />
        <View source={{ uri: "null" }} style={styles.View_I138_255_48_6} />
      </View>
      <View style={styles.View_282_43}>
        <View style={styles.View_282_44} />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ebb/9a88/4fb6d201eecffce0f58960bfcc062d38"
        }}
        style={styles.ImageBackground_290_43}
      />
      <View style={styles.View_138_261}>
        <View style={styles.View_138_262}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/71de/b363/e38f7ccb00bd0614a5b5e51813fbd79c"
            }}
            style={styles.ImageBackground_138_263}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ff/0c22/0b97200050a886088dbee23e6cec4be9"
            }}
            style={styles.ImageBackground_138_267}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
            }}
            style={styles.ImageBackground_138_271}
          />
        </View>
        <View style={styles.View_138_278}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94cc/b245/9af535a5ccb41c968f7147deb78a7ba3"
            }}
            style={styles.ImageBackground_138_279}
          />
        </View>
      </View>
      <View style={styles.View_138_260}>
        <Text style={styles.Text_138_260}>CHAT</Text>
      </View>
      <View style={styles.View_144_92}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/77ff/ad03/20b2dbadc946e676d3b19c7dcbeac2bd"
          }}
          style={styles.ImageBackground_144_93}
        />
        <View style={styles.View_144_94}>
          <View style={styles.View_144_95}>
            <View style={styles.View_144_96} />
            <View style={styles.View_144_97}>
              <Text style={styles.Text_144_97}> EXPLORE</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7977/bea6/2b0c922bcb79fde6220421f434bb7046"
              }}
              style={styles.ImageBackground_144_98}
            />
          </View>
        </View>
        <View style={styles.View_144_103}>
          <View style={styles.View_144_104} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/346a/9205/ed593c58de4096f93d4e809437d3bb55"
            }}
            style={styles.ImageBackground_144_105}
          />
          <View style={styles.View_144_110}>
            <Text style={styles.Text_144_110}>SHOP</Text>
          </View>
        </View>
        <View style={styles.View_144_111}>
          <View style={styles.View_144_112} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/332c/7b35/c5d0c1237a7415cdb79616b98e1286e4"
            }}
            style={styles.ImageBackground_144_113}
          />
          <View style={styles.View_144_116}>
            <Text style={styles.Text_144_116}> ACCOUNT</Text>
          </View>
        </View>
        <View style={styles.View_144_117} />
        <View style={styles.View_144_118}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/66a2/8438/229ce1fcd6ec34f387d2d13e70ba5f6f"
            }}
            style={styles.ImageBackground_144_119}
          />
          <View style={styles.View_144_120}>
            <View style={styles.View_144_121}>
              <View style={styles.View_144_122} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c05e/3310/5fa19be2dd61005af7ab5013fddc1070"
                }}
                style={styles.ImageBackground_144_123}
              />
              <View style={styles.View_144_128}>
                <Text style={styles.Text_144_128}> EXPLORE</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_144_129}>
            <View style={styles.View_144_130} />
            <View style={styles.View_144_131}>
              <Text style={styles.Text_144_131}>SHOP</Text>
            </View>
            <View style={styles.View_144_132} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c71/1bbe/48cba4b9223b7d65d92d006c36be5480"
              }}
              style={styles.ImageBackground_144_133}
            />
          </View>
          <View style={styles.View_144_134}>
            <View style={styles.View_144_135} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6bde/51bf/5f6a9efd5cf41a76dec550c0fc3d6a8f"
              }}
              style={styles.ImageBackground_144_137}
            />
            <View style={styles.View_247_47}>
              <Text style={styles.Text_247_47}>CHAT</Text>
            </View>
          </View>
          <View style={styles.View_144_138} />
        </View>
      </View>
      <View style={styles.View_282_45}>
        <Text style={styles.Text_282_45}>ENTER CODE</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_138_85: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.940854015246115%"),
    minHeight: hp("10.940854015246115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15.163934426229508%")
  },
  View_138_86: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_138_87: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("2.306812057078213%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_138_88: {
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
  ImageBackground_138_99: {
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    top: hp("3.126484188225751%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.86666666666667%")
  },
  View_138_101: {
    width: wp("65.43450520833333%"),
    minWidth: wp("65.43450520833333%"),
    height: hp("7.281235658405909%"),
    minHeight: hp("7.281235658405909%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.432194010416666%"),
    top: hp("1.5027322404371564%")
  },
  View_138_102: {
    width: wp("62.39447021484374%"),
    minWidth: wp("62.39447021484374%"),
    minHeight: hp("5.03081441577015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.2504212426357597%"),
    justifyContent: "flex-start"
  },
  Text_138_102: {
    color: "rgba(21, 21, 34, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_103: {
    width: wp("28.26666666666667%"),
    minWidth: wp("28.26666666666667%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.16783854166667%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_138_103: {
    color: "rgba(153, 153, 153, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_138_104: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.940851930712094%")
  },
  View_138_105: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.940854015246115%"),
    minHeight: hp("10.940854015246115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("27.470906575520832%")
  },
  View_138_106: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_138_107: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("2.3068120570782114%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_138_108: {
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
  ImageBackground_138_119: {
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    top: hp("3.126484188225753%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.86666666666667%")
  },
  View_138_121: {
    width: wp("65.701171875%"),
    minWidth: wp("65.701171875%"),
    height: hp("7.839573927915813%"),
    minHeight: hp("7.839573927915813%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.432194010416666%"),
    top: hp("0.9443939709272549%")
  },
  View_138_122: {
    width: wp("62.39447021484374%"),
    minWidth: wp("62.39447021484374%"),
    minHeight: hp("5.03081441577015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.808759512145663%"),
    justifyContent: "flex-start"
  },
  Text_138_122: {
    color: "rgba(21, 21, 34, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_123: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.96783854166667%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_138_123: {
    color: "rgba(153, 153, 153, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_138_124: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.940851930712089%")
  },
  View_138_125: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.940854015246115%"),
    minHeight: hp("10.940854015246115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("39.77787872481216%")
  },
  View_138_126: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_138_127: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("1.8004704042862016%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_138_128: {
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
  ImageBackground_138_139: {
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    top: hp("2.620142535433736%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.86666666666667%")
  },
  View_138_141: {
    width: wp("67.56783854166667%"),
    minWidth: wp("67.56783854166667%"),
    height: hp("5.2395513148907105%"),
    minHeight: hp("5.2395513148907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.432194010416666%"),
    top: hp("1.7521759199965814%")
  },
  View_138_142: {
    width: wp("62.39447021484374%"),
    minWidth: wp("62.39447021484374%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.780534921448087%"),
    justifyContent: "flex-start"
  },
  Text_138_142: {
    color: "rgba(21, 21, 34, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_143: {
    width: wp("26.13333333333333%"),
    minWidth: wp("26.13333333333333%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.434505208333334%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_138_143: {
    color: "rgba(153, 153, 153, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_138_144: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.940851930712086%")
  },
  View_138_145: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.940854015246115%"),
    minHeight: hp("10.940854015246115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("52.08485087410348%")
  },
  View_138_146: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_138_147: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("1.8004704042862087%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_138_148: {
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
  ImageBackground_138_159: {
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    top: hp("2.62014253543375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.86666666666667%")
  },
  View_138_161: {
    width: wp("67.83450520833333%"),
    minWidth: wp("67.83450520833333%"),
    height: hp("5.251441496968921%"),
    minHeight: hp("5.251441496968921%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.432194010416666%"),
    top: hp("1.7402857379183843%")
  },
  View_138_162: {
    width: wp("36.266666666666666%"),
    minWidth: wp("36.266666666666666%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.7924251035262913%"),
    justifyContent: "flex-start"
  },
  Text_138_162: {
    color: "rgba(21, 21, 34, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_163: {
    width: wp("26.93333333333333%"),
    minWidth: wp("26.93333333333333%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.901171875%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_138_163: {
    color: "rgba(153, 153, 153, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_138_164: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.940851930712093%")
  },
  View_138_243: {
    width: wp("30.4%"),
    minWidth: wp("30.4%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.533333333333335%"),
    top: hp("16.530054644808743%"),
    justifyContent: "flex-start"
  },
  Text_138_243: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_244: {
    width: wp("30.4%"),
    minWidth: wp("30.4%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.533333333333335%"),
    top: hp("28.688524590163933%"),
    justifyContent: "flex-start"
  },
  Text_138_244: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_245: {
    width: wp("30.4%"),
    minWidth: wp("30.4%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.266666666666666%"),
    top: hp("41.80327868852459%"),
    justifyContent: "flex-start"
  },
  Text_138_245: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_246: {
    width: wp("30.4%"),
    minWidth: wp("30.4%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.266666666666666%"),
    top: hp("53.825136612021865%"),
    justifyContent: "flex-start"
  },
  Text_138_246: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_138_251: {
    width: wp("15.733333333333333%"),
    minWidth: wp("15.733333333333333%"),
    height: hp("7.5136612021857925%"),
    minHeight: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.26666666666667%"),
    top: hp("89.34426229508196%"),
    resizeMode: "cover"
  },
  View_138_253: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.26666666666667%"),
    top: hp("96.85792349726776%"),
    justifyContent: "flex-start"
  },
  Text_138_253: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_255: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("15.163934426229508%"),
    minHeight: hp("15.163934426229508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.819672131147541%"),
    backgroundColor: "rgba(115, 139, 243, 1)"
  },
  View_I138_255_48_5: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("15.163934426229508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(115, 139, 243, 1)"
  },
  View_I138_255_48_6: {
    flexGrow: 1,
    width: wp("1.4492757161458334%"),
    height: hp("1.8954918032786885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.072465006510416%"),
    top: hp("9.793374316939891%")
  },
  View_282_43: {
    width: wp("39.733333333333334%"),
    minWidth: wp("39.733333333333334%"),
    height: hp("4.781420765027322%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.4%"),
    top: hp("8.060109289617486%")
  },
  View_282_44: {
    width: wp("39.733333333333334%"),
    minWidth: wp("39.733333333333334%"),
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
  ImageBackground_290_43: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    top: hp("8.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.60000000000001%")
  },
  View_138_261: {
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
  View_138_262: {
    width: wp("17.7763671875%"),
    minWidth: wp("17.7763671875%"),
    height: hp("2.8233038271711175%"),
    minHeight: hp("2.8233038271711175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.44444173177084%"),
    top: hp("1.0929128511355874%")
  },
  ImageBackground_138_263: {
    width: wp("6.487476603190104%"),
    minWidth: wp("6.487476603190104%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.288891601562497%"),
    top: hp("1.2750344198258197%")
  },
  ImageBackground_138_267: {
    width: wp("4.072633616129558%"),
    minWidth: wp("4.072633616129558%"),
    height: hp("1.4980287499766531%"),
    minHeight: hp("1.4980287499766531%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.873885091145837%"),
    top: hp("1.2746675418374318%")
  },
  ImageBackground_138_271: {
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
  View_138_278: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.600008138020834%"),
    top: hp("1.639344262295082%")
  },
  ImageBackground_138_279: {
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
  View_138_260: {
    width: wp("25.066666666666666%"),
    top: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666666%"),
    justifyContent: "flex-start"
  },
  Text_138_260: {
    color: "rgba(254, 254, 255, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_144_92: {
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
  ImageBackground_144_93: {
    width: wp("100%"),
    height: hp("9.972677595628415%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_144_94: {
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
  View_144_95: {
    width: wp("26.400000000000002%"),
    height: hp("10.92896174863388%"),
    top: hp("-0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_144_96: {
    width: wp("26.400000000000002%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_144_97: {
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
  Text_144_97: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_144_98: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("3.8251366120218506%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.133333333333333%")
  },
  View_144_103: {
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
  View_144_104: {
    width: wp("30.133333333333333%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_144_105: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("3.825136612021865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  View_144_110: {
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
  Text_144_110: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_144_111: {
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
  View_144_112: {
    width: wp("26.400000000000002%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_144_113: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("3.825136612021865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.13333333333334%")
  },
  View_144_116: {
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
  Text_144_116: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_144_117: {
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
  View_144_118: {
    width: wp("100%"),
    height: hp("9.972677595628415%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_144_119: {
    width: wp("100%"),
    height: hp("9.972677595628415%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_144_120: {
    flexGrow: 1,
    width: wp("32.53333333333333%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.9562841530054556%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_144_121: {
    width: wp("32.53333333333333%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_144_122: {
    width: wp("32.53333333333333%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_144_123: {
    width: wp("6.133333333333333%"),
    height: hp("3.415300546448088%"),
    top: hp("3.1420765027322375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.066666666666665%")
  },
  View_144_128: {
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
  Text_144_128: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_144_129: {
    flexGrow: 1,
    width: wp("34.66666666666667%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.53333333333333%"),
    top: hp("-0.9562841530054556%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_144_130: {
    width: wp("34.66666666666667%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_144_131: {
    width: wp("10.133333333333333%"),
    minWidth: wp("10.133333333333333%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.799999999999997%"),
    top: hp("8.469945355191257%"),
    justifyContent: "flex-start"
  },
  Text_144_131: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_144_132: {
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
  ImageBackground_144_133: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.666666666666664%"),
    top: hp("3.825136612021865%"),
    resizeMode: "cover"
  },
  View_144_134: {
    flexGrow: 1,
    width: wp("32.800000000000004%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.2%"),
    top: hp("-0.9562841530054556%"),
    backgroundColor: "rgba(229, 229, 229, 1)"
  },
  View_144_135: {
    width: wp("32.800000000000004%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_144_137: {
    width: wp("5.6000000000000005%"),
    minWidth: wp("5.6000000000000005%"),
    height: hp("3.1420765027322406%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333337%"),
    top: hp("3.825136612021865%"),
    resizeMode: "cover"
  },
  View_247_47: {
    width: wp("23.200000000000003%"),
    minWidth: wp("23.200000000000003%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333337%"),
    top: hp("8.606557377049185%"),
    justifyContent: "flex-start"
  },
  Text_247_47: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_144_138: {
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
  View_282_45: {
    width: wp("34.4%"),
    minWidth: wp("34.4%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.333333333333336%"),
    top: hp("9.153005464480875%"),
    justifyContent: "flex-start"
  },
  Text_282_45: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
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
