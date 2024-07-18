import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const Feature1 = ({source, title}) => {
  return (
    <View style={styles.featureItem}>
      <Image source={source} style={styles.featureImg} />
      <Text style={styles.featureText}>{title}</Text>
    </View>
  );
};

export default Feature1;

const styles = StyleSheet.create({
  featureItem: {
    paddingVertical: 13,
    width: wp(17),
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    gap: 8,
    borderWidth: 2,
    borderColor: '#2B1F2F',
    marginTop: 25,
  },
  featureText: {
    fontSize: 12,
    color: '#FFF',
    textAlign: 'center',
  },
  featureImg: {
    width: wp(7),
    height: hp(4),
    resizeMode: 'contain',
  },
});
