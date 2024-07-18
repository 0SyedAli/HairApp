// IconComponent.js

import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import colors from '../asset/colors/index';

const TscIcon = ({ icons }) => {
  return (
    <View style={styles.tscIconContainer}>
      {icons.map((icon, index) => (
        <View key={index} style={styles.tscIcon}>
          <Image style={styles.tscIconInner} source={icon} />
        </View>
      ))}
    </View>
  );
};

export default TscIcon;

const styles = StyleSheet.create({
  tscIconContainer: {
    position: 'absolute',
    top: 8,
    left: 8,
    flexDirection: 'row',
    gap: 3,
  },
  tscIcon: {
    width: 30,
    height: 30,
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tscIconInner: {
    width: 12,
    height: 12,
  },
});
