import React from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import { primary, faintGrey } from '../assets/color'
import { normalSize } from '../assets/textSettings'
import UpvoteIcon from '../assets/icons/UpvoteIcon'
import DownVoteIcon from '../assets/icons/DownVoteIcon'
import { Comment } from '../components/Comment'

export function CastDetailsScreen(props) {
    

    return (
        <View>
            <View style={styles.topBar}>
                <Text style={{color:'white', fontWeight:'bold', fontSize:30}}>casted</Text>
            </View>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.messageContainer}>
                        <View style={{marginRight: 10}}>
                            <Text style={styles.message}>this is a message on the cast app</Text>
                            <Text style={styles.comments}>10 comments</Text>
                        </View>
                        <View style={{alignItems:'center'}}>
                            <UpvoteIcon/>
                            <Text style={{color:'black', fontSize:30}}>10</Text>
                            <DownVoteIcon/>
                        </View>
                    </View>
                    <View style={{backgroundColor:faintGrey, alignContent:'center', padding:5}}>
                        <Text style={{color:'black', fontWeight:'bold'}}>10 comments</Text>
                    </View>
                    <View style={{marginTop:20}}>
                        <Comment/>
                    </View>
                </View>
            </ScrollView>
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
    },
    message:{
        color:'black',
        fontSize: normalSize,
        fontWeight:'bold',
        
    },
    messageContainer:{
        flexDirection: 'row',
        width:'100%',
        justifyContent:'space-between',
        marginBottom: 30
    },
})
