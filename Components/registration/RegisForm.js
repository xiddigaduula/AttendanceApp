import React, { useState } from 'react'
import { View, TextInput,Text,StyleSheet ,SafeAreaView,StatusBar ,Button,ScrollView} from 'react-native'
import InputField from '../InputField';
import CustomButton from '../CustomButton';
import {firebase} from '../../config'
import LoginScreen from '../../Screens/LoginScreen';

export function RegisForm({ navigation }) {
  
  

 

  
  return (
    <>    
    <SafeAreaView style={{flex:1, justifyContent:'center',marginTop:StatusBar.currentHeight}} >
    <ScrollView
        showsVerticalScrollIndicator={false}
        style={{paddingHorizontal: 25}}>
      

        <Text
          style={{
            fontFamily: 'Roboto-Medium',
            fontSize: 28,
            fontWeight: '500',
            color: '#333',
            marginBottom: 30,
            marginTop : 30,
          }}>
          Student Register
        </Text>
    <InputField
          label={'Roll no '}
          onChangeText ={()=>{}}
        />
    <InputField
          label={'First Name'}
          onChangeText ={()=>{}}
        />
    <InputField
          label={'Middle Name'}
          onChangeText ={()=>{}}
        />
    <InputField
          label={'Last Name'}
          onChangeText ={()=>{}}
        />
    <InputField
          label={'Class'}
          onChangeText ={()=>{}}
        />
        <CustomButton label={'Register'} onPress={()=>{}} />
        

        </ScrollView>
      </SafeAreaView >
    </>

  )
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#fff',
     
        alignItems : 'center',
          marginTop: 20,  
      
    },
    Title :{
        marginBottom:25,
    }
    ,
    inputView: {
        backgroundColor: "#fff",
        borderColor: "#ddd",
        borderWidth: 1,
        
        padding: 10,
        fontSize: 14,
        
        borderRadius: 10,
        width: "70%",
        height: 45,
        marginBottom: 20,
        marginLeft: 20,
        alignItems: "center",
      },
      
      TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },
    buttonStyle: {
        
        alignItems: 'center',
        backgroundColor: '#485a96',
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 40,
        borderRadius: 5,
        margin: 5,
        color: '#fff',
        
      },
    });


