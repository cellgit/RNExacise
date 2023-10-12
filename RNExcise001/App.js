import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
// import Index from './src_01_demo'
import Index from './scr_02_StackNavigator'



export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Index/>
      </NavigationContainer>
      
    )
  }
}
