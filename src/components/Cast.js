import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { bigText, normalSize } from '../assets/textSettings'
import { primary } from '../assets/color'
import CommentIcon from '../assets/icons/CommentIcon'
import { faintGrey } from '../assets/color'
import UpvoteIcon from '../assets/icons/UpvoteIcon'
import DownVoteIcon from '../assets/icons/DownVoteIcon'
import { useNavigation } from '@react-navigation/native';

export default function Cast() {
    
    const navigation = useNavigation()

    //see cast details
    const toDetails =()=>{
        navigation.navigate('cast details')
    }

    return (
        <TouchableOpacity style={styles.container} onPress={toDetails}>
            <View style={{marginRight: 10}}>
                <Text style={styles.message}>this is a message on the cast app</Text>
                <Text style={styles.comments}>10 comments</Text>
                <View style={styles.commentContainer}>
                    <CommentIcon/>
                    <Text style={{color:'black', fontWeight:'bold'}}>comment</Text>
                </View>
            </View>
            <View style={{alignItems:'center'}}>
                <UpvoteIcon/>
                <Text style={{color:'black', fontSize:30}}>10</Text>
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
        marginBottom: 30
    },
    message:{
        color:'black',
        fontSize: normalSize,
        fontWeight:'bold',
        
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
