import React, {useRef} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Text, Div} from 'react-native-magnus';
import Animated from 'react-native-reanimated';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';
import {whiteColor} from '../../../constants/themes';
import MoviesCategory from './_partials/MoviesCategory';

const mainImage =
  'https://images.unsplash.com/photo-1588167056840-13caf6e4562a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTY3NDh8MHwxfHNlYXJjaHwxfHxiZWFyfGVufDB8fHx8MTYxNjQ0ODE0MA&ixlib=rb-1.2.1&q=80&w=1080';

const Home = () => {
  const scrollPosition = useRef(new Animated.Value(0)).current;

  const headerHeight = scrollPosition.interpolate({
    inputRange: [0, 500],
    outputRange: [120, 60],
    extrapolate: 'clamp',
  });

  const opacity = scrollPosition.interpolate({
    inputRange: [0, 250, 500],
    outputRange: [0, 0.5, 1],
    extrapolate: 'clamp',
  });

  return (
    <Div bg="body" h="100%">
      <Animated.View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          height: headerHeight,
          backgroundColor: 'black',
        }}
        opacity={opacity}
      />
      <Animated.View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: headerHeight,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingLeft: 50,
          paddingRight: 50,
          alignItems: 'flex-end',
        }}>
        <Text fontSize="lg" fontFamily="Roboto" color="text" my="lg">
          Séries
        </Text>
        <Text fontSize="lg" fontFamily="Roboto" color="text" my="lg">
          Films
        </Text>
        <Text fontSize="lg" fontFamily="Roboto" color="text" my="lg">
          Ma liste
        </Text>
      </Animated.View>

      <Animated.ScrollView
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollPosition}}}],
          {useNativeDriver: false},
        )}
        contentInsetAdjustmentBehavior="automatic"
        style={{
          top: 0,
        }}>
        <ImageBackground
          source={{uri: mainImage}}
          style={{
            flex: 1,
            height: 400,
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <LinearGradient
            colors={['#FFFFFF00', '#000000']}
            style={{
              width: '100%',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}>
            <Text color={whiteColor} fontSize={40} p={30}>
              B E A R S
            </Text>
          </LinearGradient>
        </ImageBackground>
        {/* {Array.from(Array(100), (e, key) => {
          return <Text key={key}>Item {key}</Text>;
        })} */}
        <Div p="xl">
          <Text fontSize="3xl" fontFamily="Roboto-Bold" color="text" my="lg">
            Les plus gros succès de Bearflix
          </Text>
          <MoviesCategory categoryId={1} />

          <Text fontSize="3xl" fontFamily="Roboto-Bold" color="text" my="lg">
            Programmes originaux Bearflix
          </Text>
          <MoviesCategory categoryId={2} />

          <Text fontSize="3xl" fontFamily="Roboto-Bold" color="text" my="lg">
            Top 10
          </Text>
          <MoviesCategory categoryId={3} />

          <Text fontSize="3xl" fontFamily="Roboto-Bold" color="text" my="lg">
            Revoir
          </Text>
          <MoviesCategory categoryId={4} />

          <Text fontSize="3xl" fontFamily="Roboto-Bold" color="text" my="lg">
            Nouveautés
          </Text>
          <MoviesCategory categoryId={5} />
        </Div>
      </Animated.ScrollView>
    </Div>
  );
};

export default Home;
