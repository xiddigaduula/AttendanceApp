import React, { useState } from 'react'
import { Text,StyleSheet ,SafeAreaView,StatusBar ,ScrollView} from 'react-native'
import InputField from '../InputField';
import CustomButton from '../CustomButton';
import { db } from "../../config";
import { doc, setDoc } from "firebase/firestore";


export function RegisForm({ navigation }) {
    
const [Id , setId] = useState('');
const [FirstName , setfirstName] = useState('');
const [MiddleName , setMiddleName] = useState('');
const [LastName , setLastName] = useState('');
const [Class , setClass] = useState('');

 
 const Create = async()=>{

 await setDoc(doc(db, "Students", "Year_2021-2024"), {
    Id,
    FirstName,
    MiddleName,
    LastName,
    Class
  })
  .then(()=> console.log('submitted'))
  .catch((error)=> console.log(error));

 }
  
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
          value ={Id}
          onChangeText ={(val)=> setId(val)}
        />
    <InputField
          label={'First Name'}
          value ={FirstName}
          onChangeText ={(val)=> setfirstName(val)}
        />
    <InputField
          label={'Middle Name'}
          value ={MiddleName}
          onChangeText ={(val)=> setMiddleName(val)}
        />
    <InputField
          label={'Last Name'}
          value ={LastName}
          onChangeText ={(val)=> setLastName(val)}
        />
    <InputField
          label={'Class'}
          value ={Class}
          onChangeText ={(val)=> setClass(val)}
        />
        <CustomButton label={'Register'} onPress={Create} />
        

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


