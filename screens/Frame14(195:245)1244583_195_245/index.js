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
      <View style={styles.View_195_246}>
        <View style={styles.View_I195_246_48_5} />
      </View>
      <View style={styles.View_243_829}>
        <View style={styles.View_243_830}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7783/438e/d6b3acdb96eff63d47319d7c803fbda2"
            }}
            style={styles.ImageBackground_243_831}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0aa0/492b/f3ee70c2515d6824c8b2970118c8c5d9"
            }}
            style={styles.ImageBackground_243_832}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/47e0/67a6/18dbff3cb6aa472d0deefd7b427e97a9"
            }}
            style={styles.ImageBackground_243_833}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/47e0/67a6/18dbff3cb6aa472d0deefd7b427e97a9"
            }}
            style={styles.ImageBackground_243_834}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a77/904e/0cd546071f4b0d608db2a08c74dedf9d"
            }}
            style={styles.ImageBackground_243_835}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d0f7/2d7e/b9c566e54df988337e68c54f43472ec7"
            }}
            style={styles.ImageBackground_243_838}
          />
        </View>
        <View style={styles.View_243_839} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4158/f915/06c627a56d11d1d21c1f251d05d202b5"
          }}
          style={styles.ImageBackground_243_840}
        />
        <View style={styles.View_243_841}>
          <Text style={styles.Text_243_841}>3</Text>
        </View>
      </View>
      <View style={styles.View_195_540}>
        <View style={styles.View_195_541} />
        <View style={styles.View_195_542}>
          <Text style={styles.Text_195_542}>Search</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/755c/258d/46fd11f6a24ea2acba67d4ec120a555c"
          }}
          style={styles.ImageBackground_195_546}
        />
      </View>
      <View style={styles.View_195_247}>
        <View style={styles.View_195_248} />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3dbc/5f45/7a10d4f5e4a00d91b361833141068169"
        }}
        style={styles.ImageBackground_195_275}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a952/0128/e4720c5632ce84683d1ee096f4bf98c4"
        }}
        style={styles.ImageBackground_195_276}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6270/5258/178cf76a7fa495de823bfbf08b633ace"
        }}
        style={styles.ImageBackground_195_277}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f27f/b659/0d235d1314dd0dbd6d343958e4092426"
        }}
        style={styles.ImageBackground_195_278}
      />
      <View style={styles.View_195_279}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da63/f18c/a5ab8554276bd844eb3c1f68b2749935"
          }}
          style={styles.ImageBackground_195_280}
        />
        <View style={styles.View_195_281}>
          <View style={styles.View_195_282}>
            <View style={styles.View_195_283} />
            <View style={styles.View_195_284}>
              <Text style={styles.Text_195_284}> EXPLORE</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7977/bea6/2b0c922bcb79fde6220421f434bb7046"
              }}
              style={styles.ImageBackground_195_285}
            />
          </View>
        </View>
        <View style={styles.View_195_290}>
          <View style={styles.View_195_291} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/346a/9205/ed593c58de4096f93d4e809437d3bb55"
            }}
            style={styles.ImageBackground_195_292}
          />
          <View style={styles.View_195_297}>
            <Text style={styles.Text_195_297}>SHOP</Text>
          </View>
        </View>
        <View style={styles.View_195_298}>
          <View style={styles.View_195_299} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/332c/7b35/c5d0c1237a7415cdb79616b98e1286e4"
            }}
            style={styles.ImageBackground_195_300}
          />
          <View style={styles.View_195_303}>
            <Text style={styles.Text_195_303}> ACCOUNT</Text>
          </View>
        </View>
        <View style={styles.View_195_304} />
      </View>
      <View style={styles.View_195_305}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd89/709c/ccfd1e707f841a8e38a07ea19abb097e"
          }}
          style={styles.ImageBackground_195_306}
        />
        <View style={styles.View_195_307}>
          <View style={styles.View_195_308}>
            <View style={styles.View_195_309} />
            <View style={styles.View_195_310}>
              <Text style={styles.Text_195_310}> EXPLORE</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7977/bea6/2b0c922bcb79fde6220421f434bb7046"
              }}
              style={styles.ImageBackground_195_311}
            />
          </View>
        </View>
        <View style={styles.View_195_316}>
          <View style={styles.View_195_317} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/346a/9205/ed593c58de4096f93d4e809437d3bb55"
            }}
            style={styles.ImageBackground_195_318}
          />
          <View style={styles.View_195_323}>
            <Text style={styles.Text_195_323}>SHOP</Text>
          </View>
        </View>
        <View style={styles.View_195_324}>
          <View style={styles.View_195_325} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/332c/7b35/c5d0c1237a7415cdb79616b98e1286e4"
            }}
            style={styles.ImageBackground_195_326}
          />
          <View style={styles.View_195_329}>
            <Text style={styles.Text_195_329}> ACCOUNT</Text>
          </View>
        </View>
        <View style={styles.View_195_330} />
        <View style={styles.View_195_331}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/12b3/e109/f20633fa8ac165f7a2de94899ae773b2"
            }}
            style={styles.ImageBackground_195_332}
          />
          <View style={styles.View_195_333}>
            <View style={styles.View_195_334}>
              <View style={styles.View_195_335} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c05e/3310/5fa19be2dd61005af7ab5013fddc1070"
                }}
                style={styles.ImageBackground_195_336}
              />
              <View style={styles.View_195_341}>
                <Text style={styles.Text_195_341}> EXPLORE</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_195_342}>
            <View style={styles.View_195_343} />
            <View style={styles.View_195_344}>
              <Text style={styles.Text_195_344}>SHOP</Text>
            </View>
            <View style={styles.View_195_345} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c71/1bbe/48cba4b9223b7d65d92d006c36be5480"
              }}
              style={styles.ImageBackground_195_346}
            />
          </View>
          <View style={styles.View_195_347}>
            <View style={styles.View_195_348} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6bde/51bf/5f6a9efd5cf41a76dec550c0fc3d6a8f"
              }}
              style={styles.ImageBackground_195_350}
            />
            <View style={styles.View_247_43}>
              <Text style={styles.Text_247_43}>CHAT</Text>
            </View>
          </View>
          <View style={styles.View_195_351} />
        </View>
      </View>
      <View style={styles.View_195_355}>
        <Text style={styles.Text_195_355}>Item name</Text>
      </View>
      <View style={styles.View_195_356}>
        <Text style={styles.Text_195_356}>Item name</Text>
      </View>
      <View style={styles.View_195_358}>
        <Text style={styles.Text_195_358}>company</Text>
      </View>
      <View style={styles.View_195_360}>
        <Text style={styles.Text_195_360}>company</Text>
      </View>
      <View style={styles.View_195_363}>
        <Text style={styles.Text_195_363}>28.00$</Text>
      </View>
      <View style={styles.View_195_364}>
        <Text style={styles.Text_195_364}>28.00$</Text>
      </View>
      <View style={styles.View_195_365}>
        <View style={styles.View_195_366}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/71de/b363/e38f7ccb00bd0614a5b5e51813fbd79c"
            }}
            style={styles.ImageBackground_195_367}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ff/0c22/0b97200050a886088dbee23e6cec4be9"
            }}
            style={styles.ImageBackground_195_371}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
            }}
            style={styles.ImageBackground_195_375}
          />
        </View>
        <View style={styles.View_195_382}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94cc/b245/9af535a5ccb41c968f7147deb78a7ba3"
            }}
            style={styles.ImageBackground_195_383}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8460/d0ba/88c267b1323e2c1f4b336645236a7a6c"
        }}
        style={styles.ImageBackground_195_534}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed7a/032c/f7f94effc025b8fcffed1dffb37be654"
        }}
        style={styles.ImageBackground_195_562}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aef5/d0da/d5724724b301c3cfae9d54c807276319"
        }}
        style={styles.ImageBackground_195_567}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aef5/d0da/d5724724b301c3cfae9d54c807276319"
        }}
        style={styles.ImageBackground_195_566}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e03/85d8/f9ae8568c613c5fe2b6da7a7773627a0"
        }}
        style={styles.ImageBackground_195_569}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_195_246: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("14.89071038251366%"),
    minHeight: hp("14.89071038251366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.26595744680851063%"),
    top: hp("0%"),
    backgroundColor: "rgba(115, 139, 243, 1)"
  },
  View_I195_246_48_5: {
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
  View_243_829: {
    width: wp("7.180851063829788%"),
    minWidth: wp("7.180851063829788%"),
    height: hp("3.1420765027322406%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.37234042553192%"),
    top: hp("8.879781420765028%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_243_830: {
    width: wp("5.318771524632231%"),
    height: hp("2.6393439600376483%"),
    top: hp("0.2513656199304126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_243_831: {
    width: wp("2.0298146186990937%"),
    height: hp("0.26041327929887614%"),
    top: hp("1.2596880803342732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9900058178191529%")
  },
  ImageBackground_243_832: {
    width: wp("2.481990672172384%"),
    height: hp("0.2604136050073176%"),
    top: hp("0.8397920535561827%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7688832384474722%")
  },
  ImageBackground_243_833: {
    width: wp("0.8844444092283857%"),
    height: hp("0.47988031731277214%"),
    top: hp("2.159464684991889%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9900058178191529%")
  },
  ImageBackground_243_834: {
    width: wp("0.8844449165019583%"),
    height: hp("0.47988031731277214%"),
    top: hp("2.159464684991889%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3166763630319167%")
  },
  ImageBackground_243_835: {
    width: wp("4.655437773846565%"),
    height: hp("1.6722138462170875%"),
    top: hp("0.3599114756766575%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.663335272606389%")
  },
  ImageBackground_243_838: {
    width: wp("1.0979417790757848%"),
    height: hp("0.6048285896009434%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_243_839: {
    width: wp("5.327727946829289%"),
    height: hp("2.890710622235074%"),
    top: hp("0.2513656199304126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.23164140417220835%"),
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_243_840: {
    width: wp("2.779684168227176%"),
    height: hp("1.5081965858167639%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.401170446517611%")
  },
  View_243_841: {
    width: wp("1.1582019481253116%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.28139154961768%"),
    top: hp("-0.06830601092896238%"),
    justifyContent: "flex-start"
  },
  Text_243_841: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_195_540: {
    width: wp("72.07446808510637%"),
    minWidth: wp("72.07446808510637%"),
    height: hp("4.781420765027322%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.723404255319149%"),
    top: hp("8.060109289617486%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_195_541: {
    flexGrow: 1,
    width: wp("72.07446808510637%"),
    height: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(217, 208, 227, 1)",
    borderWidth: 1.0000001192092896,
    borderTopLeftRadius: 27.000003814697266,
    borderTopRightRadius: 27.000003814697266,
    borderBottomLeftRadius: 27.000003814697266,
    borderBottomRightRadius: 27.000003814697266
  },
  View_195_542: {
    flexGrow: 1,
    width: wp("55.88662573631774%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.948183749584443%"),
    top: hp("1.1953551912568319%"),
    justifyContent: "flex-start"
  },
  Text_195_542: {
    color: "rgba(149, 134, 168, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213,
    textTransform: "none"
  },
  ImageBackground_195_546: {
    flexGrow: 1,
    width: wp("4.625098248745533%"),
    height: hp("2.390710382513661%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.239670773769948%"),
    top: hp("1.1953551912568319%")
  },
  View_195_247: {
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
  View_195_248: {
    width: wp("6.382978723404255%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_195_275: {
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
  ImageBackground_195_276: {
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
  ImageBackground_195_277: {
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
  ImageBackground_195_278: {
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
  View_195_279: {
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
  ImageBackground_195_280: {
    width: wp("99.7340425531915%"),
    height: hp("9.972677595628415%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_195_281: {
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
  View_195_282: {
    width: wp("26.329787234042552%"),
    height: hp("10.92896174863388%"),
    top: hp("-0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.914893617021276%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_195_283: {
    width: wp("26.329787234042552%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_195_284: {
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
  Text_195_284: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_195_285: {
    width: wp("6.382978723404255%"),
    height: hp("3.278688524590164%"),
    top: hp("3.8251366120218506%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.106382978723403%")
  },
  View_195_290: {
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
  View_195_291: {
    width: wp("30.0531914893617%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_195_292: {
    width: wp("6.382978723404255%"),
    height: hp("3.278688524590164%"),
    top: hp("3.825136612021865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.968085106382986%")
  },
  View_195_297: {
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
  Text_195_297: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_195_298: {
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
  View_195_299: {
    width: wp("26.329787234042552%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_195_300: {
    width: wp("6.382978723404255%"),
    height: hp("3.278688524590164%"),
    top: hp("3.825136612021865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.106382978723417%")
  },
  View_195_303: {
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
  Text_195_303: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_195_304: {
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
  View_195_305: {
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
  ImageBackground_195_306: {
    width: wp("99.7340425531915%"),
    height: hp("9.972677595628415%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_195_307: {
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
  View_195_308: {
    width: wp("26.329787234042552%"),
    height: hp("10.92896174863388%"),
    top: hp("-0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.914893617021276%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_195_309: {
    width: wp("26.329787234042552%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_195_310: {
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
  Text_195_310: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_195_311: {
    width: wp("6.382978723404255%"),
    height: hp("3.278688524590164%"),
    top: hp("3.8251366120218506%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.106382978723403%")
  },
  View_195_316: {
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
  View_195_317: {
    width: wp("30.0531914893617%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_195_318: {
    width: wp("6.382978723404255%"),
    height: hp("3.278688524590164%"),
    top: hp("3.825136612021865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.968085106382986%")
  },
  View_195_323: {
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
  Text_195_323: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_195_324: {
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
  View_195_325: {
    width: wp("26.329787234042552%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_195_326: {
    width: wp("6.382978723404255%"),
    height: hp("3.278688524590164%"),
    top: hp("3.825136612021865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.106382978723417%")
  },
  View_195_329: {
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
  Text_195_329: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_195_330: {
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
  View_195_331: {
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
  ImageBackground_195_332: {
    width: wp("99.7340425531915%"),
    height: hp("9.972677595628415%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_195_333: {
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
  View_195_334: {
    width: wp("30.319148936170215%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_195_335: {
    width: wp("30.319148936170215%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_195_336: {
    width: wp("6.117021276595745%"),
    height: hp("3.415300546448088%"),
    top: hp("3.1420765027322375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.96808510638298%")
  },
  View_195_341: {
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
  Text_195_341: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_195_342: {
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
  View_195_343: {
    width: wp("34.308510638297875%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_195_344: {
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
  Text_195_344: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_195_345: {
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
  ImageBackground_195_346: {
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
  View_195_347: {
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
  View_195_348: {
    width: wp("30.319148936170215%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_195_350: {
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
  View_247_43: {
    width: wp("23.138297872340424%"),
    minWidth: wp("23.138297872340424%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.90425531914893%"),
    top: hp("8.196721311475414%"),
    justifyContent: "flex-start"
  },
  Text_247_43: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_195_351: {
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
  View_195_355: {
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
  Text_195_355: {
    color: "rgba(66, 67, 71, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_195_356: {
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
  Text_195_356: {
    color: "rgba(66, 67, 71, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_195_358: {
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
  Text_195_358: {
    color: "rgba(187, 187, 187, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_195_360: {
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
  Text_195_360: {
    color: "rgba(187, 187, 187, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_195_363: {
    width: wp("10.666672726894946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.648936170212767%"),
    top: hp("85.65573770491804%"),
    justifyContent: "flex-start"
  },
  Text_195_363: {
    color: "rgba(66, 67, 71, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_195_364: {
    width: wp("10.666672726894946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.4468085106383%"),
    top: hp("85.65573770491804%"),
    justifyContent: "flex-start"
  },
  Text_195_364: {
    color: "rgba(66, 67, 71, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_195_365: {
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
  View_195_366: {
    width: wp("17.72908961519282%"),
    minWidth: wp("17.72908961519282%"),
    height: hp("2.8233038271711175%"),
    minHeight: hp("2.8233038271711175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.36878350440492%"),
    top: hp("1.0929128511355874%")
  },
  ImageBackground_195_367: {
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
  ImageBackground_195_371: {
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
  ImageBackground_195_375: {
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
  View_195_382: {
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
  ImageBackground_195_383: {
    width: wp("14.361702127659576%"),
    minWidth: wp("14.361702127659576%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_195_534: {
    width: wp("41.22340425531915%"),
    height: hp("7.650273224043716%"),
    top: hp("45.49180327868852%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.45744680851064%"),
    resizeMode: "cover"
  },
  ImageBackground_195_562: {
    width: wp("7.579787234042554%"),
    height: hp("0.819672131147541%"),
    top: hp("43.85245901639344%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.54255319148936%")
  },
  ImageBackground_195_567: {
    width: wp("1.5957446808510638%"),
    height: hp("0.819672131147541%"),
    top: hp("43.85245901639344%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.308510638297875%")
  },
  ImageBackground_195_566: {
    width: wp("1.5957446808510638%"),
    height: hp("0.819672131147541%"),
    top: hp("43.85245901639344%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.85106382978723%")
  },
  ImageBackground_195_569: {
    width: wp("111.17021276595744%"),
    minWidth: wp("111.17021276595744%"),
    height: hp("27.049180327868854%"),
    minHeight: hp("27.049180327868854%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14.071038251366119%"),
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
