import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ComponentExample = () => {
  return (
    <View>
      <Text>ComponentExample</Text>
      <CompanyData/>
      <UserData/>
      <CompanyData/>
      <UserData/>
      <CompanyData/>
      <UserData/>
      <CompanyData/>
      <UserData/>
    </View>
  )
}


const UserData=()=>{
    return(
        <View>
            <Text>Name : Anuj Sharma</Text>
            <Text>Age : 26</Text>
        </View>

    );
};

const CompanyData=()=>{
    return(
        <View>
            <Text>Company name : Xyz Company</Text>
            <Text>product Name : xyz product</Text>
        </View>

    );
};

export default ComponentExample

const styles = StyleSheet.create({})