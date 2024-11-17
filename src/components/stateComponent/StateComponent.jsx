import { Button, StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'

const StateComponent = () => {
    const [name, setName] = useState("Anuj");
  
    const testName=()=>{
        setName("Sharma")
    }
  
    return (
    <View>
      <Text  style={{fontSize:24}}>State Data : {name}</Text>
      <Button title='Update name' onPress={testName} color={"green"}/>

    </View>
  )
}

export default StateComponent

const styles = StyleSheet.create({})