import React, { useState } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native';

import { Container, Input } from '../../components/Containers';
import Button from '../../components/Button';

// import { Container } from './styles';
// choco -> 24g
// manteiga -> 20g
// ovo -> 0,4
// açucar -> 0,05
// colher de farinha -> 0,4

const Receita2: React.FC = () => {
  const [search, setSearch] = useState('');
  const [choco, setChoco] = useState(0);
  const [manteiga, setManteiga] = useState(0);
  const [ovo, setOvo] = useState(0);
  const [acucar, setAcucar] = useState(0);
  const [farinha, setFarinha] = useState(0);

  const handleSearch = (): void => {
    if (search !== '') {
      const calcChoco = Number(search) * 24;
      const calcManteiga = Number(search) * 20;
      const calcOvos = Number(search) * 0.4;
      const calcAcucar = Number(search) * 0.05;
      const calcFarinha = Number(search) * 0.4;

      setChoco(calcChoco);
      setManteiga(calcManteiga);
      setOvo(calcOvos.toFixed(2));
      setAcucar(calcAcucar.toFixed(2));
      setFarinha(calcFarinha.toFixed(2));
    }
  };

  return (
    <Container>
      <Input
        value={search}
        onChangeText={(text) => {
          setSearch(text);
        }}
        placeholder="Digite quantos petitigato quer fazer"
        keyboardType="numeric"
      />
      <Button
        onPress={() => {
          handleSearch();
        }}
      >
        VER RECEITA
      </Button>
      {choco !== 0 ? (
        <>
          <Text style={{ marginTop: 20 }}>
            {`${choco} g de chocolate meio amargo`}
          </Text>
          <Text>{`${manteiga} g de manteiga`}</Text>
          <Text>{`${ovo} ovos`}</Text>
          <Text>{`${acucar} xicara (chá) de açucar`}</Text>
          <Text>{`${farinha} colheres (sopa) de farinha de trigo`}</Text>
        </>
      ) : null}
    </Container>
  );
};

export default Receita2;
