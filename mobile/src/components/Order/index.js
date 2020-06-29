import React from 'react';
import { format, parseISO } from 'date-fns';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {
  Container,
  Body,
  Top,
  Title,
  Middle,
  Circule,
  Line,
  MiddleInfo,
  Text,
  Bottom,
  BottomInfo,
  BottomTitle,
  BottomText,
  BottomLink,
  BottomLinkText,
} from './styles';

const Order = ({ order, navigate }) => {
  const dateFormat = format(parseISO(order.created_at), 'dd/MM/yyyy');

  return (
    <Container>
      <Body>
        <Top>
          <FontAwesome5 name="truck" size={24} color="#7d40ea" />
          <Title>Encomenda {order.id} </Title>
        </Top>
        <Middle>
          <Circule color />
          <Line />
          <Circule color={!!order.start_date} />
          <Line />
          <Circule color={!!order.end_date} />
        </Middle>
        <MiddleInfo>
          <Text>Aguardando Retirada</Text>
          <Text>Retirada</Text>
          <Text>Entregue</Text>
        </MiddleInfo>
        <Bottom>
          <BottomInfo>
            <BottomTitle>Data</BottomTitle>
            <BottomText>{dateFormat}</BottomText>
          </BottomInfo>
          <BottomInfo>
            <BottomTitle>Cidade</BottomTitle>
            <BottomText>{order.recipient.city}</BottomText>
          </BottomInfo>
          <BottomInfo>
            <BottomLink onPress={navigate}>
              <BottomLinkText>Ver detalhes</BottomLinkText>
            </BottomLink>
          </BottomInfo>
        </Bottom>
      </Body>
    </Container>
  );
};

export default Order;
