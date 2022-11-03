import React from 'react';
import { HomeScreen } from './HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {RegistrationScreen} from './RegistrationScreen';
import {RegisterScreen} from './SingUpScreen';
import { StudentsScreen } from './StudentsScreen'; 
import {SignUpScreen} from './SingUpScreen';
import {LoginScreen} from './LoginScreen'
const Stack = createStackNavigator();

export function HomeNavigations() {
  return (
    
    <Stack.Navigator headerMode ="none">

    <Stack.Screen name="StudentsScreen" component={StudentsScreen} />
    <Stack.Screen name="RegistrationScreen" component={RegisterScreen} />
    <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
    <Stack.Screen name="LoginScreen" component={LoginScreen} />

   
    
  </Stack.Navigator>
  
  )
}
