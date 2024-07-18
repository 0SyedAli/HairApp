import React, {useState} from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import ThemeBtn1 from '../components/ThemeBtn1';
import Img from '../asset/images/index'; // Ensure the path to your images is correct
import font from '../asset/fonts/index'; // Ensure the path to your fonts is correct
import globalStyles from '../components/GlobalStyles';
import SkipBtn from '../components/SkipBtn';
import InputType from '../components/InputType';
import Icon from 'react-native-vector-icons/Feather';

const Confirmation = ({navigation}) => {
  return (
    <View style={globalStyles.container}>
      <ImageBackground source={Img.auth_background} style={styles.background}>
        <View style={styles.header}>
          <SkipBtn navigation={navigation} />
        </View>
        <View style={styles.body_container}>
          <View style={styles.imgContainer}>
            <Image source={Img.layer_img} style={styles.image} />
          </View>
          <View style={styles.banner}>
            <Text style={styles.h1}>How people to know you</Text>
          </View>
          <View style={styles.formContainer}>
            <View style={styles.image_upload_container}>
              <Text style={[{paddingBottom: 15}, styles.h4]}>
                Add profile picture
              </Text>
              <View style={styles.image_upload}>
                <Image style={styles.uImg} source={Img.img_upload} />
              </View>
              <TouchableOpacity style={styles.image_upload_btn}>
                <Icon name="plus" size={30} color={'#EFF1F1'}></Icon>
              </TouchableOpacity>
            </View>
            <View style={styles.inputContainer}>
              <InputType title="User Name" iconName={'mail'} />
            </View>
            <View>
              <InputType title="Phone Number" iconName={'phone'} />
            </View>
            <View style={styles.btn_theme}>
              <ThemeBtn1 title="DONE" navigation={navigation} path={'Home'} />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 40,
  },
  banner: {
    paddingHorizontal: 40,
    paddingBottom: 13,
  },
  background: {
    flex: 1,
    resizeMode: 'cover', // or 'contain' as per your design needs
    marginTop: 20,
  },
  body_container: {
    flex: 1,
    paddingTop: 50,
  },
  imgContainer: {
    position: 'absolute',
    left: -100,
    top: 40,
    opacity: 0.2,
  },
  image: {
    width: 700,
    height: 700,
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
  btn_theme: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: 18,
    marginTop: 23,
  },
  resendCode: {
    height: '33%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  formContainer: {
    backgroundColor: '#0C0A22',
    paddingHorizontal: 45,
    paddingVertical: 28,
    paddingBottom: 35,
  },
  inputContainer: {
    marginBottom: 10,
  },
  image_upload_container: {
    marginBottom: 28,
    width: 160,
  },
  image_upload: {
    borderWidth: 2,
    borderRadius: 100,
    padding: 20,
    borderColor: '#D49621',
    width: 150,
    height: 150,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  uImg: {
    width: '100%',
    opacity: 1,
  },
  image_upload_btn: {
    backgroundColor: '#9D701D',
    borderRadius: 100,
    width: 48,
    height: 48,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: '#0C0A22',
    position: 'absolute',
    bottom: 0,
    right: 10,
  },
});

export default Confirmation;
