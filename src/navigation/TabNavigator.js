import React, { useEffect, useRef } from 'react';

//Bottom Navigation import
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

//Screen Import
import Courier from '../screens/CourierPage/Courier';
import Mart from '../screens/MartPage/Mart';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { AccountScreen, CatagoryScreen, FinddoctorScreen, HomeScreen, OrderHistory } from '../screens';

const TabArr = [
  { route: 'Home', label: 'HomeScreen', activeIcon: 'home', inActiveIcon: 'home', component: HomeScreen },
  { route: 'Catagory', label: 'CatagoryScreen', activeIcon: 'apps-outline', inActiveIcon: 'apps-outline', component: CatagoryScreen },
  { route: 'Finddoctor', label: 'FinddoctorScreen', activeIcon: 'medkit-outline', inActiveIcon: 'medkit-outline', component: FinddoctorScreen },
  { route: 'Account', label: 'AccountScreen', activeIcon: 'person-outline', inActiveIcon: 'person-outline', component: AccountScreen },
];

const TabButton = (props) => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate({0: {scale: 0.5, rotate: '0deg'}, 1: {scale: 1.5, rotate: '360deg'}});
    } else {
      viewRef.current.animate({0: {scale: 1.5, rotate: '360deg'}, 1: {scale: 0.8, rotate: '0deg'}});
    }
  }, [focused])

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}>
      <Animatable.View
        ref={viewRef}
        duration={1000}
        style={styles.animatable_container}>
        <Icon size={20} name={focused ? item.activeIcon : item.inActiveIcon} color={focused ? Colors.primary : Colors.primaryLite} />
      </Animatable.View>
    </TouchableOpacity>
  )
}


export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 50,
          // position: 'absolute',
          // bottom: 16,
          // right: 20,
          // left: 20,
          // borderRadius: 10,
        }
      }}
    >
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen key={index} name={item.route} component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: (props) => <TabButton {...props} item={item} />
            }}
          />
        )
      })}
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  animatable_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
