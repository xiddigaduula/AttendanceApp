import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, Platform, StatusBar } from "react-native";
import LoginScreen from "../Screens/LoginScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SignUpScreen from "../Screens/SingUpScreen";
import { RegistrationScreen } from "../Screens/RegistrationScreen";
import { HomeNavigations } from "../Screens/navigationHome";

import Ionicons from "react-native-vector-icons/Ionicons";
import { HomeScreen } from "../Screens/HomeScreen";
import { StudentsScreen } from "../Screens/StudentsScreen";

const Tab = createBottomTabNavigator();

export function Navigation() {
  return (
    <Tab.Navigator
      initialRouteName="attendace"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Attendace") {
            iconName = focused ? "people" : "people-outline";
          } else if (route.name === "EventScreen") {
            iconName = focused ? "event" : "event";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={RegistrationScreen} />
      <Tab.Screen name="Events" component={LoginScreen} />
      <Tab.Screen name="Attendace" component={StudentsScreen} />
    </Tab.Navigator>
  );
}
