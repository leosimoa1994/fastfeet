import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import FormHeader from '~/components/FormHeader';

import history from '~/services/history';
import api from '~/services/api';

import {
  Container,
  Body,
  SecondLine,
  SecondLineFirst,
  SecondLineSecond,
  LastLine,
} from '~/styles/form';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é necessáio'),
  street: Yup.string().required('A rua é necessáio'),
  number: Yup.number().required('O número é necessáio'),
  complement: Yup.string().required('O complemento é necessáio'),
  city: Yup.string().required('A cidade é necessáio'),
  state: Yup.string().required('A estado é necessáio'),
  cep: Yup.string().required('A codigo de postal é necessáio'),
});

function EditRecipients({ location }) {
  const { recipient } = location.state;
  async function handleSubmit(data) {
    try {
      await api.put(`recipients/${recipient.id}`, data);
      toast.success('Destinatário salvo com sucesso!');
      history.push('/recipients');
    } catch (err) {
      toast.error(
        'Problema ao salvar destinatário, tente novamente mais tarde!'
      );
    }
  }

  function handleGoBack() {
    history.goBack();
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit} initialData={recipient} schema={schema}>
        <FormHeader title="Editar Destinatário" action={handleGoBack} />

        <Body>
          <p>Nome</p>
          <Input type="text" name="name" placeholder="Ex: Exemplo" />
          <SecondLine>
            <SecondLineFirst>
              <p>Rua</p>
              <Input
                type="text"
                name="street"
                placeholder="Ex: Rua do exemplo"
              />
            </SecondLineFirst>
            <SecondLineSecond>
              <div>
                <p>Número</p>
                <Input type="number" name="number" placeholder="Ex: 20" />
              </div>
              <div>
                <p>Complemento</p>
                <Input
                  type="text"
                  name="complement"
                  placeholder="Ex: 2º andar"
                />
              </div>
            </SecondLineSecond>
          </SecondLine>
          <LastLine>
            <div>
              <p>Cidade</p>
              <Input type="text" name="city" placeholder="Ex: Lisboa" />
            </div>
            <div>
              <p>Estado</p>
              <Input type="text" name="state" placeholder="Ex: Lisboa" />
            </div>
            <div>
              <p>Código Posta</p>
              <Input type="text" name="cep" placeholder="Ex: 1200-800" />
            </div>
          </LastLine>
        </Body>
      </Form>
    </Container>
  );
}

export default EditRecipients;

EditRecipients.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      recipient: PropTypes.shape().isRequired,
    }).isRequired,
  }).isRequired,
};
