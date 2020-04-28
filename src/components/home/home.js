import React, { useState } from 'react';
import {
  StyleSheet,
  Image,
  View,
  StatusBar
} from 'react-native';
import 'react-native-gesture-handler';
import {
  Container,
  Item,
  Label,
  Input,
  Content,
  Card,
  CardItem,
  Text,
  Left,
  Title,
  Button,
  Icon,
} from 'native-base';


const Home = ({ navigation }) => {
  const [focusState, setfocusState] = useState(false)
  return (
    <Container>
      <StatusBar translucent={true} hidden={true} />
      <Image source={require('../../assets/header-img.jpg')} style={styles.headerImg} />
      {/* Top Menu Icon with name */}
      <View style={styles.topMenuView}>
        <Button iconLeft transparent onPress={() => navigation.toggleDrawer()}>
          <Icon name='menu' style={styles.menuIcon} />
        </Button>
        <Left><Title style={{ marginLeft: 20 }}>Profile</Title></Left>
      </View>
      {/*Name and Location */}
      <View style={styles.infoView}>
        <Text style={styles.infoName}>Edwina</Text>
        <View style={styles.locationView}>
          <Icon name='md-pin' style={styles.infoIcon}/>
          <Title style={styles.infoLocationText}>Bangalore, India</Title>
        </View>
      </View>
      {/* Card Section */}
      <Content padder>
        <Card style={styles.cardView}>
          <Text style={styles.cardTitleText}>About</Text>
          <CardItem cardBody style={{ marginBottom: 30 }}>
            <Item floatingLabel
              style={focusState ? { borderColor: "red" } : null}>
              <Label style={focusState ? { color: "red" } : null}>
                Current Title
                </Label>
              <Input
                onFocus={() => setfocusState(true)}
                onBlur={() => setfocusState(false)}
              />
            </Item>
          </CardItem>
          <CardItem cardBody style={{ marginBottom: 30 }}>
            <Item floatingLabel>
              <Label >Current Company</Label>
              <Input value="IBM" />
            </Item>
          </CardItem>
          <CardItem cardBody style={{ marginBottom: 30 }}>
            <Item floatingLabel>
              <Label >Total Years of Experience</Label>
              <Input value="10 Years" />
            </Item>
          </CardItem>
          <CardItem cardBody style={{ marginBottom: 30 }}>
            <Item floatingLabel>
              <Label>Location</Label>
              <Input value="Bangalore, India" />
            </Item>
          </CardItem>
        </Card>
        <Card style={styles.cardView}>
          <Text style={styles.cardTitleText}>About</Text>
          <CardItem cardBody style={{ marginBottom: 30 }}>
            <Item 
              style={focusState ? { borderColor: "red" } : null}>
              <Input placeholder="Current Title"/>
            </Item>
          </CardItem>
          <CardItem cardBody style={{ marginBottom: 30 }}>
            <Item>
              <Input placeholder="Current Company"/>
            </Item>
          </CardItem>
          <CardItem cardBody style={{ marginBottom: 30 }}>
            <Item>
              <Input placeholder="Total Years of Experience"/>
            </Item>
          </CardItem>
          <CardItem cardBody style={{ marginBottom: 30 }}>
            <Item >
              <Input placeholder="Location"/>
            </Item>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );

};
const styles = StyleSheet.create({
  headerImg: {
    width: '100%',
    height: 250
  },
  topMenuView:{
    flex: 1, 
    flexDirection: "row", 
    zIndex: 2, 
    position: 'absolute', 
    marginTop: StatusBar.currentHeight + 20
  },
  menuIcon:{
    fontSize: 30, 
    color: 'white' 
  },
  infoView:{
    flex: 1, 
    zIndex: 2, 
    position: 'absolute', 
    marginTop: 180, 
    marginLeft: '5%' 
  },
  locationView:{ 
    flexDirection: "row", 
    marginTop: '5%' 
  },
  infoName:{
    fontSize:18,
    color:"white"
  },
  cardTitleText:{ 
    fontWeight: "bold", 
    fontSize: 20, 
    marginBottom: 30, 
    marginTop: 20 
  },
  infoIcon:{ 
    fontSize: 20, 
    color: 'white' 
  },
  infoLocationText:{ 
    marginLeft: 10, 
    fontSize: 15 
  },
  cardView:{
    padding:30, 
    borderRadius:40,
    elevation:22
  }
});
export default Home;
