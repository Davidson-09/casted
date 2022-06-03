import React, {useState, useEffect} from 'react'
import{View, StyleSheet, TextInput, TouchableOpacity, ToastAndroid} from 'react-native'
import { faintGrey } from '../assets/color'
import SendGreenIcon from '../assets/icons/SendGreenIcon'
import { normalSize } from '../assets/textSettings'
import firestore from '@react-native-firebase/firestore';
import firebase from "@react-native-firebase/app";
import AsyncStorage from '@react-native-async-storage/async-storage';

//cast input area
export default function CommentArea(props) {
    
    const [message, setMessage] = useState('')
    const [cast, setCast] = useState({})
    const db = firestore()

    useEffect(()=>{
        loadRecentCast()
    }, [])

    const loadRecentCast=async()=>{
        try {
            const jsonValue = await AsyncStorage.getItem('@recent_cast')
            if (jsonValue){
                setCast(JSON.parse(jsonValue))
                console.log(JSON.parse(jsonValue), 'cast area')
            }
          } catch(e) {
            // error reading value
            ToastAndroid.show("can't load message right now", ToastAndroid.SHORT);
          }
    }

    const sendComment =()=>{
        if (message.trim().length > 0){
            const castRef = db.collection('casts').doc(cast.id)
            castRef.update({
                comments: firebase.firestore.FieldValue.arrayUnion(message)
            }).then(()=>{
                setMessage('')
                ToastAndroid.show("sent!", ToastAndroid.SHORT);
            }).catch((e)=>{
                console.log(e)
                ToastAndroid.show("something went wrong", ToastAndroid.SHORT);
            });
        }
    }

    return ( 
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder='add a comment' placeholderTextColor={'white'}
                value={message} onChangeText={setMessage}/>
            <TouchableOpacity onPress={sendComment}>
                <SendGreenIcon />
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        paddingHorizontal: 10,
        position: 'absolute',
        bottom: 0, 
        marginBottom: 10
    },
    input:{
        backgroundColor: faintGrey,
        height: 50,
        borderRadius: 25,
        flex: 1,
        marginRight: 10,
        padding: 10,
        fontSize: normalSize,
        color: 'black'
    }
})