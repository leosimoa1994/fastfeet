import React from 'react';
import { format, parseISO } from 'date-fns';
import PropTypes from 'prop-types';

import { Container, ModalView, Datas } from './styles';

function Modal({ visibleModal, setVisibleModal, type, data }) {
  console.tron.log(data);

  if (type === 'order' && data) {
    const datesFormated = {
      start: data.start_date ? format(parseISO(data.start_date), 'dd/MM/yyyy') : '- - / - - / - - ',
      end: data.end_date ? format(parseISO(data.end_date), 'dd/MM/yyyy') : '- - / - - / - - ',
    };
    return (
      <Container
        visibleModal={visibleModal}
        onClick={() => setVisibleModal(false)}
      >
        <ModalView>
          <strong>Informação da encomenda:</strong>
          <p>
            {data.recipient.street} nº{data.recipient.number}
          </p>
          <p>{data.recipient.complement}</p>
          <p>
            {data.recipient.cep} {data.recipient.city}
          </p>

          <strong>Datas:</strong>
          <Datas>
            <strong>Retirada: </strong>
            <span>{datesFormated.start}</span>
          </Datas>
          <Datas>
            <strong>Entrega: </strong>
            <span>{datesFormated.end}</span>
          </Datas>
          <strong>Assinatura do destinatário:</strong>
          <img
            src={
              data.signature
                ? data.signature.url
                : 'https://api.adorable.io/avatars/50/abott@adorable.png'
            }
            alt="signature"
          />
        </ModalView>
      </Container>
    );
  }
  if (type === 'problem' && data) {
    return (
      <Container
        visibleModal={visibleModal}
        onClick={() => setVisibleModal(false)}
      >
        <ModalView>
          <strong>PROBLEMA:</strong>
          <p>{data.description}</p>
        </ModalView>
      </Container>
    );
  }
  return (
    <Container>
      <ModalView />
    </Container>
  );
}

export default Modal;

Modal.propTypes = {
  visibleModal: PropTypes.bool.isRequired,
  setVisibleModal: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  data: PropTypes.shape().isRequired,
};
