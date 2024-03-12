import React, { useState } from 'react';
import {Text, View, Image, Button, Alert} from 'react-native';
import { TextInput } from "react-native-paper";

const userinput =()=>{
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  return(
    <View style={{ 
      padding: 10,
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'lightgrey',
    }}>

    <Text style={{fontSize: 35,fontFamily: '',paddingTop: 100,fontStyle: 'italic'}}>Login</Text>
    
    <Text style={{fontSize: 20,fontFamily: '',paddingTop: 50}}>Enter your Fullname</Text>
    <TextInput id='name' left={<TextInput.Icon icon="account" />} 
        style={{
        height:40,
        width:170,
        borderColor: 'grey',
        borderWidth: 1.5,
        textAlign:'center',
        padding: 7, 
    }}
    onSubmitEditing={(value) => setName(value.nativeEvent.text)}
    placeholder='Full Name'/>
    
    <Text style={{fontSize: 20,fontFamily: '',paddingTop:20}}>Enter your Email-ID</Text>
    <TextInput id='email' left={<TextInput.Icon icon="account" />}
        style={{
        height:40,
        width:170,
        borderColor: 'grey',
        borderWidth: 1.5,
        textAlign:'center',
        padding: 7, 
    }}
      onSubmitEditing={(value)=>setEmail(value.nativeEvent.text)}
      keyboardType='email-address'
      placeholder='Email-ID'/>
    
    <Button style={{paddingTop:80,}}
      title='Submit' 
      onPress={()=>Alert.alert({name})}
    />

    <Text>{name}</Text>
    <Text>{email}</Text>
    <Text>{number}</Text>

    </View>
  );
};

export default userinput;