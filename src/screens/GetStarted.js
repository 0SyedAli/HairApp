import React from 'react';
import {ImageBackground, StyleSheet, View, Image, Text} from 'react-native';
import ThemeBtn from '../components/ThemeBtn';
import Img from '../asset/images/index'; // Ensure the path to your images is correct
import font from '../asset/fonts/index'; // Ensure the path to your fonts is correct
import GoBackBtn from '../components/GoBackBtn';
import InputType from '../components/InputType';
import SocialBtn from '../components/SocialBtn';
import images from '../asset/images/index';
import globalStyles from '../components/GlobalStyles';

const GetStarted = ({navigation}) => {
  return (
    <View style={globalStyles.container}>
      <ImageBackground source={Img.auth_background} style={styles.background}>
        <GoBackBtn navigation={navigation} style={styles.header} />
        <View style={styles.body_container}>
          <View>
            <Image source={Img.layer_img} style={styles.image} />
            <Text style={styles.h1}>Welcome back</Text>
            <Text style={styles.h4}>Let's make your hair attractive</Text>
            <View style={{marginTop: 180}}>
              <InputType iconName={'mail'} />
            </View>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.h3}>Or</Text>
            </View>
            <View style={{}}>
              <SocialBtn source={images.google} />
              <SocialBtn source={images.facebook} />
            </View>
          </View>
          <View style={styles.btn_theme}>
            <ThemeBtn
              title="CONTINUE"
              navigation={navigation}
              path={'Confirmation'}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // or 'contain' as per your design needs
    paddingTop: 60,
    paddingHorizontal: 40,
  },
  header: {
    marginTop:40,
  },
  body_container: {
    flex: 1,
    alignItems: 'start',
    paddingTop: 50,
    justifyContent: 'space-between',
  },
  image: {
    width: 700,
    height: 700,
    position: 'absolute',
    top: '15%', // Center vertically
    marginTop: -100, // Adjust for half of image height
    marginLeft: -100, // Adjust for half of image width
    opacity: 0.2,
  },
  h1: {
    color: 'white',
    fontSize: 40,
    fontFamily: font.poppins_normal,
  },
  h4: {
    color: '#6B6B6B',
    fontSize: 15,
    fontFamily: font.poppins_normal,
    paddingVertical: 5,
  },
  h3: {
    color: '#6B6B6B',
    fontSize: 17,
    fontFamily: font.poppins_normal,
    paddingVertical: 20,
  },
  btn_theme: {
    marginBottom: 45,
  },
});

export default GetStarted;
