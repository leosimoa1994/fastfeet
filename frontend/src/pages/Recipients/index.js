import React, { useState, useEffect } from 'react';
import { MdEdit, MdDelete } from 'react-icons/md';
import { toast } from 'react-toastify';

import Button from '~/components/Window/Button';
import history from '~/services/history';
import api from '~/services/api';

import HeaderTop from '~/components/HeaderTop';
import Tdbody from '~/components/Tdbody';
import Window from '~/components/Window';

import { Container, TableOrder, Action } from '~/styles/table';

function Recipients() {
  const [recipients, setRecipients] = useState([]);

  useEffect(() => {
    async function loadRecipients() {
      const response = await api.get('/recipients');
      setRecipients(response.data);
    }
    loadRecipients();
  }, []);

  function handleAddRecipients() {
    history.push('/add_recipients');
  }

  async function handleDeleteRecipient(id) {
    const confirm = window.confirm(
      'Tem a certeza que quer remover esta encomenda!'
    );

    if (!confirm) {
      return toast.warning('Cancelou a remoção da encomenda');
    }

    try {
      await api.delete(`/recipients/${id}`);

      const newDeliverymans = recipients.filter((o) => o.id !== id);
      setRecipients(newDeliverymans);
      return toast.success('Encomenda removida com sucesso!');
    } catch (error) {
      return toast.error(
        'Problema ao remover encomenda, tente novamente mais tarde!'
      );
    }
  }

  return (
    <Container>
      <HeaderTop title="Gestão de Entregadores" action={handleAddRecipients} />
      <TableOrder>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Endereço</th>
            <Action>Ações</Action>
          </tr>
        </thead>
        <tbody>
          {recipients.map((recipient) => (
            <tr key={String(recipient.id)}>
              <Tdbody info={`#${recipient.id}`} type="text" />
              <Tdbody info={recipient.name} type="text" />
              <Tdbody
                info={`${recipient.street} nº${recipient.number}, ${recipient.complement} ${recipient.cep} ${recipient.city}`}
                type="text"
              />
              <Window>
                <>
                  <Button
                    icon={<MdEdit color="#7d40ea" size={20} />}
                    text="Editar"
                    color="#7d40ea"
                    action={() =>
                      history.push({
                        pathname: '/edit_recipients',
                        state: {
                          recipient: {
                            id: recipient.id,
                            name: recipient.name,
                            street: recipient.street,
                            number: recipient.number,
                            complement: recipient.complement,
                            city: recipient.city,
                            state: recipient.state,
                            cep: recipient.cep,
                          },
                        },
                      })
                    }
                  />
                  <Button
                    icon={<MdDelete color="#ff6666" size={20} />}
                    text="Editar"
                    color="#ff6666"
                    action={() => handleDeleteRecipient(recipient.id)}
                  />
                </>
              </Window>
            </tr>
          ))}
        </tbody>
      </TableOrder>
    </Container>
  );
}

export default Recipients;
