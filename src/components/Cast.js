import React, {useState} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, ToastAndroid} from 'react-native'
import { bigText, normalSize } from '../assets/textSettings'
import { primary } from '../assets/color'
import CommentIcon from '../assets/icons/CommentIcon'
import { faintGrey } from '../assets/color'
import UpvoteIcon from '../assets/icons/UpvoteIcon'
import DownVoteIcon from '../assets/icons/DownVoteIcon'
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import firebase from "@react-native-firebase/app";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Cast({cast}) {

    const castData = cast.data
    const [netVotes, setNetVotes] = useState(castData.upVotes - castData.downVotes)
    const db = firestore()
    const castRef = db.collection('casts').doc(cast.id)
    
    const navigation = useNavigation()

    //see cast details
    const toDetails =async()=>{
        // save recent cast
        try {
            const jsonValue = JSON.stringify(cast)
            await AsyncStorage.setItem('@recent_cast', jsonValue)
            navigation.navigate('cast details')
          } catch (e) {
            // saving error
          }
    }

    const castUpVote =()=>{
        // increase up vote by 1
        castRef.update({
            upVotes: firebase.firestore.FieldValue.increment(1)
        }).then(()=>{
            ToastAndroid.show("vote casted!", ToastAndroid.SHORT);
            const newNetVote = netVotes +1
            setNetVotes(newNetVote)
        }).catch((e)=>{
            ToastAndroid.show("something went wrong", ToastAndroid.SHORT);
            console.log(e)
        });
    }

    const castDownVote =()=>{
        castRef.update({
            downVotes: firebase.firestore.FieldValue.increment(1)
        }).then(()=>{
            ToastAndroid.show("vote casted!", ToastAndroid.SHORT);
            const newNetVote = netVotes - 1
            setNetVotes(newNetVote)
        }).catch((e)=>{
            ToastAndroid.show("something went wrong", ToastAndroid.SHORT);
            console.log(e)
        });
    }

    return (
        <View style={styles.container} >
            <TouchableOpacity style={{marginRight: 10, flex:1}} onPress={toDetails}>
                <Text style={styles.message}>{castData.message}</Text>
                <Text style={styles.comments}>{`${castData.numOfComments} comments`}</Text>
                <View style={styles.commentContainer}>
                    <CommentIcon/>
                    <Text style={{color:'black', fontWeight:'bold'}}>comment</Text>
                </View>
            </TouchableOpacity>
            <View style={{alignItems:'center'}}>
                <TouchableOpacity onPress={castUpVote}>
                    <UpvoteIcon/>
                </TouchableOpacity>
                <Text style={{color:'black', fontSize:30}}>{netVotes}</Text>
                <TouchableOpacity onPress={castDownVote}>
                    <DownVoteIcon/>
                </TouchableOpacity>
            </View>
        </View>
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
