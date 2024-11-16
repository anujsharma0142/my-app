import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={styles.container}>
      <Text>App</Text>
      <Text style={{fontSize:28}}>Hello Anuj Sharma</Text>
      <Button title='Press here' />
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