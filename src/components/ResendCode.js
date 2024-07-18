import { StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Icon1 from 'react-native-vector-icons/FontAwesome6';
import React from 'react';
import { Text } from 'react-native-elements';

const ResendCode = ({navigation}) => {
  return (
    <TouchableOpacity style={styles.backButton} >
        <Icon1 name="rotate-left" style={styles.icon} size={30} />
        <Text style={styles.rsText} >Resend code</Text>
    </TouchableOpacity>
  );
};

export default ResendCode;

const styles = StyleSheet.create({
  backButton: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    color: '#573D1A',
    fontSize:22,
    fontWeight:100,
  },
  rsText: {
    color: '#D49621',
    fontSize:16,
    paddingTop:10,
  }
});
