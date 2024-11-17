import {Text, TextInput, View, Button } from 'react-native'
import React, { useState } from 'react'
import styles from './style'

const TextInputExample = () => {
    const [name, setName] = useState("Anuj");
  return (
    <View>
      <Text style={styles.textBox}>TextInputExample</Text>
      <Text style={{fontSize:24}}>Your Name is : {name}</Text>
      <TextInput style={styles.textInput}
      value={name}
      placeholder='Enter your name' 
      onChangeText={(text)=>setName(text)}
      />
      <Button title='Clear Input Value' onPress={()=>setName('')}/>
    </View>
  )
}

export default TextInputExample
