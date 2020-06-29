import React, { useState, useEffect } from 'react';
import { BsFillEyeFill } from 'react-icons/bs';
import { MdEdit, MdDelete } from 'react-icons/md';
import { toast } from 'react-toastify';

import Button from '~/components/Window/Button';
import history from '~/services/history';
import api from '~/services/api';

import HeaderTop from '~/components/HeaderTop';
import Tdbody from '~/components/Tdbody';
import Tdstatus from '~/components/Tdstatus';
import Window from '~/components/Window';
import Modal from '~/components/Modal';

import { Container, TableOrder, Action } from '~/styles/table';

function Order() {
  const [orders, setOrders] = useState([]);
  const [visibleModal, setVisibleModal] = useState(false);
  const [dataType, setDataType] = useState(null);

  useEffect(() => {
    async function loadOrders() {
      const response = await api.get('/orders');

      setOrders(response.data);
    }
    loadOrders();
  }, []);

  function handleAddorder() {
    history.push('/addorder');
  }

  function handleDataType(data) {
    setDataType(data);
    setVisibleModal(true);
  }

  async function handleDeleteOrder(id) {
    const confirm = window.confirm(
      'Tem a certeza que quer remover esta encomenda!'
    );

    if (!confirm) {
      return toast.warning('Cancelou a remoção da encomenda');
    }

    try {
      await api.delete(`/orders/${id}`);

      const newOrders = orders.filter((o) => o.id !== id);
      setOrders(newOrders);
      return toast.success('Encomenda removida com sucesso!');
    } catch (error) {
      return toast.error(
        'Problema ao remover encomenda, tente novamente mais tarde!'
      );
    }
  }

  return (
    <Container>
      <HeaderTop title="Gestão de Encomendas" action={handleAddorder} />
      <TableOrder>
        <thead>
          <tr>
            <th>ID</th>
            <th>Destinatário</th>
            <th>Entregador</th>
            <th>Cidade</th>
            <th>Status</th>
            <Action>Ações</Action>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={String(order.id)}>
              <Tdbody info={`#${index + 1}`} type="text" />

              <Tdbody info={order.recipient.name} type="text" />
              <Tdbody
                info={order.deliveryman.name}
                type="duble"
                avatar={order.deliveryman.avatar}
              />
              <Tdbody info={order.recipient.city} type="text" />
              <Tdstatus
                start={order.start_date}
                end={order.end_date}
                cancel={order.cancelad_at}
              />
              <Window>
                <>
                  <Button
                    icon={<BsFillEyeFill color="#7d40ea" size={20} />}
                    text="Visualizar"
                    color="#7d40ea"
                    action={() => handleDataType(order)}
                  />
                  <Button
                    icon={<MdEdit color="#7d40ea" size={20} />}
                    text="Editar"
                    color="#7d40ea"
                    action={() =>
                      history.push({
                        pathname: '/editorder',
                        state: {
                          order: {
                            order_id: order.id,
                            product: order.product,
                            recipient_id: order.recipient.id,
                            deliveryman_id: order.deliveryman.id,
                          },
                        },
                      })
                    }
                  />
                  <Button
                    icon={<MdDelete color="#ff6666" size={20} />}
                    text="Editar"
                    color="#ff6666"
                    action={() => handleDeleteOrder(order.id)}
                  />
                </>
              </Window>
            </tr>
          ))}
        </tbody>
      </TableOrder>
      <Modal
        visibleModal={visibleModal}
        setVisibleModal={setVisibleModal}
        type="order"
        data={dataType}
      />
    </Container>
  );
}

export default Order;
