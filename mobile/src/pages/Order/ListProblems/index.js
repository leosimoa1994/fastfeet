import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';

import api from '~/services/api';

import Background from '~/components/Backgroud';

import { Container, Title, List, Problem, Text, Date } from './styles';

const ListProblems = ({ route }) => {
  const [problems, setProblems] = useState();

  const { order } = route.params;

  useEffect(() => {
    async function loadProblems() {
      const response = await api.get(`/delivery/${order.id}/problems`);

      setProblems(
        response.data.map((problem) => ({
          ...problem,
          dateFormated: format(parseISO(problem.createdAt), 'dd/MM/yyyy'),
        }))
      );
    }
    loadProblems();
  }, [order.id]);

  return (
    <Background>
      <Container>
        <Title>Encomenda {order.id}</Title>
        <List
          data={problems}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item: problem }) => (
            <Problem>
              <Text>{problem.description}</Text>
              <Date>{problem.dateFormated}</Date>
            </Problem>
          )}
        />
      </Container>
    </Background>
  );
};

export default ListProblems;
