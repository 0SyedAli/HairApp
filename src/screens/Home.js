import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import colors from '../asset/colors/index';
import Img from '../asset/images/index';
import React, {useState} from 'react';
import User from '../components/User';
import SearchBtn from '../components/SearchBtn';
import font from '../asset/fonts/index'; // Ensure the path to your fonts is correct
import Feature1 from '../components/Feature1';
import TopStylistsSlide from '../components/TopStylistsSlide';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Carousel from 'react-native-reanimated-carousel';
import LinearGradient from 'react-native-linear-gradient';
import TabNavigation from '../components/TabNavigation';

const features = [
  {source: Img.fire, title: 'Trending'},
  {source: Img.location, title: 'Nearby'},
  {source: Img.clock, title: 'Recents'},
  {source: Img.stars, title: 'Popular'},
];

const topStylists = [
  {
    source: Img.tscImg1,
    title: 'Omnis iste',
    desc: '1609 Oak, St.',
    area: '2km',
    icons: [Img.tscIcon1, Img.tscIcon2],
  },
  {
    source: Img.tscImg2,
    title: 'Omnis iste',
    desc: '1609 Oak, St.',
    area: '2km',
    icons: [Img.tscIcon1],
  },
  {
    source: Img.tscImg3,
    title: 'Omnis iste',
    desc: '1609 Oak, St.',
    area: '2km',
    icons: [Img.tscIcon1, Img.tscIcon2],
  },
];

const recentProducts = [
  {
    source: Img.tscImg4,
    title: 'Deep mask',
    desc: '$59.00',
    icons: [Img.tscUser1],
    user: 'Sarah J',
  },
  {
    source: Img.tscImg5,
    title: 'Deep mask',
    desc: '$59.00',
    icons: [Img.tscUser1],
    user: 'Sarah J',
  },
  {
    source: Img.tscImg6,
    title: 'Deep mask',
    desc: '$59.00',
    icons: [Img.tscUser1],
    user: 'Sarah J',
  },
];

const cardContent = [
  {title: 'Let your hair, Speak for itself'},
  {title: 'Let your hair, Speak for itself'},
  {title: 'Let your hair, Speak for itself'},
];
const Home = () => {
  const width = Dimensions.get('window').width;
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          <ImageBackground
            source={Img.auth_background2}
            style={styles.background}>
            <View style={styles.header}>
              <User source={Img.user1} />
              <SearchBtn />
            </View>
            <View style={styles.bodyContainer}>
              <Text style={styles.h1}>Hi Sarah,</Text>
              <Text style={styles.h4}>Let's make a new style!</Text>
              <View style={styles.featuresTabs}>
                {features.map((feature, index) => (
                  <Feature1
                    key={index}
                    source={feature.source}
                    title={feature.title}
                  />
                ))}
              </View>
            </View>

            <View style={styles.slideContainer}>
              <View style={styles.topStylists}>
                <Text style={styles.h2}>Top stylists</Text>
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  style={{marginHorizontal: hp(-4)}}
                  contentContainerStyle={{paddingHorizontal: hp(4)}}
                  disableIntervalMomentum={true}>
                  {topStylists.map((list, index) => (
                    <TopStylistsSlide
                      key={index}
                      source={list.source}
                      title={list.title}
                      desc={list.desc}
                      area={list.area}
                      icons={list.icons}
                      CheckComp={false} // Or true based on your condition
                    />
                  ))}
                </ScrollView>
              </View>
            </View>
            <View style={styles.slideContainer}>
              <View style={styles.topStylists}>
                <Text style={styles.h2}>Recent Products</Text>
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  style={{marginHorizontal: hp(-4)}}
                  contentContainerStyle={{paddingHorizontal: hp(4)}}
                  disableIntervalMomentum={true}>
                  {recentProducts.map((list, index) => (
                    <TopStylistsSlide
                      key={index}
                      source={list.source}
                      title={list.title}
                      desc={list.desc}
                      area={list.area}
                      icons={list.icons}
                      user={list.user}
                      checkComp={true} // Set to true to show TscIcon2
                    />
                  ))}
                </ScrollView>
              </View>
            </View>
            <View style={styles.cardContainer}>
              <View style={styles.cardItem}>
                <Carousel
                  loop
                  width={width}
                  height={width / 2}
                  autoPlay={false}
                  data={cardContent} // Match the data length to cardContent
                  scrollAnimationDuration={1000}
                  onSnapToItem={index => {
                    console.log('current index:', index);
                    setActiveIndex(index);
                  }}
                  renderItem={({index}) => (
                    <View style={styles.cardInner}>
                      <ImageBackground
                        source={Img.carImg1}
                        style={styles.cardBackground}
                        imageStyle={{borderRadius: 15}} // To match the border radius of the inner card
                      >
                        <View style={styles.indicatorContainer}>
                          {cardContent.map((_, i) => (
                            <View
                              key={i}
                              style={[
                                styles.indicatorDot,
                                i === activeIndex
                                  ? styles.activeDot
                                  : styles.inactiveDot,
                              ]}
                            />
                          ))}
                        </View>
                        <View style={styles.slideRedirect}>
                          <Image
                            source={Img.arrowUpLeft}
                            style={styles.slideRedIcon}
                            size={30}
                          />
                        </View>
                        <Text style={styles.cardContent}>
                          {cardContent[index].title}
                        </Text>
                      </ImageBackground>
                    </View>
                  )}
                />
              </View>
            </View>
            <View style={styles.startJourney}>
              <LinearGradient
                colors={['#F4BB01', '#DCB654', '#F5E08F', '#E8B832', '#C78015']}
                start={{x: 0, y: 1}}
                end={{x: 1, y: 1}}
                style={styles.gradient}>
                <View style={styles.sjLeft}>
                  <Text style={styles.sjl_content}>
                    Start your hair journey
                  </Text>
                  <Text style={styles.sjl_content2}>Explore stylists</Text>
                  <TouchableOpacity
                    style={styles.sjlBtn}
                    onPress={() => navigation.navigate(path)}>
                    <Image
                      source={Img.arrowUpLeft}
                      style={styles.sjlBtnIcon}
                      size={30}
                    />
                    <Text style={styles.sjlBtnText}>Start Now</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.sjRight}>
                  <Image source={Img.Journey} style={styles.Journey} />
                </View>
              </LinearGradient>
            </View>
            <View style={styles.paginationIconContainer}>
              <Image
                source={Img.paginationIcon}
                style={styles.paginationIcon}
              />
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
    </>
  );
};

export default Home;

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
  bodyContainer: {
    paddingHorizontal: 30,
  },
  h1: {
    color: '#FFF',
    fontSize: 40,
    fontFamily: font.poppins_normal,
  },
  h4: {
    color: '#6B6B6B',
    fontSize: 15,
    fontFamily: font.poppins_normal,
  },
  h2: {
    color: '#FFF',
    fontSize: 27,
    fontFamily: font.poppins_normal,
  },
  featuresTabs: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 30,
  },
  slideContainer: {
    borderTopWidth: 1,
    borderColor: colors.secondary,
    paddingTop: 20,
    paddingBottom: 30,
    paddingLeft: 30,
  },

  // card carousel container start
  cardContainer: {
    borderTopWidth: 1,
    borderColor: colors.secondary,
    paddingTop: 30,
  },
  cardItem: {
    borderRadius: 15,
    alignItems: 'center',
  },

  cardInner: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: colors.secondary,
    borderRadius: 15,
    width: '85%',
  },

  cardBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },

  cardContent: {
    textAlign: 'center',
    fontSize: 22,
    color: '#fff',
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: '50%',
    textAlign: 'right',
    lineHeight: 33,
  },

  indicatorContainer: {
    position: 'absolute',
    top: 25,
    left: 17,
    flexDirection: 'row',
    alignItems: 'center',
  },

  indicatorDot: {
    width: 4,
    height: 4,
    borderRadius: 100,
    marginHorizontal: 3,
  },

  activeDot: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.secondary,
    width: 8,
    height: 8,
  },

  inactiveDot: {
    backgroundColor: colors.secondary,
  },
  slideRedirect: {
    position: 'absolute',
    right: 20,
    top: 25,
  },
  slideRedIcon: {
    height: 25,
    width: 25,
  },
  // card carousel container end

  // card container start

  startJourney: {
    width: '85%',
    alignSelf: 'center',
    marginTop: 20,
  },
  gradient: {
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 10,
    paddingTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sjLeft: {
    width: '40.5%',
  },
  sjl_content: {
    fontSize: 20.5,
    color: '#000',
    lineHeight: 30,
    fontWeight: '400',
    letterSpacing: 1,
  },
  sjl_content2: {
    fontSize: 11,
    color: '#0C0A22',
    fontWeight: '200',
    letterSpacing: 1,
    fontFamily: 'sans-serif',
    paddingTop: 13,
    paddingBottom: 23,
  },
  sjlBtn: {
    backgroundColor: '#111649',
    borderRadius: 4,
    alignItems: 'center',
    paddingLeft: 10,
    paddingVertical: 13,
    flexDirection: 'row',
    gap: 10,
  },
  sjlBtnText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.secondary,
    textTransform: 'uppercase',
  },
  sjlBtnIcon: {
    width: 17,
    height: 17,
  },
  Journey: {
    resizeMode: 'contain',
  },
  // card container end

  // paginationIconContainer start

  paginationIconContainer: {
    paddingVertical: 50,
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'row',
  },
  paginationIcon: {
    width: 35,
  },
  // paginationIconContainer end
});
