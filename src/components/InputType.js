import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import font from '../asset/fonts/index'; // Ensure the path to your fonts is correct
import {Text} from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const InputType = ({iconName}) => {
  const [number, onChangeNumber] = React.useState('');

  return (
    <View>
      <Text style={styles.h4}>Enter Your Email</Text>
      <View style={styles.inputContainer}>
        <Icon name={iconName} style={styles.icon} size={20} />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Email"
          placeholderTextColor="#8B8B8B" // Corrected syntax for placeholderTextColor
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1.5,
    borderColor: '#573D1A',
    paddingVertical: 3,
    borderRadius: 50,
    paddingLeft: 20,
  },
  icon: {
    marginRight: 10,
    color: '#8B8B8B',
  },
  input: {
    flex: 1,
    color: '#8B8B8B',
    paddingLeft: 5,
    fontSize: hp('1.75%'),
    fontWeight: '500',
  },
  h4: {
    color: '#6B6B6B',
    fontSize: 15,
    fontFamily: font.poppins_normal,
    paddingVertical: 5,
  },
});

export default InputType;
