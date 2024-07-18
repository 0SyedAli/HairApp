import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import font from '../asset/fonts/index';

const GradientButton = ({title, style, navigation, path}) => {
  return (
    <TouchableOpacity
      style={styles.btn}
      onPress={() => navigation.navigate(path)}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: '100%',
    paddingVertical: 16,
    borderRadius: 30,
    borderWidth: .8,
    borderColor: '#D49621',
  },
  text: {
    fontSize: 16,
    color: '#D49621',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontFamily: font.poppins_normal,
    padding: 0,
  },
});

export default GradientButton;
