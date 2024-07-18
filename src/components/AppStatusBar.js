import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';

const AppStatusBar = () => {
  return (
    <StatusBar
      barStyle="light-content"
      backgroundColor="transparent"
      translucent={true}
    />
  );
};

export default AppStatusBar;