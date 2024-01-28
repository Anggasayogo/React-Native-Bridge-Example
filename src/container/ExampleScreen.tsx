import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const  ExampleScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'center',alignItems: 'center', padding: 20}}>
      <Text style={{color: 'black', fontSize: 20, paddingVertical: 30}}>ExampleScreen</Text>
      <TouchableOpacity activeOpacity={0.7} style={{backgroundColor: '#F18265', height: 50, width: '100%', alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{color: 'white', fontSize: 14, fontWeight: 'bold'}}>Call Native Modules</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ExampleScreen

const styles = StyleSheet.create({})