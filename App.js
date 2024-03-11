import React from 'react';
import {Text, TextInput, View, Image, Button, Alert} from 'react-native';
import { TextInput } from 'react-native-paper';

const userinput =()=>{
  return(
    <View style={{
      backgroundColor: '#B0E0E6',
      paddingVertical: 6,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }}> 
    <Image 
      source={{
        uri: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg',
      }}
      style = {{ width:300,height:240}} 
    
    />
     <View style={{
      backgroundColor: 'black',}}/>
    <Text style={{fontSize: 20,fontFamily: ''}}>Welcome to my First Application</Text>
    <TextInput 
      style={{
        height:50,
        width:200,
        borderColor: 'grey',
        borderWidth: 3,
        textAlign:'center'
    }}
    placeholder='Enter your name here..'/>
    <Button
      onPress={() => Alert.alert('You have Successfully Submitted your name!!')}
      title='Click Here!'
      color={'green'}
    />
    </View>
  );
};

export default userinput;