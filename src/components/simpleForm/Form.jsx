import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [display, setDislay] = useState(false);



  const resetFormData = () => {
    setDislay(false)
    setEmail("");
    setPass("");
    setName("");
  };



  return (
    <View>
      <Text style={styles.textBox}>Login Page</Text>
      <Text>Name : </Text>
      <TextInput style={styles.textInput} placeholder="Enter name " value={name} onChangeText={(text)=>setName(text)}/>
      <Text>Email :</Text>
      <TextInput style={styles.textInput} placeholder="Enter your email ID" value={email} onChangeText={(text)=>setEmail(text)}/>
      <Text>Password :</Text>
      <TextInput style={styles.textInput} placeholder="Enter your Password" value={pass} onChangeText={(text)=>setPass(text)} secureTextEntry={true}/>
        <View style={{marginBottom:10}}>
        <Button  title="Submit" color={"green"} onPress={()=>setDislay(true)} />
        </View>
        <Button title="Reset" color={"red"}  onPress={resetFormData}/>


        
        <View>
            {
                display?
                <View>
                    <Text style={{fontSize:20}}>Name : {name}</Text>
                    <Text style={{fontSize:20}}>Email : {email}</Text>
                    <Text style={{fontSize:20}}>Password : {pass}</Text>
                </View>
                : null

            }
        </View>
      
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  textBox: {
    fontSize: 20,
  },
  textInput: {
    borderWidth: 2,
    marginBottom: 10,
  },
});
