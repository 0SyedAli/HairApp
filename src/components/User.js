import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import color from '../asset/colors/index'

const User = ({source}) => {
  return (
    <View style={styles.userContainer}>
      <Image source={source}  style={styles.userImg}/>
    </View>
  )
}

export default User

const styles = StyleSheet.create({
    userContainer: {
        width:55,
        height:55,
        borderRadius: 100,
        borderWidth:1,
        borderColor:color.secondary,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        padding:2,

    },
    userImg: {
        width:'100%',
        resizeMode:'contain',
        borderRadius: 100,
    }
})