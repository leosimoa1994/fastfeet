import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { SelectHeader, SelectBody } from './styles';

import api from '~/services/api';
import AsyncSelect from './AsyncSelect';

function Select({
  handleSelectedRecipient,
  handleSelectedDeliveryman,
  recipientSelected = null,
  deliverymanSelected = null,
}) {
  const [recipients, setRecipients] = useState([]);
  const [deliverymans, setDeliverymans] = useState([]);

  useEffect(() => {
    async function getRecipients() {
      const response = await api.get('recipients');

      const data = response.data.map((r) => {
        return {
          value: r.id,
          label: r.name,
        };
      });
      setRecipients(data);
    }
    getRecipients();
  }, []);

  useEffect(() => {
    async function getDeliveryman() {
      const response = await api.get('deliverymans');

      const data = response.data.map((r) => {
        return {
          value: r.id,
          label: r.name,
        };
      });
      setDeliverymans(data);
    }
    getDeliveryman();
  }, []);

  return (
    <SelectHeader>
      <SelectBody>
        <p>Destinatário</p>
        <AsyncSelect
          data={recipients}
          placeholderText="Escolha um destinatário"
          action={handleSelectedRecipient}
          defaultValue={recipientSelected || null}
        />
      </SelectBody>
      <SelectBody>
        <p>Entregador</p>
        <AsyncSelect
          data={deliverymans}
          placeholderText="Escolha um entregador"
          action={handleSelectedDeliveryman}
          defaultValue={deliverymanSelected || null}
        />
      </SelectBody>
    </SelectHeader>
  );
}

export default Select;

Select.propTypes = {
  handleSelectedRecipient: PropTypes.func.isRequired,
  handleSelectedDeliveryman: PropTypes.func.isRequired,
  recipientSelected: PropTypes.shape().isRequired,
  deliverymanSelected: PropTypes.shape().isRequired,
};
