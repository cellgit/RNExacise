import React, { Component } from 'react'
import { Text, StyleSheet, View, Alert, Button, ScrollView } from 'react-native'



createAlert = () => {
    Alert.alert('aaa')
    
}


export default class index extends Component {
  render() {
    return (


    
      <View style = {styles.container}>
        <Text style = { styles.textItem}> textInComponent </Text>
        
        
        <Button 
        title='按钮' 
        style={ styles.buttonItem} 
        onPress={()=>{
            this.createAlert
        }}
        />
      </View>

      
    

    )
  }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 88,
        color: 'red',
        backgroundColor: 'pink'
    },
    textItem: {
        padding: 20,
        color: 'blue'
    },
    buttonItem: {
        
        titleColor: 'blue',
        color: 'white',
        cornerRadius: '20',
        width: 100,
        height: 60,
        
    }


})


