import React from 'react';
import {ImageBackground, StyleSheet, View, Image, Text} from 'react-native';
import Header from '../components/Header';
import ThemeBtn from '../components/ThemeBtn';
import Img from '../asset/images/index'; // Ensure the path to your image is correct
import font from '../asset/fonts/index'; // Ensure the path to your image is correct
import globalStyles from '../components/GlobalStyles';
const Splash = ({navigation}) => {
  return (
    <View style={globalStyles.container}>
      <ImageBackground source={Img.auth_background} style={styles.background}>
        <Header />
        {/* Uncomment to add ScrollView for content */}
        {/* <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 10 }}>
          <TrendingMovies />
        </ScrollView> */}
        <View style={styles.body_container}>
          <View style={styles.imgContainer}>
            <Image source={Img.layer_img} style={styles.image} />
          </View>
          <Text style={styles.h1}>Let your hair, {'\n'}Speak for itself</Text>
          <Text style={styles.h4}>Let's make your hair attractive</Text>
        </View>
        <View style={styles.btn_theme}>
          <ThemeBtn
            title="GET STARTED"
            navigation={navigation}
            path={'GetStarted'}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // or 'contain' as per your design needs
    marginTop: 20,
    paddingHorizontal: 40,
  },
  body_container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'start',
  },
  imgContainer: {
    position: 'absolute',
    left: -170,
    top: -120,
    opacity: 0.8,
  },
  image: {
    width: 700,
    height: 700,
  },
  h1: {
    color: 'white',
    fontSize: 40,
    fontFamily: font.poppins_normal,
    lineHeight: 66,
  },
  h4: {
    color: '#6B6B6B',
    fontSize: 15,
    fontFamily: font.poppins_normal,
    paddingVertical: 20,
  },
  btn_theme: {
    marginTop: 40,
    marginBottom: 40,
  },
});

export default Splash;
