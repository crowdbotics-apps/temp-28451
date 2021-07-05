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
      <View style={styles.View_166_317} />
      <View style={styles.View_167_41}>
        <View style={styles.View_167_42}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3691/feb7/366f44a45b503187a23ddfdd857f8ee7"
            }}
            style={styles.ImageBackground_167_43}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/43be/7550/7380f5e1d3e326319e588195bb25ec6c"
            }}
            style={styles.ImageBackground_167_47}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8454/018e/80dca3dfb2f358537e65d74c56a48ad0"
            }}
            style={styles.ImageBackground_167_51}
          />
        </View>
        <View style={styles.View_167_58}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0170/119f/a1a630463be3134b5083034d2bfab6f1"
            }}
            style={styles.ImageBackground_167_59}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f20d/48ac/73571d4af8437475aa12e478bdd8dce9"
        }}
        style={styles.ImageBackground_166_339}
      />
      <View style={styles.View_167_61} />
      <View style={styles.View_167_63}>
        <Text style={styles.Text_167_63}>General FAQs</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/39d1/713c/4330c93fae6e2f791bb00ba7d4a6b0e2"
        }}
        style={styles.ImageBackground_167_65}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78da/d27a/0a2a19169b195f9a5660614b9f0f3cf8"
        }}
        style={styles.ImageBackground_167_68}
      />
      <View style={styles.View_167_69}>
        <Text style={styles.Text_167_69}>What is nectars</Text>
      </View>
      <View style={styles.View_167_78} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/39d1/713c/4330c93fae6e2f791bb00ba7d4a6b0e2"
        }}
        style={styles.ImageBackground_167_79}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78da/d27a/0a2a19169b195f9a5660614b9f0f3cf8"
        }}
        style={styles.ImageBackground_167_80}
      />
      <View style={styles.View_167_81}>
        <Text style={styles.Text_167_81}>How to buy products</Text>
      </View>
      <View style={styles.View_167_70} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c96/1379/fff1ca42a8db87f5eace602e0dec7ac8"
        }}
        style={styles.ImageBackground_176_94}
      />
      <View style={styles.View_167_74} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/39d1/713c/4330c93fae6e2f791bb00ba7d4a6b0e2"
        }}
        style={styles.ImageBackground_167_86}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cea8/135e/11188795d31da406c52b9064580df0c1"
        }}
        style={styles.ImageBackground_167_82}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/39d1/713c/4330c93fae6e2f791bb00ba7d4a6b0e2"
        }}
        style={styles.ImageBackground_167_75}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78da/d27a/0a2a19169b195f9a5660614b9f0f3cf8"
        }}
        style={styles.ImageBackground_167_76}
      />
      <View style={styles.View_167_77}>
        <Text style={styles.Text_167_77}>Why nectars</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/39d1/713c/4330c93fae6e2f791bb00ba7d4a6b0e2"
        }}
        style={styles.ImageBackground_167_71}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/39d1/713c/4330c93fae6e2f791bb00ba7d4a6b0e2"
        }}
        style={styles.ImageBackground_167_83}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7186/c2c2/6e19c71bb407da6288a3ddb5e4d51f08"
        }}
        style={styles.ImageBackground_167_85}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78da/d27a/0a2a19169b195f9a5660614b9f0f3cf8"
        }}
        style={styles.ImageBackground_167_72}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/568b/143f/7eec5688ae3a69fd4656aee5859b34db"
        }}
        style={styles.ImageBackground_167_62}
      />
      <View style={styles.View_167_87}>
        <Text style={styles.Text_167_87}>How to apply if i am doctor</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_166_317: {
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
  View_167_41: {
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
  View_167_42: {
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
  ImageBackground_167_43: {
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
  ImageBackground_167_47: {
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
  ImageBackground_167_51: {
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
  View_167_58: {
    width: wp("14.555256064690028%"),
    minWidth: wp("14.555256064690028%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.660377358490567%"),
    top: hp("1.639344262295082%")
  },
  ImageBackground_167_59: {
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
  ImageBackground_166_339: {
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
  View_167_61: {
    width: wp("66.84636118598382%"),
    minWidth: wp("66.84636118598382%"),
    height: hp("10.655737704918032%"),
    minHeight: hp("10.655737704918032%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.598382749326145%"),
    top: hp("9.836065573770492%"),
    backgroundColor: "rgba(146, 179, 138, 1)",
    opacity: 0.10000000149011612,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_167_63: {
    width: wp("43.66576819407008%"),
    minWidth: wp("43.66576819407008%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.18867924528302%"),
    top: hp("15.163934426229508%"),
    justifyContent: "center"
  },
  Text_167_63: {
    color: "rgba(18, 14, 33, 1)",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_167_65: {
    width: wp("97.30458221024259%"),
    minWidth: wp("97.30458221024259%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3477088948787064%"),
    top: hp("23.08743169398907%")
  },
  ImageBackground_167_68: {
    width: wp("3.5362544406777765%"),
    height: hp("0.830857610441948%"),
    top: hp("26.146368641670936%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.41910686647154%")
  },
  View_167_69: {
    width: wp("84.63611859838275%"),
    minWidth: wp("84.63611859838275%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.660377358490567%"),
    top: hp("24.863387978142075%"),
    justifyContent: "center"
  },
  Text_167_69: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_167_78: {
    width: wp("99.19137466307278%"),
    minWidth: wp("99.19137466307278%"),
    height: hp("94.94535519125684%"),
    minHeight: hp("94.94535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.2695417789757413%"),
    top: hp("23.770491803278688%")
  },
  ImageBackground_167_79: {
    width: wp("97.30458221024259%"),
    minWidth: wp("97.30458221024259%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6172506738544474%"),
    top: hp("40.84699453551913%")
  },
  ImageBackground_167_80: {
    width: wp("3.5362544406777765%"),
    height: hp("0.830857610441948%"),
    top: hp("43.90593148320099%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.88004798580694%")
  },
  View_167_81: {
    width: wp("84.63611859838275%"),
    minWidth: wp("84.63611859838275%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.121293800539084%"),
    top: hp("42.62295081967213%"),
    justifyContent: "center"
  },
  Text_167_81: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_167_70: {
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
  ImageBackground_176_94: {
    width: wp("1.4688075392072735%"),
    height: hp("1.757457086948749%"),
    top: hp("8.60655737704918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.660377358490567%")
  },
  View_167_74: {
    width: wp("99.19137466307278%"),
    minWidth: wp("99.19137466307278%"),
    height: hp("94.94535519125684%"),
    minHeight: hp("94.94535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5390835579514826%"),
    top: hp("14.48087431693989%")
  },
  ImageBackground_167_86: {
    width: wp("97.30458221024259%"),
    minWidth: wp("97.30458221024259%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3477088948787064%"),
    top: hp("90.7103825136612%")
  },
  ImageBackground_167_82: {
    width: wp("97.30458221024259%"),
    minWidth: wp("97.30458221024259%"),
    height: hp("32.92349726775956%"),
    minHeight: hp("32.92349726775956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.078167115902965%"),
    top: hp("56.9672131147541%")
  },
  ImageBackground_167_75: {
    width: wp("97.30458221024259%"),
    minWidth: wp("97.30458221024259%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6172506738544474%"),
    top: hp("31.557377049180328%")
  },
  ImageBackground_167_76: {
    width: wp("3.5362544406777765%"),
    height: hp("0.830857610441948%"),
    top: hp("34.61631399686219%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.68867332273416%")
  },
  View_167_77: {
    width: wp("84.63611859838275%"),
    minWidth: wp("84.63611859838275%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.929919137466308%"),
    top: hp("33.33333333333333%"),
    justifyContent: "center"
  },
  Text_167_77: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_167_71: {
    width: wp("97.30458221024259%"),
    minWidth: wp("97.30458221024259%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6172506738544474%"),
    top: hp("49.31693989071038%")
  },
  ImageBackground_167_83: {
    width: wp("97.30458221024259%"),
    minWidth: wp("97.30458221024259%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6172506738544474%"),
    top: hp("49.31693989071038%")
  },
  ImageBackground_167_85: {
    width: wp("4.3808518072986855%"),
    height: hp("0.8749701937691111%"),
    top: hp("52.772897188780746%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.78109206536388%")
  },
  ImageBackground_167_72: {
    width: wp("3.5362544406777765%"),
    height: hp("0.830857610441948%"),
    top: hp("26.146368641670936%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.41913154375843%")
  },
  ImageBackground_167_62: {
    width: wp("18.059299191374663%"),
    minWidth: wp("18.059299191374663%"),
    height: hp("8.879781420765028%"),
    minHeight: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.97035040431267%"),
    top: hp("4.508196721311475%"),
    resizeMode: "cover"
  },
  View_167_87: {
    width: wp("85.71428571428571%"),
    minWidth: wp("85.71428571428571%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.660377358490567%"),
    top: hp("92.75956284153006%"),
    justifyContent: "center"
  },
  Text_167_87: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
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
