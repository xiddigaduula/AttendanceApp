import React from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
  Text,
  TextInput,
  FlatList,
  Dimensions,
  StyleSheet,
  ImageBackground,
  
  
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
export const categories = [
  {
      id: 1,
      img: require('../assets/8.jpg'),
      heading: 'Service',
      paragraph: 'Lorem Ipsum is simply dummy text',
      backgroundColor: '#F6AFB0',
  },
  {
      id: 2,
      img: require('../assets/anastase-maragos-9dzWZQWZMdE-unsplash.jpg'),
      heading: 'Electricity',
      paragraph: 'Lorem Ipsum is simply dummy text',
      backgroundColor: '#8ECC81',
  },
  {
      id: 3,
      img: require('../assets/splash.png'),
      heading: 'Savings',
      paragraph: 'Lorem Ipsum is simply dummy text',
      backgroundColor: '#80CEEE',
  }
];

const HomeScreen = () => {
  
    
  

  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      {/* Customise status bar */}
     
      
      <View style={{paddingLeft: 20}}>
      <FlatList
          horizontal
          data={categories}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return(
              <View>
              <Text>{item.heading}</Text>
              
              <Text>{item.paragraph}</Text>
              <View>{item.img}</View>
              <View>{item.backgroundColor}</View>
              </View>

            )
        
          }}
      />
  </View>
        
       
      
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  searchInputContainer: {
    height: 50,
    backgroundColor: 'blue',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  
  optionsCard: {
    height: 210,
    width: 100,
    elevation: 15,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  optionsCardImage: {
    height: 140,
    borderRadius: 10,
    width: '100%',
  },
  
  categoryListText: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 5,
    color: 'grey',
  },

  categoryListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
    paddingHorizontal: 40,
  }
});
export default HomeScreen;