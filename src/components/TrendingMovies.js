import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const TrendingMovies = ({data}) => {
  const width = Dimensions.get('window').width;
  // const MovieCard = ({title}) => {
  //   return (
  //     // <TouchableWithoutFeedback>
  //       <View style={styles.cardContainer}>
  //         <Text style={styles.carouselText}>{title}</Text>
  //       </View>
  //     // </TouchableWithoutFeedback>
  //   );
  // };

  // const renderItem = ({item}) => {
  //   return (
  //   <MovieCard title={item.title} />
  // )
  // }

  return (
    <View style={styles.trendingContainer}>
      <Text style={styles.trendingText}>Trending</Text>
      <Carousel
        loop
        width={width}
        height={width / 2}
        autoPlay={false}
        data={[...new Array(6).keys()]}
        scrollAnimationDuration={1000}
        onSnapToItem={index => console.log('current index:', index)}
        renderItem={({index}) => (
          <View
            style={{
              flex: 1,
              borderWidth: 1,
              justifyContent: 'center',
              borderColor: '#FFF',
            }}>
            <Text style={{textAlign: 'center', fontSize: 30, color: '#fff'}}>
              {index}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default TrendingMovies;

const styles = StyleSheet.create({
  trendingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  trendingText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardContainer: {
    backgroundColor: '#eee',
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  carouselText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
