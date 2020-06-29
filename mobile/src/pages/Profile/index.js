import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { format, parseISO } from 'date-fns';

import { signOut } from '~/store/modules/auth/actions';
import {
  Container,
  Avatar,
  Info,
  Data,
  Title,
  Text,
  Button,
  ButtonText,
} from './styles';

const Profile = () => {
  const dispatch = useDispatch();

  const deliveryman = useSelector((state) => state.user.deliveryman);

  const dataFormated = format(parseISO(deliveryman.createdAt), 'dd/MM/yyyy');

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Avatar
        source={{
          uri: deliveryman.avatar
            ? `http://192.168.1.118:3333/files/${deliveryman.avatar.path}`
            : `https://api.adorable.io/avatar/50/${deliveryman.name}.png`,
        }}
      />
      <Info>
        <Data>
          <Title>Nome completo</Title>
          <Text>{deliveryman.name}</Text>
        </Data>
        <Data>
          <Title>Email</Title>
          <Text>{deliveryman.email}</Text>
        </Data>
        <Data>
          <Title>Data de criação</Title>
          <Text>{dataFormated}</Text>
        </Data>
        <Button onPress={handleLogout}>
          <ButtonText>Logout</ButtonText>
        </Button>
      </Info>
    </Container>
  );
};

export default Profile;
