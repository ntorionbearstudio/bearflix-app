import React from 'react';
import {FlatList, TouchableNativeFeedback} from 'react-native-gesture-handler';
import {Text, Div, Image} from 'react-native-magnus';

const MovieCard = ({image, index}) => (
  <TouchableNativeFeedback>
    <Image
      h={120}
      w={85}
      ml={index > 0 ? 10 : 0}
      rounded={5}
      source={{
        uri: image,
      }}
    />
  </TouchableNativeFeedback>
);

const Home = () => {
  // const navigation = useNavigation();

  // const handleOpenAccount = () => navigation.navigate('Account');

  const movies = [
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1593642532400-2682810df593?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1593642532400-2682810df593?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 3,
      image:
        'https://images.unsplash.com/photo-1593642532400-2682810df593?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 4,
      image:
        'https://images.unsplash.com/photo-1593642532400-2682810df593?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 5,
      image:
        'https://images.unsplash.com/photo-1593642532400-2682810df593?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 6,
      image:
        'https://images.unsplash.com/photo-1593642532400-2682810df593?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    },
  ];

  return (
    <Div bg="body" h="100%" p="xl">
      <Text fontSize="3xl" fontFamily="Roboto-Bold" color="text" my="lg">
        Les plus gros succès de Bearflix
      </Text>
      <Div>
        <FlatList
          data={movies}
          renderItem={({item, index}) => (
            <MovieCard image={item.image} index={index} />
          )}
          keyExtractor={(item) => item.id}
          horizontal
        />
      </Div>

      <Text fontSize="3xl" fontFamily="Roboto-Bold" color="text" my="lg">
        Programmes originaux Bearflix
      </Text>
      <Text fontSize="3xl" fontFamily="Roboto-Bold" color="text" my="lg">
        Top 10
      </Text>
    </Div>
  );
};

export default Home;
