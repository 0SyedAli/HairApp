import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import fonts from '../asset/fonts/index';
import colors from '../asset/colors/index';
import Progress1 from './Progress1';
import TscIcon from './TscIcon';
import TscIcon2 from './TscIcon2';

const TopStylistsSlide = ({
  source,
  title,
  desc,
  area,
  icons,
  user,
  checkComp,
}) => {
  // const checkComp = checkComp;
  return (
    <View style={styles.topStylistCard}>
      <View style={styles.tsc_item1}>
        <Image source={source} />
        {checkComp ? (
          <TscIcon2 icons={icons} user={user} />
        ) : (
          <TscIcon icons={icons} />
        )}
        <View style={styles.progressContainer}>
          <Progress1 />
        </View>
        <View style={styles.tscText}>
          <Text style={styles.h5}>{title}</Text>
          <Text style={styles.h6}>
            {desc}
            <Text>({area})</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default TopStylistsSlide;

const styles = StyleSheet.create({
  topStylistCard: {
    flexDirection: 'row',
    paddingTop: 15,
  },
  h5: {
    color: '#FFF',
    fontSize: 13,
    fontFamily: fonts.poppins_normal,
  },
  h6: {
    color: '#EFF1F1',
    fontSize: 10,
    fontFamily: fonts.poppins_normal,
  },
  tsc_item1: {
    padding: 4.5,
    backgroundColor: colors.secondary,
    borderRadius: 15,
    marginRight: 13,
  },
  tscText: {
    paddingHorizontal: 8,
    paddingTop: 8,
    paddingBottom: 5,
  },
  progressContainer: {
    position: 'absolute',
    bottom: 35,
    right: 15,
  },
});
