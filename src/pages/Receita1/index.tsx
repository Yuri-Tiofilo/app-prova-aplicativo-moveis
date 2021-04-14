import React, { useState } from 'react';
import { Text } from 'react-native';

import { Container, Input } from '../../components/Containers';
import Button from '../../components/Button';

const Receita1: React.FC = () => {
  const [search, setSearch] = useState('');
  const [resultPolvilho, setResultPolvilho] = useState(0);
  const [resultAgua1, setResultAgua1] = useState(0);
  const [resultLeite, setResultLeite] = useState(0);
  const [resultLeiteFrio, setResultLeiteFrio] = useState(0);
  const [resultOleo, setResultOleo] = useState(0);
  const [resultSal, setResultSal] = useState(0);
  const [resultOvo, setResultOvo] = useState(0);
  const [resultQueijo, setResultQueijo] = useState(0);

  const calculate = (): void => {
    if (search !== '') {
      const resultPovilho = Number(search) * 0.033333 * 1000; // polvilho
      const resultAgua = Number(search) * 0.066667; // agua
      const resultLeiteFrioCalc = Number(search) * 0.016667; // leite frio
      const resultLeiteCalc = Number(search) * 0.05; // leite
      const resultOleoCalc = Number(search) * 0.03333; // oleo
      const resultSalCalc = Number(search) * 0.03333; // sal
      const resultOvoCalc = Number(search) * 0.1; // ovo
      const resultQueijoCalc = Number(search) * 3.33333; // queijo

      setResultPolvilho(Math.round(resultPovilho));
      setResultAgua1(Math.round(resultAgua));
      setResultLeite(resultLeiteCalc.toFixed(1));
      setResultLeiteFrio(resultLeiteFrioCalc.toFixed(1));
      setResultOleo(resultOleoCalc.toFixed(1));
      setResultSal(resultSalCalc.toFixed(1));
      setResultOvo(Math.round(resultOvoCalc));
      setResultQueijo(Math.round(resultQueijoCalc));
    }
  };

  return (
    <Container>
      <Input
        value={search}
        onChangeText={(text) => {
          setSearch(text);
        }}
        placeholder="Digite o numero de pão de queijo"
        keyboardType="numeric"
      />
      <Button
        onPress={() => {
          calculate();
        }}
      >
        VER RECEITA
      </Button>
      {resultPolvilho !== 0 ? (
        <>
          <Text style={{ marginTop: 20 }}>
            {`${resultPolvilho} (g)Polvilho`}
          </Text>
          <Text>{`${resultAgua1} Copos de água`}</Text>
          <Text>{`${resultLeiteFrio} leite frio`}</Text>
          <Text>{`${resultLeite} de leite`}</Text>
          <Text>{`${resultOleo} copo de óleo`}</Text>
          <Text>{`${resultOvo} ovos`}</Text>
          <Text>{`${resultSal} colher de sal`}</Text>
          <Text>{`${resultQueijo} (g) de Queijo`}</Text>
        </>
      ) : null}
    </Container>
  );
};

export default Receita1;
