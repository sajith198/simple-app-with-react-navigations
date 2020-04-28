import React, { useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import 'react-native-gesture-handler';
import Home from './src/components/home/home'
import SideBar from './src/components/sideBar/sideBar'
import { useWindowDimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

const TabNav = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'PROFILE') {
            iconName = 'user'
          }
          if (route.name === 'MORE') {
            iconName = 'menufold';
          } else if (route.name === 'SEARCH') {
            iconName = 'search1';
          }
          else if (route.name === 'REFER') {
            iconName = 'addusergroup';
          }
          else if (route.name === 'INBOX') {
            iconName = 'mail';
          }
          return <AntDesign name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#000',
        inactiveTintColor: '#b8b8b8',

      }}
    >
      <Tab.Screen name="INBOX" component={Home} />
      <Tab.Screen name="SEARCH" component={Home} />
      <Tab.Screen name="REFER" component={Home} />
      <Tab.Screen name="PROFILE" component={Home} />
      <Tab.Screen name="MORE" component={Home} />
    </Tab.Navigator>
    
  );
}

const App = () => {
  const Drawer = createDrawerNavigator();
  const dimensions = useWindowDimensions();
  const isLargeScreen = dimensions.width >= 768;
  return (
    <NavigationContainer>
    <Drawer.Navigator 
      initialRouteName="Home" 
      drawerContent={(props) => <SideBar {...props} />}
      drawerStyle={isLargeScreen ? null : { width: '85%' }}
      >
      <Drawer.Screen name="Home" component={TabNav} />
    </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default App