import React, {useEffect, useState} from 'react'
import {View, Text, StyleSheet, ScrollView, FlatList, TouchableOpacity} from 'react-native'
import { primary } from '../assets/color'
import Cast from '../components/Cast'
import CastArea from '../components/CastArea'
import firestore from '@react-native-firebase/firestore';
import Progress from '../components/Progress'
import { useIsFocused } from '@react-navigation/native';

export default function Home(props) {

    const db = firestore()

    const [castLIst, setCastList] = useState()
    const focused = useIsFocused()
    const [newMessages, setNewMessages] = useState(false)

    useEffect(()=>{
        loadMessages()
        startReloadTimer()
    },[focused])

    const loadMessages =async()=>{
        // load cast messages
        db.collection('casts').orderBy('time', 'desc').get().then((querySnapshot)=>{
            let c = []; // temporary list of chats
            querySnapshot.forEach((doc)=>{
                let cast = {data: doc.data(), id: doc.id};
                c.push(cast);
            })
            setCastList(c)
        })
    }

    const startReloadTimer =()=>{
        setInterval(()=>{
            setNewMessages(true)
        }, 60000)
    }

    const reload=()=>{
        setNewMessages(false)
        loadMessages()
    }

    const renderItem = ({item}) =>(
        <Cast cast={item}/>
    )

    return (
        <View style={{height:'100%'}}>
            {!castLIst && <Progress/>}
            <View style={styles.topBar}>
                <Text style={{color:'white', fontWeight:'bold', fontSize:30}}>casted</Text>
            </View>
            {newMessages && (
                <TouchableOpacity style={{padding:3, backgroundColor:'#30F3C4'}} onPress={reload}>
                    <Text style={{color:'black', textAlign:'center' }}>load new messages</Text>
                </TouchableOpacity>
            )}
            <View style={styles.container}>
                <FlatList data= {castLIst} renderItem={renderItem} keyExtractor={item => item.id} style={styles.list}/>
            </View>
          <CastArea loadMessages={loadMessages}/>
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
    list: {
        marginBottom: 100
    },
})