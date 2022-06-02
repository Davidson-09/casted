import React from 'react'
import{View, StyleSheet, TextInput} from 'react-native'
import { faintGrey } from '../assets/color'
import SendGreenIcon from '../assets/icons/SendGreenIcon'
import { normalSize } from '../assets/textSettings'

//cast input area
export default function CastArea(props) {
    

    return ( 
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder='say something' placeholderTextColor={'white'}/>
            <SendGreenIcon />
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