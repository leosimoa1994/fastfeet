import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Logo from '~/assets/fastfeet-logo.svg';

import { signInRequest } from '~/store/modules/auth/actions';

import { Container, Input, SubmitButton, Text } from './styles';

const Signin = () => {
  const dispatch = useDispatch();

  const [id, setId] = useState('');

  function handleSignin() {
    dispatch(signInRequest(id));
  }

  return (
    <Container>
      <Logo width={250} height={50} />
      <Input
        placeholder="Informe seu ID de cadastro"
        value={id}
        onChangeText={setId}
      />
      <SubmitButton onPress={handleSignin}>
        <Text>Entrar no sistema</Text>
      </SubmitButton>
    </Container>
  );
};

export default Signin;
