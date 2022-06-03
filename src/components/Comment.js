import React from 'react'
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native'
import { primary, faintGrey } from '../assets/color'
import { normalSize } from '../assets/textSettings'
import UpvoteIcon from '../assets/icons/UpvoteIcon'
import DownVoteIcon from '../assets/icons/DownVoteIcon'

export function Comment({comment}) {
    

    return (
        <TouchableOpacity style={styles.container}>
            <View style={{marginRight: 10, justifyContent:'center'}}>
                <Text style={styles.message}>{comment}</Text>
            </View>
            <View style={{height: 3, backgroundColor:primary, width: '100%'}}></View>
        </TouchableOpacity>
    )
}


const styles= StyleSheet.create({
    container:{
        width:'100%',
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