import React from 'react';
import { HomeScreen } from './HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import {RegistrationScreen} from './RegistrationScreen';
import RegisterScreen from './SingUpScreen';
import { StudentsScreen } from './StudentsScreen'; 
const Stack = createStackNavigator();

export function HomeNavigations() {
  return (
    
    <Stack.Navigator headerMode ="none">

    // <Stack.Screen name="StudentsScreen" component={StudentsScreen} />
    <Stack.Screen name="RegistrationScreen" component={RegisterScreen} />
   
    
  </Stack.Navigator>
  )
}
