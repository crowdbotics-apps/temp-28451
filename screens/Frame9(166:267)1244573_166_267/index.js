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
      <View style={styles.View_166_268} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f20d/48ac/73571d4af8437475aa12e478bdd8dce9"
        }}
        style={styles.ImageBackground_166_290}
      />
      <View style={styles.View_193_40}>
        <View style={styles.View_193_41}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3691/feb7/366f44a45b503187a23ddfdd857f8ee7"
            }}
            style={styles.ImageBackground_193_42}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/43be/7550/7380f5e1d3e326319e588195bb25ec6c"
            }}
            style={styles.ImageBackground_193_46}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8454/018e/80dca3dfb2f358537e65d74c56a48ad0"
            }}
            style={styles.ImageBackground_193_50}
          />
        </View>
        <View style={styles.View_193_57}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0170/119f/a1a630463be3134b5083034d2bfab6f1"
            }}
            style={styles.ImageBackground_193_58}
          />
        </View>
      </View>
      <View style={styles.View_195_107} />
      <View style={styles.View_195_118} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3902/ec9e/3ac498095ed21ef4ea61efa97f46cc0e"
        }}
        style={styles.ImageBackground_289_51}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3902/ec9e/3ac498095ed21ef4ea61efa97f46cc0e"
        }}
        style={styles.ImageBackground_289_52}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3902/ec9e/3ac498095ed21ef4ea61efa97f46cc0e"
        }}
        style={styles.ImageBackground_289_53}
      />
      <View style={styles.View_195_119}>
        <View style={styles.View_195_120} />
        <View style={styles.View_195_121}>
          <Text style={styles.Text_195_121}>Buy</Text>
        </View>
      </View>
      <View style={styles.View_193_60}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c18/f175/c998898677130f1cae843ed029087409"
          }}
          style={styles.ImageBackground_193_61}
        />
        <View style={styles.View_193_62}>
          <View style={styles.View_193_63}>
            <View style={styles.View_193_64} />
            <View style={styles.View_193_65}>
              <Text style={styles.Text_193_65}> EXPLORE</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7977/bea6/2b0c922bcb79fde6220421f434bb7046"
              }}
              style={styles.ImageBackground_193_66}
            />
          </View>
        </View>
        <View style={styles.View_193_71}>
          <View style={styles.View_193_72} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/346a/9205/ed593c58de4096f93d4e809437d3bb55"
            }}
            style={styles.ImageBackground_193_73}
          />
          <View style={styles.View_193_78}>
            <Text style={styles.Text_193_78}>SHOP</Text>
          </View>
        </View>
        <View style={styles.View_193_79}>
          <View style={styles.View_193_80} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/332c/7b35/c5d0c1237a7415cdb79616b98e1286e4"
            }}
            style={styles.ImageBackground_193_81}
          />
          <View style={styles.View_193_84}>
            <Text style={styles.Text_193_84}> ACCOUNT</Text>
          </View>
        </View>
        <View style={styles.View_193_85} />
        <View style={styles.View_193_86}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc95/f26d/b50a6ca404aafd5298ac7d49c2b872f9"
            }}
            style={styles.ImageBackground_193_87}
          />
          <View style={styles.View_193_88}>
            <View style={styles.View_193_89}>
              <View style={styles.View_193_90} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c05e/3310/5fa19be2dd61005af7ab5013fddc1070"
                }}
                style={styles.ImageBackground_193_91}
              />
              <View style={styles.View_193_96}>
                <Text style={styles.Text_193_96}> EXPLORE</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_193_97}>
            <View style={styles.View_193_98} />
            <View style={styles.View_193_99}>
              <Text style={styles.Text_193_99}>SHOP</Text>
            </View>
            <View style={styles.View_193_100} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c71/1bbe/48cba4b9223b7d65d92d006c36be5480"
              }}
              style={styles.ImageBackground_193_101}
            />
          </View>
          <View style={styles.View_193_102}>
            <View style={styles.View_193_103} />
            <View style={styles.View_193_104}>
              <Text style={styles.Text_193_104}>CHAT</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6bde/51bf/5f6a9efd5cf41a76dec550c0fc3d6a8f"
              }}
              style={styles.ImageBackground_193_105}
            />
          </View>
          <View style={styles.View_193_106} />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0323/8a23/bc30a6d3c63580327113e9fd8cb7ac81"
        }}
        style={styles.ImageBackground_195_109}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed7a/032c/f7f94effc025b8fcffed1dffb37be654"
        }}
        style={styles.ImageBackground_195_110}
      />
      <View style={styles.View_195_122}>
        <Text style={styles.Text_195_122}>
          Khadi Natural Aloe Vera (Green) Facial Massage Gel withLicorice &amp;
          Cucumber Extracts - Fresh &amp; Hydrated-200g
        </Text>
      </View>
      <View style={styles.View_195_123}>
        <Text style={styles.Text_195_123}>
          Aloe Vera facial massage gel has healing and moisturizing properties
          and is best to provide the dry skin with the much needed hydration.
          Exfoliating the skin is important to get rid of dead cells and clear
          pores of grime. It&#39;s an all-natural and gentle way to exfoliate
          your skin. Aloe Vera is non-oily and penetrates the skin layers
          providing deep hydration from within and gives smooth, silky soft
          skin.
        </Text>
      </View>
      <View style={styles.View_195_130}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/60ba/58f5/c57e83a628bb604f5e6aacb9246509b0"
          }}
          style={styles.ImageBackground_195_137}
        />
        <View style={styles.View_195_132}>
          <Text style={styles.Text_195_132}>ADD</Text>
        </View>
      </View>
      <View style={styles.View_195_142}>
        <Text style={styles.Text_195_142}>cOSt: Rs 456</Text>
      </View>
      <View style={styles.View_289_44}>
        <Text style={styles.Text_289_44}>reviews</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6ed/4e5c/d377951b6913446c4dfbda51f46d2993"
        }}
        style={styles.ImageBackground_289_49}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3902/ec9e/3ac498095ed21ef4ea61efa97f46cc0e"
        }}
        style={styles.ImageBackground_289_50}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_166_268: {
    width: wp("99.19137466307278%"),
    minWidth: wp("99.19137466307278%"),
    height: hp("94.94535519125684%"),
    minHeight: hp("94.94535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2695417789757413%"),
    top: hp("6.0109289617486334%")
  },
  ImageBackground_166_290: {
    width: wp("64.6900269541779%"),
    minWidth: wp("64.6900269541779%"),
    height: hp("9.153005464480875%"),
    minHeight: hp("9.153005464480875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-11.859838274932615%"),
    top: hp("-17.89617486338798%")
  },
  View_193_40: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.5390835579514826%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_193_41: {
    width: wp("17.96802613291779%"),
    minWidth: wp("17.96802613291779%"),
    height: hp("2.8233038271711175%"),
    minHeight: hp("2.8233038271711175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.07725767562331%"),
    top: hp("1.0929128511355874%")
  },
  ImageBackground_193_42: {
    width: wp("6.557422442577598%"),
    minWidth: wp("6.557422442577598%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.410612944322779%"),
    top: hp("1.2750344198258197%")
  },
  ImageBackground_193_46: {
    width: wp("4.116543412529876%"),
    minWidth: wp("4.116543412529876%"),
    height: hp("1.4980287499766531%"),
    minHeight: hp("1.4980287499766531%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.937223614386795%"),
    top: hp("1.2746675418374318%")
  },
  ImageBackground_193_50: {
    width: wp("4.5822102425876015%"),
    minWidth: wp("4.5822102425876015%"),
    height: hp("1.4571949432456428%"),
    minHeight: hp("1.4571949432456428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.3205606429303276%")
  },
  View_193_57: {
    width: wp("14.555256064690028%"),
    minWidth: wp("14.555256064690028%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.660377358490566%"),
    top: hp("1.639344262295082%")
  },
  ImageBackground_193_58: {
    width: wp("14.555256064690028%"),
    minWidth: wp("14.555256064690028%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_195_107: {
    width: wp("100.53908355795149%"),
    minWidth: wp("100.53908355795149%"),
    height: hp("61.74863387978142%"),
    minHeight: hp("61.74863387978142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("41.39344262295082%"),
    backgroundColor: "rgba(245, 245, 245, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_195_118: {
    width: wp("99.19137466307278%"),
    minWidth: wp("99.19137466307278%"),
    height: hp("94.94535519125684%"),
    minHeight: hp("94.94535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6954177897574128%"),
    top: hp("19.672131147540984%")
  },
  ImageBackground_289_51: {
    width: wp("4.0431266846361185%"),
    minWidth: wp("4.0431266846361185%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.93800539083558%"),
    top: hp("53.825136612021865%"),
    resizeMode: "cover"
  },
  ImageBackground_289_52: {
    width: wp("4.0431266846361185%"),
    minWidth: wp("4.0431266846361185%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.086253369272237%"),
    top: hp("53.825136612021865%"),
    resizeMode: "cover"
  },
  ImageBackground_289_53: {
    width: wp("4.0431266846361185%"),
    minWidth: wp("4.0431266846361185%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.964959568733154%"),
    top: hp("53.825136612021865%"),
    resizeMode: "cover"
  },
  View_195_119: {
    width: wp("88.14016172506739%"),
    minWidth: wp("88.14016172506739%"),
    height: hp("7.377049180327869%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.62533692722372%"),
    top: hp("88.66120218579235%")
  },
  View_195_120: {
    width: wp("88.14016172506739%"),
    minWidth: wp("88.14016172506739%"),
    height: hp("7.377049180327869%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(115, 139, 243, 1)",
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14
  },
  View_195_121: {
    width: wp("9.433962264150944%"),
    minWidth: wp("9.433962264150944%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.35309973045822%"),
    top: hp("1.639344262295083%"),
    justifyContent: "flex-start"
  },
  Text_195_121: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_193_60: {
    width: wp("101.07816711590296%"),
    height: hp("9.972677595628415%"),
    top: hp("100.95628415300546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.5390835579514826%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_193_61: {
    width: wp("101.07816711590296%"),
    height: hp("9.972677595628415%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_193_62: {
    flexGrow: 1,
    width: wp("26.68463611859838%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.6172506738544477%"),
    top: hp("-0.4098360655737565%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_193_63: {
    width: wp("26.68463611859838%"),
    height: hp("10.92896174863388%"),
    top: hp("-0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.008086253369273%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_193_64: {
    width: wp("26.68463611859838%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_193_65: {
    width: wp("16.711590296495956%"),
    minWidth: wp("16.711590296495956%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.660377358490566%"),
    top: hp("8.469945355191257%"),
    justifyContent: "flex-start"
  },
  Text_193_65: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_193_66: {
    width: wp("6.46900269541779%"),
    height: hp("3.278688524590164%"),
    top: hp("3.8251366120218506%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.242587601078167%")
  },
  View_193_71: {
    flexGrow: 1,
    width: wp("30.45822102425876%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.1967654986523%"),
    top: hp("-0.9562841530054556%"),
    backgroundColor: "rgba(229, 229, 229, 1)"
  },
  View_193_72: {
    width: wp("30.45822102425876%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_193_73: {
    width: wp("6.46900269541779%"),
    height: hp("3.278688524590164%"),
    top: hp("3.825136612021865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.129380053908356%")
  },
  View_193_78: {
    width: wp("10.242587601078167%"),
    minWidth: wp("10.242587601078167%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.59029649595687%"),
    top: hp("8.469945355191257%"),
    justifyContent: "flex-start"
  },
  Text_193_78: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_193_79: {
    flexGrow: 1,
    width: wp("26.68463611859838%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.39353099730458%"),
    top: hp("-0.9562841530054556%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_193_80: {
    width: wp("26.68463611859838%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_193_81: {
    width: wp("6.46900269541779%"),
    height: hp("3.278688524590164%"),
    top: hp("3.825136612021865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.24258760107817%")
  },
  View_193_84: {
    width: wp("17.25067385444744%"),
    minWidth: wp("17.25067385444744%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8517520215633425%"),
    top: hp("8.606557377049185%"),
    justifyContent: "flex-start"
  },
  Text_193_84: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_193_85: {
    flexGrow: 1,
    width: wp("101.07816711590296%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.9562841530054556%"),
    backgroundColor: "rgba(217, 208, 227, 1)"
  },
  View_193_86: {
    width: wp("101.07816711590296%"),
    height: hp("9.972677595628415%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_193_87: {
    width: wp("101.07816711590296%"),
    height: hp("9.972677595628415%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_193_88: {
    flexGrow: 1,
    width: wp("30.727762803234505%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.9562841530054556%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_193_89: {
    width: wp("30.727762803234505%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_193_90: {
    width: wp("30.727762803234505%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_193_91: {
    width: wp("6.199460916442049%"),
    height: hp("3.415300546448088%"),
    top: hp("3.1420765027322375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.129380053908354%")
  },
  View_193_96: {
    width: wp("16.711590296495956%"),
    minWidth: wp("16.711590296495956%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.086253369272237%"),
    top: hp("8.469945355191257%"),
    justifyContent: "flex-start"
  },
  Text_193_96: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_193_97: {
    flexGrow: 1,
    width: wp("34.77088948787062%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.34501347708895%"),
    top: hp("-0.9562841530054556%"),
    backgroundColor: "rgba(229, 229, 229, 1)"
  },
  View_193_98: {
    width: wp("34.77088948787062%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_193_99: {
    width: wp("10.242587601078167%"),
    minWidth: wp("10.242587601078167%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.824797843665774%"),
    top: hp("8.469945355191257%"),
    justifyContent: "flex-start"
  },
  Text_193_99: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_193_100: {
    width: wp("8.62533692722372%"),
    minWidth: wp("8.62533692722372%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.164420485175203%"),
    top: hp("3.278688524590166%")
  },
  ImageBackground_193_101: {
    width: wp("6.46900269541779%"),
    minWidth: wp("6.46900269541779%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.824797843665774%"),
    top: hp("3.825136612021865%"),
    resizeMode: "cover"
  },
  View_193_102: {
    flexGrow: 1,
    width: wp("30.727762803234505%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.35040431266846%"),
    top: hp("-0.9562841530054556%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_193_103: {
    width: wp("30.727762803234505%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_193_104: {
    width: wp("23.450134770889488%"),
    minWidth: wp("23.450134770889488%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.051212938005392%"),
    top: hp("8.606557377049185%"),
    justifyContent: "flex-start"
  },
  Text_193_104: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_193_105: {
    width: wp("5.660377358490567%"),
    minWidth: wp("5.660377358490567%"),
    height: hp("3.1420765027322406%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.051212938005392%"),
    top: hp("3.278688524590166%"),
    resizeMode: "cover"
  },
  View_193_106: {
    flexGrow: 1,
    width: wp("101.07816711590296%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.9562841530054556%"),
    backgroundColor: "rgba(217, 208, 227, 1)"
  },
  ImageBackground_195_109: {
    width: wp("71.69811320754717%"),
    minWidth: wp("71.69811320754717%"),
    height: hp("32.650273224043715%"),
    minHeight: hp("32.650273224043715%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.442048517520217%"),
    top: hp("5.601092896174864%"),
    resizeMode: "cover"
  },
  ImageBackground_195_110: {
    width: wp("7.681940700808626%"),
    height: hp("0.819672131147541%"),
    top: hp("38.66120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.36118598382749%")
  },
  View_195_122: {
    width: wp("92.18328840970351%"),
    minWidth: wp("92.18328840970351%"),
    minHeight: hp("10.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.5822102425876015%"),
    top: hp("44.39890710382514%"),
    justifyContent: "flex-start"
  },
  Text_195_122: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_195_123: {
    width: wp("92.72237196765498%"),
    minWidth: wp("92.72237196765498%"),
    minHeight: hp("26.229508196721312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7735849056603774%"),
    top: hp("57.786885245901644%"),
    justifyContent: "flex-start"
  },
  Text_195_123: {
    color: "rgba(142, 142, 142, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_195_130: {
    width: wp("28.84097035040431%"),
    minWidth: wp("28.84097035040431%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.11590296495957%"),
    top: hp("80.60109289617486%"),
    backgroundColor: "rgba(146, 179, 138, 1)"
  },
  ImageBackground_195_137: {
    flexGrow: 1,
    width: wp("5.3908355795148255%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.469002695417785%"),
    top: hp("1.639344262295083%")
  },
  View_195_132: {
    flexGrow: 1,
    width: wp("8.086253369272237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.17250673854447%"),
    top: hp("1.7759562841530112%"),
    justifyContent: "center"
  },
  Text_195_132: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.009999999776482582,
    textTransform: "uppercase"
  },
  View_195_142: {
    width: wp("41.23989218328841%"),
    minWidth: wp("41.23989218328841%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.121293800539084%"),
    top: hp("81.69398907103826%"),
    justifyContent: "center"
  },
  Text_195_142: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.009999999776482582,
    textTransform: "uppercase"
  },
  View_289_44: {
    width: wp("19.137466307277627%"),
    minWidth: wp("19.137466307277627%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.84097035040431%"),
    top: hp("53.551912568306015%"),
    justifyContent: "flex-start"
  },
  Text_289_44: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_289_49: {
    width: wp("4.31266846361186%"),
    minWidth: wp("4.31266846361186%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.641509433962266%"),
    top: hp("53.825136612021865%"),
    resizeMode: "cover"
  },
  ImageBackground_289_50: {
    width: wp("4.0431266846361185%"),
    minWidth: wp("4.0431266846361185%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.78975741239892%"),
    top: hp("53.825136612021865%"),
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
