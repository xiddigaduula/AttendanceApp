
import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet ,SafeAreaView ,Platform,StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


import { Navigation } from './Components/Navigation';






export default function App() {
  return (
    <>
    <SafeAreaView style={{flex:1, marginTop:StatusBar.currentHeight}} >
    <NavigationContainer>
    <Navigation />
    </NavigationContainer>

    </SafeAreaView >
    <ExpoStatusBar style="auto"/>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
