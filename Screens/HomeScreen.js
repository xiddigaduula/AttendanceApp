import React from 'react';
import { View, TextInput,Text,StyleSheet ,SafeAreaView,StatusBar ,Button} from 'react-native';
import { StudentsScreen } from './StudentsScreen'; 
export function HomeScreen({navigation}) {
  return (
    <View>
    <Button title='regis' onPress={() =>
         navigation.navigate(StudentsScreen)}/>
         </View>
  )
}
