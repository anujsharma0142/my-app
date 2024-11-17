import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ComponentExample from './src/components/componentExample/ComponentExample'
import ButtonComponent from './src/components/buttonComponent/ButtonComponent'


const App = () => {
  return (
    <View style={styles.container}>
      <ComponentExample/>
      <ButtonComponent/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex: 1, // Make the container take up the full height of the screen
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
    backgroundColor: '#f5f5f5', // Optional background color
  },
  input:{

  }
})