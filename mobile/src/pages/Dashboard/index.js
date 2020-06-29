import React, { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';

import Header from '~/components/Header';
import Order from '~/components/Order';

import api from '~/services/api';

import {
  Container,
  OrderList,
  Info,
  Title,
  Buttons,
  Button,
  ButtonText,
} from './styles';

const Dashboard = ({ navigation }) => {
  const isFocused = useIsFocused();

  const [focus, setFocus] = useState({
    pendetes: true,
    entregues: false,
  });
  const [orders, setOrders] = useState([]);

  const deliveryman_id = useSelector((state) => state.user.deliveryman.id);

  async function loadOrders(url_state) {
    const url = url_state
      ? `deliveries/${deliveryman_id}`
      : `deliveries/${deliveryman_id}/deliveries`;

    const response = await api.get(url);

    setOrders(response.data);
  }
  useEffect(() => {
    if (isFocused) {
      loadOrders(focus.pendetes);
    }
  }, [focus.pendetes, isFocused]);

  return (
    <Container>
      <Header />
      <Info>
        <Title>Entregas</Title>
        <Buttons>
          <Button
            onPress={() => setFocus({ pendetes: true, entregues: false })}
          >
            <ButtonText focus={focus.pendetes}>Pendentes</ButtonText>
          </Button>
          <Button
            onPress={() => setFocus({ pendetes: false, entregues: true })}
          >
            <ButtonText focus={focus.entregues}>Entregues</ButtonText>
          </Button>
        </Buttons>
      </Info>
      <OrderList
        data={orders.orders}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <Order
            order={item}
            navigate={() =>
              navigation.navigate('Order', {
                order: item,
              })
            }
          />
        )}
      />
    </Container>
  );
};

export default Dashboard;
