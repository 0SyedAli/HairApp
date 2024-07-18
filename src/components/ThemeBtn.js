import React from 'react';
import {Text, Pressable, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import font from '../asset/fonts/index';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const GradientButton = ({title, style, navigation, path }) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate(path)}>
      <LinearGradient
        colors={['#F4BB01', '#DCB654', '#F5E08F', '#E8B832', '#C78015']}
        start={{x: 0, y: 1}}
        end={{x: 1, y: 2}}
        style={styles.gradient}>
        <Text style={styles.text}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    // width:'100%',
  },
  gradient: {
    // paddingVertical: 16,
    padding: hp(1.8),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  text: {
    fontSize: hp(2),
    color: '#000',
    // textTransform: 'uppercase',
    fontFamily: font.poppins_normal,
  },
});

export default GradientButton;
