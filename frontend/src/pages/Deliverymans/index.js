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

function Deliverymans() {
  const [deliverymans, setDeliverymans] = useState([]);

  useEffect(() => {
    async function loadDeliverymans() {
      const response = await api.get('/deliverymans');
      setDeliverymans(response.data);
    }
    loadDeliverymans();
  }, []);

  function handleAddDeliveryman() {
    history.push('/add_deliverymans');
  }

  async function handleDeleteDeliveryman(id) {
    const confirm = window.confirm(
      'Tem a certeza que quer remover esta encomenda!'
    );

    if (!confirm) {
      return toast.warning('Cancelou a remoção da encomenda');
    }

    try {
      await api.delete(`/deliverymans/${id}`);

      const newDeliverymans = deliverymans.filter((o) => o.id !== id);
      setDeliverymans(newDeliverymans);
      return toast.success('Encomenda removida com sucesso!');
    } catch (error) {
      return toast.error(
        'Problema ao remover encomenda, tente novamente mais tarde!'
      );
    }
  }

  return (
    <Container>
      <HeaderTop title="Gestão de Entregadores" action={handleAddDeliveryman} />
      <TableOrder>
        <thead>
          <tr>
            <th>ID</th>
            <th>Foto</th>
            <th>Nome</th>
            <th>E-mail</th>
            <Action>Ações</Action>
          </tr>
        </thead>
        <tbody>
          {deliverymans.map((deliveryman) => (
            <tr key={String(deliveryman.id)}>
              <Tdbody info={`#${deliveryman.id}`} type="text" />
              <Tdbody
                info={deliveryman.name}
                type="image"
                avatar={deliveryman.avatar}
              />
              <Tdbody info={deliveryman.name} type="text" />
              <Tdbody info={deliveryman.email} type="text" />
              <Window>
                <>
                  <Button
                    icon={<MdEdit color="#7d40ea" size={20} />}
                    text="Editar"
                    color="#7d40ea"
                    action={() =>
                      history.push({
                        pathname: '/edit_deliverymans',
                        state: {
                          deliveryman: {
                            deliveryman_id: deliveryman.id,
                            name: deliveryman.name,
                            email: deliveryman.email,
                            avatar: deliveryman.avatar,
                          },
                        },
                      })
                    }
                  />
                  <Button
                    icon={<MdDelete color="#ff6666" size={20} />}
                    text="Editar"
                    color="#ff6666"
                    action={() => handleDeleteDeliveryman(deliveryman.id)}
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

export default Deliverymans;
