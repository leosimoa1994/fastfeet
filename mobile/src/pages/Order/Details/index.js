import React, { useState, useMemo } from 'react';
import { format, parseISO } from 'date-fns';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Background from '~/components/Backgroud';
import api from '~/services/api';

import {
  OrderInfo,
  HeaderOrder,
  Title,
  Info,
  InfoTitle,
  InfoDetails,
  Bottom,
  InfoBottom,
  StatusInfo,
  Buttons,
  Button,
  ButtonText,
  ButtonMiddle,
} from './styles';

const Details = ({ navigation, route }) => {
  const { order } = route.params;
  const [status, setStatus] = useState('');
  const [buttonText, setButtonText] = useState('');

  if (order.start_date === null && !status) {
    setStatus('Aguardar retirada');
    setButtonText('Fazer Retirada');
  } else if (order.start_date !== null && order.end_date === null && !status) {
    setStatus('Pendente');
    setButtonText('Confirmar Entrega');
  } else if (order.start_date !== null && order.end_date !== null && !status) {
    setStatus('Entregue');
    setButtonText('Entregue');
  }

  const orderFormat = {
    ...order,
    start_dateFormated: order.start_date
      ? format(parseISO(order.start_date), 'dd/MM/yyyy')
      : ' - - / - - / - - ',
    end_dateFormated: order.end_date
      ? format(parseISO(order.end_date), 'dd/MM/yyyy')
      : ' - - / - - / - - ',
  };

  async function handleConfirm() {
    if (order.start_date === null) {
      await api.put(`/deliveries/${order.id}/start`);
      navigation.navigate('Dashboard');
    } else if (order.start_date !== null && order.end_date === null) {
      navigation.navigate('Confirm');
    }
  }

  return (
    <Background>
      <OrderInfo>
        <HeaderOrder>
          <FontAwesome5 name="truck" size={20} color="#7d40ea" />
          <Title>Informações da entrega</Title>
        </HeaderOrder>
        <Info>
          <InfoTitle>DESTINATÁRIO</InfoTitle>
          <InfoDetails>{orderFormat.recipient.name}</InfoDetails>
          <InfoTitle>ENDEREÇO DE ENTREGA</InfoTitle>
          <InfoDetails>
            {orderFormat.recipient.street} nº{orderFormat.recipient.number},{' '}
            {orderFormat.recipient.complement}, {orderFormat.recipient.cep}{' '}
            {orderFormat.recipient.city}
          </InfoDetails>
          <InfoTitle>PRODUTO</InfoTitle>
          <InfoDetails>{orderFormat.product}</InfoDetails>
        </Info>
      </OrderInfo>
      <StatusInfo>
        <HeaderOrder>
          <Ionicons name="md-calendar" size={20} color="#7d40ea" />
          <Title>Informações da entrega</Title>
        </HeaderOrder>
        <Info>
          <InfoTitle>STATUS</InfoTitle>
          <InfoDetails>{status}</InfoDetails>
          <Bottom>
            <InfoBottom>
              <InfoTitle>DATA DE RETIRADA</InfoTitle>
              <InfoDetails>{orderFormat.start_dateFormated}</InfoDetails>
            </InfoBottom>
            <InfoBottom>
              <InfoTitle>DATA DE ENTREGA</InfoTitle>
              <InfoDetails>{orderFormat.end_dateFormated}</InfoDetails>
            </InfoBottom>
          </Bottom>
        </Info>
      </StatusInfo>
      <Buttons>
        <Button onPress={() => navigation.navigate('AddProblem')}>
          <Ionicons name="ios-close-circle-outline" size={26} color="#e74040" />
          <ButtonText>Informar Problema</ButtonText>
        </Button>
        <ButtonMiddle
          onPress={() => {
            navigation.navigate('ListProblems');
          }}
        >
          <Ionicons
            name="ios-information-circle-outline"
            size={26}
            color="#e7ba40"
          />
          <ButtonText>Visualizar Problema</ButtonText>
        </ButtonMiddle>
        <Button onPress={handleConfirm}>
          <Ionicons
            name="ios-information-circle-outline"
            size={26}
            color="#7d40ea"
          />
          <ButtonText>{buttonText}</ButtonText>
        </Button>
      </Buttons>
    </Background>
  );
};

export default Details;
