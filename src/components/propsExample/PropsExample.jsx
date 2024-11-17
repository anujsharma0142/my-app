import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState } from 'react'
import User from './User';

const PropsExample = () => {
  const [name, setName] = useState("Anuj");

  const dataUpdate=()=>{
    setName("Sharma")
  }



  return (
    <View>
      <Text>Parent component PropsExample</Text>
      <Button title="update props" color={"green"} onPress={dataUpdate}/>
      <User name={name}/>
    </View>
  )
}

export default PropsExample

const styles = StyleSheet.create({})