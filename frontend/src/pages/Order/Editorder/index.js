import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import * as Yup from 'yup';

import FormHeader from '~/components/FormHeader';
import Select from '~/components/Select';

import history from '~/services/history';

import api from '~/services/api';

import { Container, Body } from '~/styles/form';

const schema = Yup.object().shape({
  product: Yup.string().required('O nome do produto é necessáio'),
});

function Editorder({ location }) {
  const { order } = location.state;

  const [recipientSelected, setRecipientSelected] = useState({
    value: order.recipient_id,
    label: '',
  });
  const [deliverymanSelected, setDeliverymanSelected] = useState({
    value: order.deliveryman_id,
    label: '',
  });

  function handleSelectedRecipient(selectedOptions) {
    setRecipientSelected(selectedOptions);
  }

  function handleSelectedDeliveryman(selectedOptions) {
    setDeliverymanSelected(selectedOptions);
  }

  function handleGoBack() {
    history.goBack();
  }

  async function handleSubmit(data) {
    const formData = {
      product: data.product,
      recipient_id: recipientSelected.value,
      deliveryman_id: deliverymanSelected.value,
    };

    try {
      await api.put(`orders/${order.order_id}`, formData);
      toast.success('Encomenda salva com sucesso!');
      history.push('/order');
    } catch (err) {
      toast.error('Problema a salvar a encomanda, tente novamente mais tarde!');
    }
  }

  return (
    <Container>
      <Form
        onSubmit={handleSubmit}
        initialData={{ product: order.product }}
        schema={schema}
      >
        <FormHeader title="Editar Encomenda" action={handleGoBack} />

        <Body>
          <Select
            handleSelectedRecipient={handleSelectedRecipient}
            handleSelectedDeliveryman={handleSelectedDeliveryman}
            recipientSelected={recipientSelected}
            deliverymanSelected={deliverymanSelected}
          />
          <p>Nome do produto</p>
          <Input type="text" name="product" placeholder="teste" />
        </Body>
      </Form>
    </Container>
  );
}

export default Editorder;

Editorder.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      order: PropTypes.shape().isRequired,
    }).isRequired,
  }).isRequired,
};
