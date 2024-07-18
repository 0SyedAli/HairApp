import { StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import React from 'react';

const GoBackBtn = ({navigation}) => {
  return (
    <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" style={styles.icon} size={30} />
    </TouchableOpacity>
  );
};

export default GoBackBtn;

const styles = StyleSheet.create({
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginTop: 40,
    borderRadius: 50,
    justifyContent: 'center',
    borderColor: '#D49621',
    borderWidth: 0.7,
    width:50,
  },
  icon: {
    color: '#D49621',
  },
});
