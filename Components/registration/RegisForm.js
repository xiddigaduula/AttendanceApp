import React, { useState } from 'react'
import { View ,Text,StyleSheet ,SafeAreaView,StatusBar ,ScrollView,Alert,TextInput} from 'react-native'
import CustomButton from '../CustomButton';
import { db } from "../../config";
import { doc, setDoc, addDoc, collection ,getDoc } from "firebase/firestore";


export function RegisForm() {
    

const [Id , setId] = useState(0);
const [FirstName , setfirstName] = useState('');
const [MiddleName , setMiddleName] = useState('');
const [LastName , setLastName] = useState('');
const [Class , setClass] = useState('');
const [switches , setSwitches] = useState(false);

 




 const Create = async()=>{
try {
  const ref =  await addDoc(collection(db, "Students"),  {
    Id,
    FirstName,
    MiddleName,
    LastName,
    Class,
    switches,

  });
  
  console.Alert('submitted');
  
} catch (error) {
   console.Alert(error)
} 


 }
  
  return (
    <>    
    <SafeAreaView style={{flex:1, justifyContent:'center',marginTop:StatusBar.currentHeight}} >
    <ScrollView 
        showsVerticalScrollIndicator={false}
        style={{paddingHorizontal: 25}}>
      
 
        <Text
          style={{
            // fontFamily: 'Roboto-Medium',
            fontSize: 28,
            fontWeight: '500',
            color: '#333',
            marginBottom: 30,
            marginTop : 30,
          }}>
          Student Register
        </Text>
     <TextInput
     style={styles.TextInput}
        value={Id}
        placeholder="Roll no"
        onChangeText={setId}
        keyboardType="numeric"
        
      />
        <TextInput
        style={styles.TextInput}
        value={FirstName}
        placeholder="First Name"
        onChangeText={setfirstName}
        
      />
      <TextInput
      style={styles.TextInput}
        value={MiddleName}
        placeholder="Middle Name"
        onChangeText={setMiddleName}
        
      />
      <TextInput
      style={styles.TextInput}
        value={LastName}
        placeholder="Last Name"
        onChangeText={setLastName}
        
      />
      <TextInput
      style={styles.TextInput}
        value={Class}
        placeholder="Class"
        onChangeText={setClass}
        
      
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
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
   
    
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


