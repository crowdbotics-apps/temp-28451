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
      <View style={styles.View_166_366} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f20d/48ac/73571d4af8437475aa12e478bdd8dce9"
        }}
        style={styles.ImageBackground_166_388}
      />
      <View style={styles.View_176_101}>
        <View style={styles.View_176_102} />
        <View style={styles.View_176_103}>
          <Text style={styles.Text_176_103}>email ID</Text>
        </View>
        <View style={styles.View_176_104} />
        <View style={styles.View_176_125}>
          <View style={styles.View_176_126} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb78/6477/e230e4bf0605eae9199ae52a138e0415"
            }}
            style={styles.ImageBackground_176_127}
          />
        </View>
      </View>
      <View style={styles.View_176_107}>
        <View style={styles.View_176_108} />
        <View style={styles.View_176_109}>
          <Text style={styles.Text_176_109}>Mobile No: 58498746</Text>
        </View>
      </View>
      <View style={styles.View_176_110}>
        <View style={styles.View_176_111} />
        <View style={styles.View_176_112}>
          <Text style={styles.Text_176_112}>Dustin</Text>
        </View>
      </View>
      <View style={styles.View_176_113}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/03e5/c0c5/0e20c9cb419583d5917c679e7a1e70be"
          }}
          style={styles.ImageBackground_176_114}
        />
        <View style={styles.View_193_37} />
        <View style={styles.View_193_39}>
          <Text style={styles.Text_193_39}>Settings</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/813c/5937/512e8032c899d18b0a42edd882d0a6a9"
        }}
        style={styles.ImageBackground_193_38}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b7d/4967/6556aafa6cfb084c391c026150041fca"
        }}
        style={styles.ImageBackground_176_115}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1bf9/4705/c7cfda42dc6866048047ae7a5727cd5e"
        }}
        style={styles.ImageBackground_176_117}
      />
      <View style={styles.View_176_120}>
        <View style={styles.View_176_121} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1970/886f/9f7c3fc92f1e3ba3309cf4f7b34e11d4"
          }}
          style={styles.ImageBackground_176_122}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c96/1379/fff1ca42a8db87f5eace602e0dec7ac8"
        }}
        style={styles.ImageBackground_212_36}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_166_366: {
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
  ImageBackground_166_388: {
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
  View_176_101: {
    width: wp("85.98382749326146%"),
    minWidth: wp("85.98382749326146%"),
    height: hp("7.377049180327869%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.008086253369273%"),
    top: hp("73.77049180327869%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_176_102: {
    width: wp("85.98382749326146%"),
    height: hp("7.377049180327869%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(146, 179, 138, 1)",
    opacity: 0.10000000149011612,
    borderColor: "rgba(170, 176, 183, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_176_103: {
    width: wp("14.555256064690028%"),
    top: hp("2.4590163934426243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.043126684636118%"),
    justifyContent: "flex-start"
  },
  Text_176_103: {
    color: "rgba(36, 52, 67, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_176_104: {
    width: wp("0.2695417789757413%"),
    height: hp("6.0109289617486334%"),
    top: hp("0.6830601092896131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.15902964959568%"),
    backgroundColor: "rgba(170, 176, 183, 1)"
  },
  View_176_125: {
    width: wp("6.46900269541779%"),
    height: hp("3.278688524590164%"),
    top: hp("2.0491803278688536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.47169811320755%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_176_126: {
    width: wp("6.46900269541779%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_176_127: {
    width: wp("3.7735782222285104%"),
    height: hp("1.0928892698444304%"),
    top: hp("1.0928961748633839%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3477171206410077%")
  },
  View_176_107: {
    width: wp("85.98382749326146%"),
    minWidth: wp("85.98382749326146%"),
    height: hp("7.377049180327869%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.008086253369273%"),
    top: hp("63.934426229508205%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_176_108: {
    width: wp("85.98382749326146%"),
    height: hp("7.377049180327869%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(146, 179, 138, 1)",
    opacity: 0.10000000149011612,
    borderColor: "rgba(170, 176, 183, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_176_109: {
    width: wp("39.35309973045822%"),
    top: hp("2.45901639344261%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.390835579514825%"),
    justifyContent: "flex-start"
  },
  Text_176_109: {
    color: "rgba(36, 52, 67, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_176_110: {
    width: wp("85.98382749326146%"),
    minWidth: wp("85.98382749326146%"),
    height: hp("7.377049180327869%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.008086253369273%"),
    top: hp("54.09836065573771%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_176_111: {
    width: wp("85.98382749326146%"),
    height: hp("7.377049180327869%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(146, 179, 138, 1)",
    opacity: 0.10000000149011612,
    borderColor: "rgba(170, 176, 183, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_176_112: {
    width: wp("11.590296495956872%"),
    top: hp("2.4590163934426172%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.390835579514825%"),
    justifyContent: "flex-start"
  },
  Text_176_112: {
    color: "rgba(36, 52, 67, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_176_113: {
    width: wp("51.21293800539084%"),
    minWidth: wp("51.21293800539084%"),
    height: hp("25.956284153005466%"),
    minHeight: hp("25.956284153005466%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.528301886792452%"),
    top: hp("21.311475409836063%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_176_114: {
    width: wp("51.21293800539084%"),
    height: hp("25.956284153005466%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_193_37: {
    width: wp("66.84636118598382%"),
    height: hp("10.655737704918032%"),
    top: hp("-11.885245901639342%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-7.816711590296496%"),
    backgroundColor: "rgba(146, 179, 138, 1)",
    opacity: 0.10000000149011612,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_193_39: {
    width: wp("45.82210242587601%"),
    top: hp("-8.196721311475407%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.09433962264151%"),
    justifyContent: "flex-start"
  },
  Text_193_39: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  ImageBackground_193_38: {
    width: wp("14.016172506738545%"),
    height: hp("7.103825136612022%"),
    top: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.39622641509434%"),
    resizeMode: "cover"
  },
  ImageBackground_176_115: {
    width: wp("13.477088948787062%"),
    height: hp("6.830601092896176%"),
    top: hp("40.43715846994536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.264150943396224%")
  },
  ImageBackground_176_117: {
    width: wp("6.46900269541779%"),
    height: hp("3.278688524590164%"),
    top: hp("42.21311475409836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.76819407008087%")
  },
  View_176_120: {
    width: wp("85.98382749326146%"),
    minWidth: wp("85.98382749326146%"),
    height: hp("7.377049180327869%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.008086253369273%"),
    top: hp("93.5792349726776%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_176_121: {
    width: wp("85.98382749326146%"),
    height: hp("7.377049180327869%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(115, 139, 243, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  ImageBackground_176_122: {
    width: wp("22.641509433962266%"),
    height: hp("3.0054644808743167%"),
    top: hp("2.185792349726782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.536388140161726%")
  },
  ImageBackground_212_36: {
    width: wp("1.4688075392072735%"),
    height: hp("1.757457086948749%"),
    top: hp("8.60655737704918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.660377358490567%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
