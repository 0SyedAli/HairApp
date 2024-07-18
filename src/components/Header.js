import React from 'react';
import {SafeAreaView, StyleSheet, View, Image} from 'react-native';
import Img from '../asset/images/index';


const Header = () => {
  return (
    <SafeAreaView >
      <View style={styles.header}>
        <Image source={Img.logo} style={styles.logo} />
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingTop: 30,
    justifyContent: 'start',
    alignItems: 'center',
  },
  logo: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
    marginLeft: -10,
  },
});
