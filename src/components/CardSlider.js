import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import Carousel from 'react-native-reanimated-carousel';
import colors from '../asset/colors/index';
import Img from '../asset/images/index'; // Assuming your image path is here

const cardContent = [
  {title: 'Let your hair, Speak for itself'},
  {title: 'Let your hair, Speak for itself'},
  {title: 'Let your hair, Speak for itself'},
];

const CardSlider = () => {
  const width = Dimensions.get('window').width;
  const [activeIndex, setActiveIndex] = useState(0);

  return (
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
                      i === activeIndex ? styles.activeDot : styles.inactiveDot,
                    ]}
                  />
                ))}
              </View>
              <View style={styles.slideRedirect}>
                <Image source={Img.arrowUpLeft} style={styles.slideRedIcon} size={30} />
              </View>
              <Text style={styles.cardContent}>{cardContent[index].title}</Text>
            </ImageBackground>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
    lineHeight:33
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
    position:'absolute',
    right:20,
    top:25,
  },
  slideRedIcon: {
    height:25,
    width:25
  }
  
});

export default CardSlider;
