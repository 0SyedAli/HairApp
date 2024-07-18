// IconComponent.js

import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import colors from '../asset/colors/index';

const TscIcon2 = ({icons, user}) => {
  return (
    <View style={styles.tscIconContainer}>
      {icons.map((icon, index) => (
        <View key={index} style={styles.tscIcon}>
          <Image style={styles.tscIconInner} source={icon} />
          <Text style={styles.tscText}>{user}</Text>
        </View>
      ))}
    </View>
  );
};

export default TscIcon2;

const styles = StyleSheet.create({
  tscIconContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
    flexDirection: 'row',
    gap: 3,
  },
  tscIcon: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 2.7,
  },
  tscIconInner: {
    width: 22,
    height: 22,
  },
  tscText: {
    paddingLeft: 4,
    paddingRight: 10,
    color: '#FFF',
    fontWeight: '500',
    fontSize: 10,
  },
});
