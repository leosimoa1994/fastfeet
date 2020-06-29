import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { signOut } from '~/store/modules/auth/actions';

import { Container, Avatar, Info, Welcome, Name, Logout } from './styles';

const Header = () => {
  const dispatch = useDispatch();

  const deliveryman = useSelector((state) => state.user.deliveryman);

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
        <Welcome>Bem vindo de volta,</Welcome>
        <Name>{deliveryman.name}</Name>
      </Info>
      <Logout onPress={handleLogout}>
        <Icon name="input" size={25} color="#e74040" />
      </Logout>
    </Container>
  );
};

export default Header;
