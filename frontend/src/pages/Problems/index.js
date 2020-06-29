import React, { useState, useEffect } from 'react';
import { MdDelete } from 'react-icons/md';
import { BsFillEyeFill } from 'react-icons/bs';
import { toast } from 'react-toastify';

import Button from '~/components/Window/Button';
import api from '~/services/api';

import HeaderTop from '~/components/HeaderTop';
import Tdbody from '~/components/Tdbody';
import Window from '~/components/Window';
import Modal from '~/components/Modal';

import { Container, TableOrder, Action } from '~/styles/table';

function Problems() {
  const [problems, setProblems] = useState([]);
  const [visibleModal, setVisibleModal] = useState(false);
  const [dataType, setDataType] = useState({});

  useEffect(() => {
    async function loadDeliverymans() {
      const response = await api.get('/problems');
      setProblems(response.data);
    }
    loadDeliverymans();
  }, []);

  function handleDataType(data) {
    setDataType(data);
    setVisibleModal(true);
  }

  async function handleDeleteDeliveryman(id) {
    const confirm = window.confirm(
      'Tem a certeza que quer remover esta encomenda!'
    );

    if (!confirm) {
      return toast.warning('Cancelou a remoção da encomenda');
    }

    try {
      await api.delete(`/problem/${id}/cancel-delivery`);

      return toast.success('Encomenda removida com sucesso!');
    } catch (error) {
      return toast.error(
        'Problema ao remover encomenda, tente novamente mais tarde!'
      );
    }
  }

  return (
    <Container>
      <HeaderTop title="Gestão de Problemas" action={null} />
      <TableOrder>
        <thead>
          <tr>
            <th>Ecomenda</th>
            <th>Problema</th>
            <Action>Ações</Action>
          </tr>
        </thead>
        <tbody>
          {problems.map((problem) => (
            <tr key={String(problem.id)}>
              <Tdbody info={`#${problem.delivery_id}`} type="text" />
              <Tdbody info={problem.description} type="text" />
              <Window>
                <>
                  <Button
                    icon={<BsFillEyeFill color="#7d40ea" size={20} />}
                    text="Visualizar"
                    color="#7d40ea"
                    action={() => handleDataType(problem)}
                  />
                  <Button
                    icon={<MdDelete color="#ff6666" size={20} />}
                    text="Editar"
                    color="#ff6666"
                    action={() => handleDeleteDeliveryman(problem.delivery_id)}
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
        type="problem"
        data={dataType}
      />
    </Container>
  );
}

export default Problems;
