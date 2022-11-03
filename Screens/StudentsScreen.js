import React, { useState,useEffect } from 'react';
import CustomButton from '../Components/CustomButton';
import { db } from "../config";
import { Switch} from 'react-native-paper' ;
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StatusBar } from 'react-native';
import { Text ,View,StyleSheet, SafeAreaView ,FlatList} from 'react-native';
import { SearchBar } from '../Components/Attendance/SearchBar';
import { Title } from '../Components/Attendance/Title';

import {  collection ,getDocs ,query } from "firebase/firestore";



export function StudentsScreen() {
  const [students , setStudents] = useState([]);

const Read = async() => {
  const q = query(collection(db, "Students"));

    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => ({
      // doc.data() is never undefined for query doc snapshots
      ...doc.data(),
      id: doc.id,
    }));
    setStudents(data);
  };

  useEffect(() => {
    Read();
  }, []);


   function ToggleSwitch(){
    const [enable, setEnable] = useState(true)
  
    return(
      <View >
        <Switch value={enable} onValueChange={() => {
          setEnable(!enable)
          } }/>
      </View>
    )
  }
    return (
    <>
    <SafeAreaView style={{flex:1, marginTop:StatusBar.currentHeight}} >
    <Title/>
    <SearchBar />
    
    <CustomButton label={'View Attendance'} onPress={Read} />
    

    <FlatList 
    data={students}
    renderItem = {({item})=> {
      return (
        <>
       
      <View style={styles.container}>
              <View style={{flex:1,paddingRight:2,flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'}}>
              
              <Text style={styles.title}>
                    {item.Id}
                  </Text>
              <Text style={styles.title}>
                    {item.FirstName}
                  </Text>
              <Text style={styles.title}>
                    {item.MiddleName}
                  </Text>
              <Text style={styles.title}>
                    {item.LastName}
                  </Text>
              <Text style={styles.title}>
                    {item.Class}
                  </Text>
              </View>
        <View style={styles.toggle}>
        <ToggleSwitch/>
        </View>
        
       
        </View>
       
        
       
        </>
      )
    }}
    />
    
   
          
         
          
          
          
      </SafeAreaView >
      <ExpoStatusBar style="auto"/>
      </>
  )
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#fff',
      flexDirection: 'row' ,
      justifyContent: 'space-between',
     
           
      

    },
    column:{
      flex:1,
      backgroundColor: '#fff',
      flexDirection: 'column' ,
      justifyContent: 'space-around',
    },
    title:{
       
       paddingLeft:5,
    }
    ,
    toggle:{
        flex: 1,
        width:50,
        height:50,
        alignItems:'flex-end',
        justifyContent: 'center',
        
    }
  });

//   const Container = styled.View`
//   display: flex;
//   background-color: #fff;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   padding: 2px;
// `;
