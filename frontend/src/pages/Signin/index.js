import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';
import { Container, Login } from './styles';

import logo from '~/assets/logo.png';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('E-mail não é válido')
    .required('O e-mail é obrigatorio'),
  password: Yup.string().required('A senha é obrigatoria'),
});

function Signin() {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <Container>
      <Login>
        <img src={logo} alt="FastFeet" />
        <Form schema={schema} onSubmit={handleSubmit}>
          <strong>SEU E-MAIL</strong>
          <Input name="email" type="email" placeholder="exemplo@email.com" />
          <strong>SEU SENHA</strong>
          <Input name="password" type="password" placeholder="**********" />

          <button type="submit">
            {loading ? '...Carregando' : 'Entrar no sistema'}
          </button>
        </Form>
      </Login>
    </Container>
  );
}

export default Signin;
