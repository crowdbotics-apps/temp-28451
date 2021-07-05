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
      <View style={styles.View_189_129} />
      <View style={styles.View_189_130}>
        <View style={styles.View_189_131} />
        <View style={styles.View_189_132}>
          <Text style={styles.Text_189_132}>Log In</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f20d/48ac/73571d4af8437475aa12e478bdd8dce9"
        }}
        style={styles.ImageBackground_189_133}
      />
      <View style={styles.View_189_135} />
      <View style={styles.View_189_136}>
        <View style={styles.View_189_137} />
        <View style={styles.View_189_138}>
          <Text style={styles.Text_189_138}>OTP</Text>
        </View>
      </View>
      <View style={styles.View_189_139}>
        <View style={styles.View_189_140} />
        <View style={styles.View_189_141}>
          <Text style={styles.Text_189_141}>Enter mobile Number</Text>
        </View>
      </View>
      <View style={styles.View_189_169}>
        <View style={styles.View_189_170} />
        <View style={styles.View_189_171}>
          <Text style={styles.Text_189_171}>Get OTP</Text>
        </View>
      </View>
      <View style={styles.View_189_148}>
        <Text style={styles.Text_189_148}>Login with Mobile</Text>
      </View>
      <View style={styles.View_189_149}>
        <View style={styles.View_189_150}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3691/feb7/366f44a45b503187a23ddfdd857f8ee7"
            }}
            style={styles.ImageBackground_189_151}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/43be/7550/7380f5e1d3e326319e588195bb25ec6c"
            }}
            style={styles.ImageBackground_189_155}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8454/018e/80dca3dfb2f358537e65d74c56a48ad0"
            }}
            style={styles.ImageBackground_189_159}
          />
        </View>
        <View style={styles.View_189_166}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0170/119f/a1a630463be3134b5083034d2bfab6f1"
            }}
            style={styles.ImageBackground_189_167}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e40e/2b6f/f9decde6d66b05232ddf3e98ac429408"
        }}
        style={styles.ImageBackground_191_38}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_189_129: {
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
  View_189_130: {
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
  View_189_131: {
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
  View_189_132: {
    width: wp("14.285714285714285%"),
    minWidth: wp("14.285714285714285%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.92722371967655%"),
    top: hp("1.639344262295097%"),
    justifyContent: "flex-start"
  },
  Text_189_132: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  ImageBackground_189_133: {
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
  View_189_135: {
    width: wp("92.45283018867924%"),
    minWidth: wp("92.45283018867924%"),
    height: hp("31.967213114754102%"),
    minHeight: hp("31.967213114754102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7735849056603774%"),
    top: hp("39.07103825136612%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.23999999463558197,
    borderColor: "rgba(251, 234, 255, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_189_136: {
    width: wp("79.51482479784366%"),
    minWidth: wp("79.51482479784366%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.433962264150944%"),
    top: hp("61.338797814207645%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_189_137: {
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
  View_189_138: {
    width: wp("8.355795148247978%"),
    top: hp("2.3224043715847102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.31266846361186%"),
    justifyContent: "center"
  },
  Text_189_138: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_189_139: {
    width: wp("79.51482479784366%"),
    minWidth: wp("79.51482479784366%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.242587601078167%"),
    top: hp("50.95628415300546%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_189_140: {
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
  View_189_141: {
    width: wp("40.700808625336926%"),
    top: hp("2.322404371584703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.31266846361186%"),
    justifyContent: "center"
  },
  Text_189_141: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_189_169: {
    width: wp("18.598382749326145%"),
    minWidth: wp("18.598382749326145%"),
    height: hp("4.781420765027322%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.46361185983828%"),
    top: hp("52.459016393442624%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_189_170: {
    width: wp("18.598382749326145%"),
    height: hp("4.781420765027322%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(146, 179, 138, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_189_171: {
    width: wp("19.239704306877528%"),
    top: hp("1.092896174863391%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9239708419758585%"),
    justifyContent: "center"
  },
  Text_189_171: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_189_148: {
    width: wp("57.95148247978437%"),
    minWidth: wp("57.95148247978437%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.67654986522911%"),
    top: hp("43.30601092896175%"),
    justifyContent: "center"
  },
  Text_189_148: {
    color: "rgba(18, 14, 33, 1)",
    fontSize: 22,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_189_149: {
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
  View_189_150: {
    width: wp("17.96802613291779%"),
    minWidth: wp("17.96802613291779%"),
    height: hp("2.8233038271711175%"),
    minHeight: hp("2.8233038271711175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.07726590138562%"),
    top: hp("1.0929128511355874%")
  },
  ImageBackground_189_151: {
    width: wp("6.557422442577598%"),
    minWidth: wp("6.557422442577598%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.410604718560478%"),
    top: hp("1.2750344198258197%")
  },
  ImageBackground_189_155: {
    width: wp("4.116543412529876%"),
    minWidth: wp("4.116543412529876%"),
    height: hp("1.4980287499766531%"),
    minHeight: hp("1.4980287499766531%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.9372153886244945%"),
    top: hp("1.2746675418374318%")
  },
  ImageBackground_189_159: {
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
  View_189_166: {
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
  ImageBackground_189_167: {
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
  ImageBackground_191_38: {
    width: wp("39.35309973045822%"),
    minWidth: wp("39.35309973045822%"),
    height: hp("31.420765027322407%"),
    minHeight: hp("31.420765027322407%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.153638814016176%"),
    top: hp("7.650273224043716%"),
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
