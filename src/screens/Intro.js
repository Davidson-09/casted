import React, {useEffect} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { primary } from '../assets/color'
import { bigText, normalSize } from '../assets/textSettings'

export default function Intro({navigation}) {
    
    useEffect(()=>{
        window.setTimeout(()=>{
            navigation.navigate('home')
        }, 3000)
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.appName}>cast</Text>
            <Text style={styles.message}>Anonymously share stories</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: primary,
        height:'100%',
        padding: 30,
        alignItems:'center',
        justifyContent:'center'
    },
    appName:{
        color:'white',
        fontSize: bigText,
        fontWeight:'bold'
    },
    message:{
        color:'white',
        fontSize: normalSize
    }
})