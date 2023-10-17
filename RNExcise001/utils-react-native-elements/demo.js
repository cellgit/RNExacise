
import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Button } from '@rneui/themed';

// function Demo() {
//   const { mode, setMode } = useThemeMode();

//   return <Button onPress={() => setMode('dark')} title={mode} />;
// }


const Demo = () => {
    return(
        <Button onPress={() => setMode('dark')} title="撒拉拉链" />
    )
}

const styles = StyleSheet.create({})


export default Demo;
