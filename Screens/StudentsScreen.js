import { Students } from '../Components/Attendance/Attendance.info';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { StatusBar } from 'react-native';
import { Text ,View,StyleSheet, SafeAreaView ,FlatList} from 'react-native';
import { SearchBar } from '../Components/Attendance/SearchBar';
import { Title } from '../Components/Attendance/Title';
import { ToggleSwitch } from '../Components/Attendance/ToggleSwitch';
// import styled from 'styled-components/native';

export function StudentsScreen() {
    const {name , id} = Students;
    
    return (
    <>
    <SafeAreaView style={{flex:1, marginTop:StatusBar.currentHeight}} >
    <Title/>
    <SearchBar />

    <FlatList 
    data={Students}
    renderItem = {({item})=> {
      return (
      
      <View style={styles.container}>
        <View >
        
        <Text style={styles.title}>
        
       {item.name}
        
        </Text>
        </View>
        <View style={styles.toggle}>
        <ToggleSwitch />
        </View>
       
        </View>
        


    
       

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
    title:{
       justifyContent: 'center',
      //  textAlignVertical:'bottom' ,
       alignContent: 'flex-end',
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
