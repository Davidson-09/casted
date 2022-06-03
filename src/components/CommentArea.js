import React, {useState} from 'react'
import{View, StyleSheet, TextInput, TouchableOpacity, ToastAndroid} from 'react-native'
import { faintGrey } from '../assets/color'
import SendGreenIcon from '../assets/icons/SendGreenIcon'
import { normalSize } from '../assets/textSettings'
import firestore from '@react-native-firebase/firestore';

//cast input area
export default function cCommentArea(props) {
    
    const [message, setMessage] = useState('')

    const sendCast =()=>{
        if (message.trim().length > 0){
            let d = new Date();
			let time = d.getTime();
            // send casts to firestore
            const newMessage = message
            setMessage('')
            firestore().collection('casts').add({
                message: newMessage,
                numOfComments: 0,
                upVotes: 0,
                downVotes: 0,
                comments: [],
                time
            }).then(()=>{
                ToastAndroid.show("sent!", ToastAndroid.SHORT);
                props.loadMessages()
            }).catch((e)=>{
                console.log(e)
                console.log('not sent')
                ToastAndroid.show("something went wrong", ToastAndroid.SHORT);
            })
        }
    }

    return ( 
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder='add a comment' placeholderTextColor={'white'}
                value={message} onChangeText={setMessage}/>
            <TouchableOpacity onPress={sendCast}>
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