import React, { Component } from 'react'
import { Alert, Text, View } from 'react-native'




class Index extends Component {
  
  state = {num: 100}

  // 第一种: bind
  // handlePress(){
  //   console.log(this.state);
  // }
  // render() {
  //   return (
  //     <View style={{marginTop: 100, padding: 20, backgroundColor: 'red'}}>
  //       <Text onPress={this.handlePress.bind(this)}> {this.state.num} </Text>
  //     </View>
  //   )
  // }

  // 第二种:箭头函数
  // handlePress=()=>{
  //   console.log(this.state);
  // }
  // render() {
  //   return (
  //     <View style={{marginTop: 100, padding: 20, backgroundColor: 'red'}}>
  //       <Text onPress={this.handlePress}> {this.state.num} </Text>
  //     </View>
  //   )
  // }

  // //第三种:箭头函数
  // handlePress(){
  //   console.log(this.state);
  // }
  // render() {
  //   return (
  //     <View style={{marginTop: 100, padding: 20, backgroundColor: 'red'}}>
  //       <Text onPress={()=>this.handlePress()}> {this.state.num} </Text>
  //     </View>
  //   )
  // }

    //第四种:构造函数
    constructor() {
      super();
      this.handlePress = this.handlePress.bind(this);
    }
    handlePress(){
      console.log(this.state);
      this.setState({num: ++this.state.num})
    }
    render() {
      return (
        <View style={{marginTop: 100, padding: 20, backgroundColor: 'red'}}>
          <Text onPress={()=>this.handlePress()}> {this.state.num} </Text>
        </View>
      )
    }

}

export default Index


