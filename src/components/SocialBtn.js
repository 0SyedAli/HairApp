import React from 'react';
import {TextInput, View, StyleSheet, Image, Text} from 'react-native';
import Img from '../asset/images/index'; // Ensure the path to your images is correct
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const SocialBtn = ({source}) => {
  const [number, onChangeNumber] = React.useState('');

  return (
    <View style={styles.inputContainer}>
      <Image source={source} style={styles.socialImg} />
      <Text style={styles.socialText}>Continue with google</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 13,
    borderWidth: 1.5,
    borderColor: '#573D1A',
    borderRadius: 50,
    height:hp('6.8%'),
    paddingLeft: 20,
    alignSelf:'center',
    width:'100%',
    justifyContent:'center'
  },
  socialImg: {
    height: hp('3.75%'),
    width:  hp('3.75%'),
    position:'absolute',
    left:15,
  },
  socialText: {
    color: '#FFF',
    textAlign:'center',
    fontSize: hp('1.75%'),
    textTransform:'uppercase'
  }
});

export default SocialBtn;
