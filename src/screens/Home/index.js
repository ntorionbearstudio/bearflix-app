import React from 'react';
import {ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Text, Div} from 'react-native-magnus';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';
import {whiteColor} from '../../../constants/themes';
import MoviesCategory from './_partials/MoviesCategory';

const mainImage =
  'https://images.unsplash.com/photo-1588167056840-13caf6e4562a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTY3NDh8MHwxfHNlYXJjaHwxfHxiZWFyfGVufDB8fHx8MTYxNjQ0ODE0MA&ixlib=rb-1.2.1&q=80&w=1080';

const Home = () => {
  return (
    <Div bg="body" h="100%">
      <ScrollView>
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
      </ScrollView>
    </Div>
  );
};

export default Home;
