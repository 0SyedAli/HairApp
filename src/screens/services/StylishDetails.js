import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import React from 'react';
import SearchBtn from '../../components/SearchBtn';
import Img from '../../asset/images/index';
import colors from '../../asset/colors';
import GoBackBtn from '../../components/GoBackBtn';
import {Text} from 'react-native-elements';

const StylishDetails = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <ImageBackground
          source={Img.auth_background2}
          style={styles.background}>
          <View style={styles.header}>
            <View style={styles.headerLeft}>
              <GoBackBtn />
              <Text style={{color: '#FFF', fontSize: 22}}>Omnis iste</Text>
            </View>
            <SearchBtn />
          </View>
          <View>
            <View style={styles.sd1_left}>
              <Image source={Img.tscImg1} />
              <View style={styles.sd1_left_inner}>
                <Text style={{color: '#FFF', fontSize: 14}}>Omnis iste</Text>
                <Text style={{color: '#818181', fontSize: 12, paddingVertical:9,}}>
                  1609 Oak, St. <Text style={{color: '#FFF'}}>(2km)</Text>
                </Text>
                <View>
                  <Text><Icon name='' /></Text>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
};

export default StylishDetails;

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingTop: 40,
  },
  background: {
    flex: 1,
    resizeMode: 'center',
    paddingTop: 25,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 20,
    paddingHorizontal: 30,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  sd1_left: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap:20,
  },
});
