import React from 'react'
import {View, StyleSheet, ActivityIndicator} from 'react-native'
import { primary } from '../assets/color'

function Progress() {
	return (
		<View style={styles.conatiner}>
			<ActivityIndicator size='large' color={primary}/>
		</View>
	)
}

const styles = StyleSheet.create({
	conatiner:{
		flex: 1,
		height:'100%',
		width:'100%',
		justifyContent:'center',
		alignItems:'center',
		position: 'absolute',
		backgroundColor: 'white',
		opacity: 0.5,
		zIndex: 1
	}
})

export default Progress
