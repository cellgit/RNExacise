import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Provider as PaperProvider } from 'react-native-paper';

export default class index extends Component {
  render() {
    return (
        
      <PaperProvider>
        <Text>
            hahaha
        </Text>
      </PaperProvider>

      
    )
  }
}

const styles = StyleSheet.create({})
