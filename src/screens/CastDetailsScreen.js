import React, {useEffect, useState} from 'react'
import {View, Text, StyleSheet, ScrollView, TouchableOpacity, ToastAndroid, FlatList} from 'react-native'
import { primary, faintGrey } from '../assets/color'
import { normalSize } from '../assets/textSettings'
import UpvoteIcon from '../assets/icons/UpvoteIcon'
import DownVoteIcon from '../assets/icons/DownVoteIcon'
import { Comment } from '../components/Comment'
import CommentArea from '../components/CommentArea'
import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';
import firebase from "@react-native-firebase/app";

export function CastDetailsScreen(props) {
    
    const [cast, setCast] = useState({data:{}})
    const [netVote, setNetVote] = useState(0)
    const db = firestore()
    const [comments, setComments] = useState([])
    const [castCopy, setCastCopy] = useState({comments:[]}) // copy from the internet

    useEffect(()=>{
        loadRecentCast()
    }, [])

    const loadRecentCast =async()=>{
        try {
            const jsonValue = await AsyncStorage.getItem('@recent_cast')
            if (jsonValue){
                const recentCast = JSON.parse(jsonValue)
                setCast(JSON.parse(jsonValue))
                // load copy from internet
                let castRef = db.collection("casts").doc(recentCast.id);
                castRef.get().then((doc)=>{
                    if (doc.exists) {
                        setCastCopy(doc.data())
                        let copy = doc.data()
                        setNetVote(copy.upVotes - copy.downVotes)
                    } else {
                        // doc.data() will be undefined in this case
                    }
                })
            }
          } catch(e) {
            // error reading value
            ToastAndroid.show("can't load message right now", ToastAndroid.SHORT);
          }
    }

    const castUpVote =()=>{
        // increase up vote by 1
        const castRef = db.collection('casts').doc(cast.id)
        castRef.update({
            upVotes: firebase.firestore.FieldValue.increment(1)
        }).then(()=>{
            ToastAndroid.show("vote casted!", ToastAndroid.SHORT);
            const newNetVote = netVote +1
            setNetVote(newNetVote)
        }).catch((e)=>{
            ToastAndroid.show("something went wrong", ToastAndroid.SHORT);
        });
    }

    const castDownVote =()=>{
        const castRef = db.collection('casts').doc(cast.id)
        castRef.update({
            downVotes: firebase.firestore.FieldValue.increment(1)
        }).then(()=>{
            ToastAndroid.show("vote casted!", ToastAndroid.SHORT);
            const newNetVote = netVote - 1
            setNetVote(newNetVote)
        }).catch((e)=>{
            ToastAndroid.show("something went wrong", ToastAndroid.SHORT);
        });
    }

    const loadComments =()=>{

    }
    const renderItem = ({item}) =>(
        <Comment comment={item}/>
    )

    return (
        <View style={{height:'100%'}}>
            <View style={styles.topBar}>
                <Text style={{color:'white', fontWeight:'bold', fontSize:30}}>casted</Text>
            </View>
            <View >
                <View style={styles.container}>
                    <View style={styles.messageContainer}>
                        <View style={{marginRight: 10}}>
                            <Text style={styles.message}>{cast.data.message}</Text>
                        </View>
                        <View style={{alignItems:'center'}}>
                        <TouchableOpacity onPress={castUpVote}>
                            <UpvoteIcon/>
                        </TouchableOpacity>
                            <Text style={{color:'black', fontSize:30}}>{netVote}</Text>
                            <TouchableOpacity onPress={castDownVote}>
                                <DownVoteIcon/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{backgroundColor:faintGrey, alignContent:'center', padding:5}}>
                        <Text style={{color:'black', fontWeight:'bold'}}>{`${castCopy.comments.length} comments`}</Text>
                    </View>
                    <View style={{marginTop:20}}>
                        <FlatList data= {castCopy.comments} renderItem={renderItem} keyExtractor={item => item} style={styles.list}/>
                    </View>
                </View>
            </View>
            <CommentArea reload={loadRecentCast}/>
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
        padding: 20,
        height: '100%'
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
