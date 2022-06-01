import React from 'react'
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native'
import { primary, faintGrey } from '../assets/color'
import { normalSize } from '../assets/textSettings'
import UpvoteIcon from '../assets/icons/UpvoteIcon'
import DownVoteIcon from '../assets/icons/DownVoteIcon'

export function Comment(props) {
    

    return (
        <TouchableOpacity style={styles.container}>
            <View style={{marginRight: 10, justifyContent:'center'}}>
                <Text style={styles.message}>this is a message on the cast app</Text>
            </View>
            <View style={{alignItems:'center'}}>
                <UpvoteIcon/>
                <Text style={{color:'black', fontSize:20}}>10</Text>
                <DownVoteIcon/>
            </View>
        </TouchableOpacity>
    )
}


const styles= StyleSheet.create({
    container:{
        flexDirection: 'row',
        width:'100%',
        justifyContent:'space-between',
        marginBottom: 30,
    },
    message:{
        color:'black',
        fontSize: normalSize,
        
    },
    comments:{
        color: primary,
        fontWeight:'bold',
        marginTop: 10
    },
    commentContainer:{
        flexDirection: 'row',
        padding: 5,
        width: 100,
        justifyContent:'space-evenly',
        backgroundColor: faintGrey,
        borderRadius: 5,
        alignItems:'center',
        marginTop: 5
    }
})