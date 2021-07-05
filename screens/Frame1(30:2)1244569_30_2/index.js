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
      <View style={styles.View_30_47} />
      <View style={styles.View_176_219}>
        <View style={styles.View_176_220} />
        <View style={styles.View_176_221}>
          <Text style={styles.Text_176_221}>Sign Up</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f20d/48ac/73571d4af8437475aa12e478bdd8dce9"
        }}
        style={styles.ImageBackground_120_8}
      />
      <View style={styles.View_176_183}>
        <Text style={styles.Text_176_183}>You have an account ? Log-in</Text>
      </View>
      <View style={styles.View_176_185} />
      <View style={styles.View_176_210}>
        <View style={styles.View_176_211} />
        <View style={styles.View_176_212}>
          <Text style={styles.Text_176_212}>Password</Text>
        </View>
      </View>
      <View style={styles.View_176_207}>
        <View style={styles.View_176_208} />
        <View style={styles.View_176_209}>
          <Text style={styles.Text_176_209}>Email</Text>
        </View>
      </View>
      <View style={styles.View_176_204}>
        <View style={styles.View_176_205} />
        <View style={styles.View_176_206}>
          <Text style={styles.Text_176_206}>Last name</Text>
        </View>
      </View>
      <View style={styles.View_176_201}>
        <View style={styles.View_176_202} />
        <View style={styles.View_176_203}>
          <Text style={styles.Text_176_203}>First name</Text>
        </View>
      </View>
      <View style={styles.View_176_190}>
        <Text style={styles.Text_176_190}>Sign-up</Text>
      </View>
      <View style={styles.View_176_222}>
        <View style={styles.View_176_223}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3691/feb7/366f44a45b503187a23ddfdd857f8ee7"
            }}
            style={styles.ImageBackground_176_224}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/43be/7550/7380f5e1d3e326319e588195bb25ec6c"
            }}
            style={styles.ImageBackground_176_228}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8454/018e/80dca3dfb2f358537e65d74c56a48ad0"
            }}
            style={styles.ImageBackground_176_232}
          />
        </View>
        <View style={styles.View_176_239}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0170/119f/a1a630463be3134b5083034d2bfab6f1"
            }}
            style={styles.ImageBackground_176_240}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/68e8/9436/4228c63e1c3922e0043a9ccc6cc69dd4"
        }}
        style={styles.ImageBackground_191_37}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_30_47: {
    width: wp("99.19137466307278%"),
    minWidth: wp("99.19137466307278%"),
    height: hp("94.94535519125684%"),
    minHeight: hp("94.94535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.568306010928962%")
  },
  View_176_219: {
    width: wp("88.14016172506739%"),
    minWidth: wp("88.14016172506739%"),
    height: hp("7.377049180327869%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.929919137466308%"),
    top: hp("81.55737704918032%")
  },
  View_176_220: {
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
  View_176_221: {
    width: wp("18.059299191374663%"),
    minWidth: wp("18.059299191374663%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.04043126684636%"),
    top: hp("1.639344262295097%"),
    justifyContent: "flex-start"
  },
  Text_176_221: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  ImageBackground_120_8: {
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
  View_176_183: {
    width: wp("63.881401617250674%"),
    minWidth: wp("63.881401617250674%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.25067385444744%"),
    top: hp("99.59016393442623%"),
    justifyContent: "center"
  },
  Text_176_183: {
    color: "rgba(18, 14, 33, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_176_185: {
    width: wp("92.45283018867924%"),
    minWidth: wp("92.45283018867924%"),
    height: hp("56.284153005464475%"),
    minHeight: hp("56.284153005464475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.5040431266846364%"),
    top: hp("21.311475409836063%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.23999999463558197,
    borderColor: "rgba(251, 234, 255, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_176_210: {
    width: wp("79.51482479784366%"),
    minWidth: wp("79.51482479784366%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.164420485175203%"),
    top: hp("67.89617486338798%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_176_211: {
    width: wp("79.51482479784366%"),
    height: hp("7.103825136612022%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0781671159029642%"),
    backgroundColor: "rgba(146, 179, 138, 1)",
    opacity: 0.10000000149011612,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_176_212: {
    width: wp("19.137466307277627%"),
    top: hp("2.322404371584696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.312668463611859%"),
    justifyContent: "center"
  },
  Text_176_212: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_176_207: {
    width: wp("79.51482479784366%"),
    minWidth: wp("79.51482479784366%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.973045822102426%"),
    top: hp("57.513661202185794%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_176_208: {
    width: wp("79.51482479784366%"),
    height: hp("7.103825136612022%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(146, 179, 138, 1)",
    opacity: 0.10000000149011612,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_176_209: {
    width: wp("10.781671159029651%"),
    top: hp("2.322404371584696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.312668463611859%"),
    justifyContent: "center"
  },
  Text_176_209: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_176_204: {
    width: wp("79.51482479784366%"),
    minWidth: wp("79.51482479784366%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.973045822102426%"),
    top: hp("47.13114754098361%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_176_205: {
    width: wp("79.51482479784366%"),
    height: hp("7.103825136612022%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(146, 179, 138, 1)",
    opacity: 0.10000000149011612,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_176_206: {
    width: wp("20.21563342318059%"),
    top: hp("2.322404371584696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.312668463611859%"),
    justifyContent: "center"
  },
  Text_176_206: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_176_201: {
    width: wp("79.51482479784366%"),
    minWidth: wp("79.51482479784366%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.973045822102426%"),
    top: hp("36.74863387978142%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_176_202: {
    width: wp("79.51482479784366%"),
    height: hp("7.103825136612022%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(146, 179, 138, 1)",
    opacity: 0.10000000149011612,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_176_203: {
    width: wp("20.485175202156334%"),
    top: hp("2.322404371584696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.312668463611859%"),
    justifyContent: "center"
  },
  Text_176_203: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_176_190: {
    width: wp("25.067385444743934%"),
    minWidth: wp("25.067385444743934%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.19676549865229%"),
    top: hp("27.595628415300546%"),
    justifyContent: "center"
  },
  Text_176_190: {
    color: "rgba(18, 14, 33, 1)",
    fontSize: 22,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_176_222: {
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
  View_176_223: {
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
  ImageBackground_176_224: {
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
  ImageBackground_176_228: {
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
  ImageBackground_176_232: {
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
  View_176_239: {
    width: wp("14.555256064690028%"),
    minWidth: wp("14.555256064690028%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6603855842528645%"),
    top: hp("1.639344262295082%")
  },
  ImageBackground_176_240: {
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
  ImageBackground_191_37: {
    width: wp("25.067385444743934%"),
    minWidth: wp("25.067385444743934%"),
    height: hp("19.12568306010929%"),
    minHeight: hp("19.12568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.46630727762803%"),
    top: hp("5.191256830601093%"),
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
