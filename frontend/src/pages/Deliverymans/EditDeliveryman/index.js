import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import FormHeader from '~/components/FormHeader';
import AvatarInput from '~/components/AvatarInput';

import history from '~/services/history';
import api from '~/services/api';

import { Container, Body } from '~/styles/form';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é necessáio'),
  email: Yup.string()
    .email('E-mail não é válido')
    .required('O e-mail é necessáio'),
});

function EditDeliveryman({ location }) {
  const { deliveryman } = location.state;
  const [file, setFile] = useState(deliveryman.avatar && deliveryman.avatar.id);

  async function handleSubmit(data) {
    const formData = {
      ...data,
      avatar_id: file,
    };
    try {
      console.tron.log(formData);
      await api.put(`/deliverymans/${deliveryman.deliveryman_id}`, formData);
      toast.success('Entregador criado com sucesso!');
      history.push('/deliverymans');
    } catch (error) {
      toast.success(
        'Problema ao criar o entregador, tente novamento mais tarde!'
      );
    }
  }

  function handleGoBack() {
    history.goBack();
  }

  return (
    <Container>
      <Form
        onSubmit={handleSubmit}
        initialData={{ name: deliveryman.name, email: deliveryman.email }}
        schema={schema}
      >
        <FormHeader title="Editar Entregador" action={handleGoBack} />

        <Body>
          <AvatarInput setFile={setFile} defaultValue={deliveryman.avatar} />

          <p>Nome</p>
          <Input type="text" name="name" placeholder="Ex: Exemplo" />
          <p>E-mail</p>
          <Input
            type="email"
            name="email"
            placeholder="Ex: exemplo@exemplo.pt"
          />
        </Body>
      </Form>
    </Container>
  );
}

export default EditDeliveryman;

EditDeliveryman.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      deliveryman: PropTypes.shape().isRequired,
    }).isRequired,
  }).isRequired,
};
