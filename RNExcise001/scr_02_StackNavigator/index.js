import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


function HomeScreen(prop) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button title='跳转到 News 界面' onPress={()=>prop.navigation.navigate('News')}/>
      </View>
    );
}


function NewsScreen(prop) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>News Screen</Text>
        <Button title='跳转到 Home 界面' onPress={()=>prop.navigation.navigate('Home')}/>
      </View>
    );
}
  
 const Stack = createNativeStackNavigator();


export default class index extends Component {
  render() {
    return (
    <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='News' component={NewsScreen}/>
    </Stack.Navigator>
    )
  }
}
