import React, { useState } from 'react';
import {Text, View, Image, Button, Alert} from 'react-native';
import { TextInput } from "react-native";

const userinput =()=>{
  const [name, setName]=useState("");
  return(
    <View style={{
      padding: 10,
      flex: 1,
      alignItems: 'center',
    }}>

    <Text style={{fontSize: 35,fontFamily: '',paddingTop: 100}}>Login Form</Text>
    <View style={{backgroundColor: 'blue'}}/>
    
    <Text style={{fontSize: 25,fontFamily: '',paddingTop: 100}}>Enter your Fullname</Text>
    <TextInput id='name' 
        style={{
        height:50,
        width:200,
        borderColor: 'grey',
        borderWidth: 2,
        textAlign:'center',
        padding: 10,
    }}
    placeholder='Full Name'/>
    <View style={{backgroundColor: 'red'}}/>
    <Text style={{fontSize: 25,fontFamily: '',paddingTop:20}}>Enter yout Email-ID</Text>
    <TextInput id='email' style={{
        height:50,
        width:200,
        borderColor: 'grey',
        borderWidth: 2,
        textAlign:'center',
    }}
      keyboardType='email-address'
      placeholder='Email-ID'/>
    
    <View style={{backgroundColor: 'blue'}}/>
    <Text style={{fontSize: 25,fontFamily: '',paddingTop:20}}>Enter your Number</Text>
    <TextInput id='number' 
        style={{
        height:50,
        width:200,
        borderColor: 'grey',
        borderWidth: 2,
        textAlign:'center',
    }} 
      keyboardType='phone-pad'
      placeholder='phone number'/>
    <Button style={{padding:80}}
      title='Submit' 
      onclick={()=>{}}
    />

    <Button style={{paddingTop:30}}
      title='Add' 
    />
    </View>
  );
};

export default userinput;