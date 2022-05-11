import React from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import { primary } from '../assets/color'
import Cast from '../components/Cast'
import CastArea from '../components/CastArea'

export default function Home(props) {
    

    return (
        <View style={{height:'100%'}}>
            <View style={styles.topBar}>
                <Text style={{color:'white', fontWeight:'bold', fontSize:30}}>cast</Text>
            </View>
            <ScrollView>
                <View style={styles.container}>
                    <Cast/>
                    <Cast/>
                    <Cast/>
                </View>
            </ScrollView>
            
          <CastArea/>
        </View>
    )
}

const styles = StyleSheet.create({
    topBar:{
        height: 60,
        backgroundColor:primary,
        justifyContent:'center',
        alignItems:'center'
    },
    container:{
        padding: 20
    }
})