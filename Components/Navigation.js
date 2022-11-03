import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet ,SafeAreaView ,Platform,StatusBar} from 'react-native';
import LoginScreen from '../Screens/LoginScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {SignUpScreen} from '../Screens/SingUpScreen';
import { RegistrationScreen} from '../Screens/RegistrationScreen'
import { HomeNavigations } from '../Screens/navigationHome';
import HomeScreen from '../Screens/HomeScreen'
import Ionicons from '@expo/vector-icons/Ionicons';
import { StudentsScreen } from '../Screens/StudentsScreen';
import ExerciseHomeScreen from './ExerciseHomeScreen';



const Tab = createBottomTabNavigator();

export function Navigation() {
  return (
    
    <Tab.Navigator
    
    screenOptions={({ route }) => ({
      headerShown: false ,
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? 'home'
            : 'home';
        } else if (route.name === 'EventScreen') {
          iconName = focused 
          ? "event" 
          : "event";
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
       
    })}
  >
  <Tab.Screen name="home" component={ExerciseHomeScreen}  />
    <Tab.Screen name="registration" component={RegistrationScreen} />
    <Tab.Screen name="login" component={LoginScreen}  />
    <Tab.Screen name="Attendence" component={StudentsScreen}  />
    <Tab.Screen name="signup" component={SignUpScreen}  />
  </Tab.Navigator>
  )
}
