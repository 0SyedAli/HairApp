import React, {useState} from 'react';
import {ImageBackground, StyleSheet, View, Image, Text} from 'react-native';
import ThemeBtn from '../components/ThemeBtn';
import ThemeBtn1 from '../components/ThemeBtn1';
import Img from '../asset/images/index'; // Ensure the path to your images is correct
import font from '../asset/fonts/index'; // Ensure the path to your fonts is correct
import GoBackBtn from '../components/GoBackBtn';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import globalStyles from '../components/GlobalStyles';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import ResendCode from '../components/ResendCode';
import FocusCell from '../components/FocusCell';
const CELL_COUNT = 4;
const Confirmation = ({navigation}) => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  return (
    <View style={globalStyles.container}>
      <ImageBackground source={Img.auth_background} style={styles.background}>
        <GoBackBtn navigation={navigation} />
        <View style={styles.body_container}>
          <View>
            <View style={styles.imgContainer}>
              <Image source={Img.layer_img} style={styles.image} />
            </View>
            <Text style={styles.h1}>Confirmation</Text>
            <Text style={styles.h4}>
              Enter 4 digit code we sent to your email
            </Text>
            <View style={{marginTop: 90}}></View>
            <View style={{alignItems: 'center'}}>
            <Text style={styles.h4}>
              Enter code
            </Text>
              <FocusCell />
            </View>
            <View style={styles.resendCode}>
              <ResendCode />
            </View>
          </View>
          <View style={styles.btn_theme}>
            <ThemeBtn
              title="CONTINUE"
              navigation={navigation}
              path={'Confirmation2'}

            />
            <ThemeBtn1
              title="OTHER METHODS"
              navigation={navigation}
              path={'GetStarted'}
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
    marginTop: 20,
    paddingHorizontal: 40,
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
    display:'flex',
    flexDirection:'column',
    rowGap:18
  },
  resendCode: {
    height:'33%',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    paddingTop:20,
  }
});

export default Confirmation;
