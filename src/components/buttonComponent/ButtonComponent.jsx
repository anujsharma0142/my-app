import { View, Text, Button } from 'react-native'
import React from 'react'

const ButtonComponent = () => {
    let data = 50;
    const fruit=(val)=>{
        data = 20;
        console.log(data);
        
    }
  return (
    <View>
      <Text>ButtonComponent {data}</Text>
      <Button title='On press' onPress={()=>fruit("Hello Anuj")} color={'green'}/>
      <Button title='On press' onPress={fruit} color={'red'}/>
    </View>
  )
}

export default ButtonComponent  