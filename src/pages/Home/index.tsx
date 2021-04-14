import React from 'react';
import { Image, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Button from '../../components/Button';
import { Container } from '../../components/Containers';

const Home: React.FC = () => {
  const navigation = useNavigation();

  const handleNewPage = (param: string): void => {
    if (param === 'Pão de queijo') {
      navigation.navigate('Receita1');
    } else if (param === 'Petiti') {
      navigation.navigate('Receita2');
    }
  };

  return (
    <Container style={{ marginTop: 60 }}>
      <Image
        source={require('../../assets/minha-foto.jpeg')}
        style={{ width: 150, height: 150, borderRadius: 75, marginBottom: 20 }}
      />

      <Text>Yuri Silva - 21853</Text>
      <Text>Receitas da tia Betina</Text>

      <Text>RECEITA PÃO DE QUEIJO MARAVILHOSA</Text>

      <Button
        onPress={() => {
          handleNewPage('Pão de queijo');
        }}
      >
        Ver está receita
      </Button>
      <Text style={{ marginTop: 20 }}>RECEITA PETITIGATUE MARAVILHOSA</Text>

      <Button
        onPress={() => {
          handleNewPage('Petiti');
        }}
      >
        Ver está receita
      </Button>
    </Container>
  );
};

export default Home;
