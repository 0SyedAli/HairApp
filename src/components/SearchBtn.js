import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';

const SearchBtn = () => {
  return (
    <TouchableOpacity
      style={styles.btn}
      onPress={() => navigation.navigate(path)}>
      <LinearGradient
        colors={['#DCB654', 'white']}
        start={{x: 0, y: 1}}
        end={{x: 1, y: 2}}
        style={styles.gradient}>
        <Icon name="search" style={styles.icon} size={30} />
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default SearchBtn;

const styles = StyleSheet.create({
  gradient: {
    width: 55,
    height: 55,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  icon: {
    color: '#FFF',
  },
});
