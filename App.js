import React, { useState } from 'react';
import {Text, View, Image, Alert} from 'react-native';
import { TextInput, Button } from "react-native-paper";

const userinput =()=>{
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit =()=>{
    setSubmitted(true);
  }
  
  return(
    <View style={{ 
      padding: 10,
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'skyblue',
    }}>

    <Text style={{fontSize: 35,fontFamily: '',paddingTop: 100,fontStyle: 'italic',fontWeight: 'bold'}}>Login</Text>
    
    <Text style={{fontSize: 20,fontFamily: '',paddingTop: 50,textAlign:'left'}}>Username</Text>
    <TextInput left={<TextInput.Icon icon="account"/>} 
        style={{
        height:35,
        width:170,
        borderColor: 'grey',
        borderWidth: 1.5,
        textAlign:'center',
        padding: 7, 
    }}
    onSubmitEditing={(value) => setName(value.nativeEvent.text)}
    placeholder='Username'/>
    
    <Text style={{fontSize: 20,fontFamily: '',paddingTop:20}}>Email</Text>
    <TextInput left={<TextInput.Icon icon="mail" />}
        style={{
        height:35,
        width:170,
        borderColor: 'grey',
        borderWidth: 1.5,
        textAlign:'center',
        padding: 7, 
    }}
      onSubmitEditing={(value)=>setEmail(value.nativeEvent.text)}
      keyboardType='email-address'
      placeholder='Email-ID'/>

    <Text style={{fontSize: 20,fontFamily: '',paddingTop:20}}>Password</Text>  
    <TextInput left={<TextInput.Icon icon="form-textbox-password" />} 
      style={{
        height:35,
        width:170,
        borderColor: 'grey',
        borderWidth: 1.5,
        textAlign:'center',
        padding: 7,
      }}
      onSubmitEditing={(value)=>setNumber(value.nativeEvent.text)}
      secureTextEntry
      placeholder='password'>
    </TextInput>
   
     <Button 
        rippleColor='blue'
        icon="" 
        mode="contained" 
        style={{backgroundColor: 'blue',marginTop: 20}} 
        onPress={handleSubmit}>
          Submit
      </Button>

      {submitted && (
        <View style={{marginTop: 20}}>
          <Text>Username: {name}</Text>
          <Text>Email-ID: {email}</Text>
          <Text>Password: {number}</Text>
        </View>
      )}

    </View>
    
  );
};

export default userinput;