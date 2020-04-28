import
React,
{ useState }
  from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import 'react-native-gesture-handler';
import { Badge } from 'react-native-elements'
import {
  Container,
  Thumbnail,
  Content,
  Text,
  Icon
} from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const SideBar = () => {
  const [links, setlinks] = useState([
    {
      icon: "mail",
      name: "Inbox"
    },
    {
      icon: "user",
      name: "Edit Profile"
    },
    {
      icon: "addusergroup",
      name: "Refer a friend"
    },
    {
      icon: "book",
      name: "Manage Subscription"
    },
    {
      icon: "clockcircleo",
      name: "Pause Activity"
    },
    {
      icon: "logout",
      name: "Logout"
    }
  ])

  return (
    <Container>
      <Content padder contentContainerStyle={{ padding: 30 }}>
        {/* Header Thumbanail Portion */}
        <View style={styles.thumbNailView}>
          <Thumbnail large
            style={styles.thumbNail}
            source={require('../../assets/header-img.jpg')} 
            />
          <Badge 
            status="success" 
            badgeStyle={styles.badge}
            containerStyle={styles.badgeContainer} 
            />
          <View style={styles.infoView}>
            <Text style={{ fontSize: 20 }}>
                Edwina
            </Text>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <Icon name='md-pin' style={{ fontSize: 20 }} />
              <Text style={styles.infoText}>Bangalore, India</Text>
            </View>
          </View>
        </View>

        {/* Rendering Links */}
        {links.map((link, index) => {
          return (
            <TouchableOpacity key={index}>
              <View style={styles.linkView}>
                <AntDesign style={styles.linkIcon} name={link.icon} />
                <Text style={styles.linkText}>{link.name}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  thumbNailView: {
    flex: 1,
    marginBottom: 20
  },
  thumbNail: {
    height: 70,
    width: 70,
    borderRadius: 100
  },
  badge: {
    height: 15,
    width: 15,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "white"
  },
  badgeContainer: {
    position: 'absolute',
    top: hp('7%'),
    left: wp('14%')
  },
  infoView: {
    position: "absolute",
    top: hp('2%'),
    left: wp('22%')
  },
  linkView: {
    flex: 1,
    flexDirection: "row",
    alignContent: "center",
    padding: 15
  },
  linkIcon: {
    fontSize: 28,
    color: "#bdbbbb",
    paddingTop: 5
  },
  linkText:{
    lineHeight: 40, 
    fontSize: 14, 
    paddingLeft: 20 
  },
  infoText:{
    marginLeft: 5, 
    fontSize: 15, 
    color: "#808080" 
  }

});
export default SideBar;
