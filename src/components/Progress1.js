import {StyleSheet, View} from 'react-native';
import React from 'react';
import colors from '../asset/colors';
import Icon from 'react-native-vector-icons/Feather';

const Progress1 = () => {
  return (
    <View style={styles.progressCircle}>
      <Icon name="star" style={styles.icon} size={30} />
    </View>
  );
};

export default Progress1;

const styles = StyleSheet.create({
  progressCircle: {
    backgroundColor: '#FFF',
    borderRadius: 100,
    width: 45,
    height: 45,
    justifyContent:'center',
    alignItems:'center',
  },
  icon: {
    color: colors.secondary,
    fontSize:20,
  },
});
