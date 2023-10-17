
import React from 'react'
import { Text, View } from 'react-native'

// 子组件参数传递
const Index = ()=><View>
    <Text>=====</Text>
    <Sub color1='red'>
        <Text> +++++ ===== +++++ </Text>
    </Sub>
    <Text>=====</Text>
</View>


const Sub=(props)=><View>
    <Text style = {{color: props.color1}}>子组件</Text>
    {props.children}
</View>


export default Index;
