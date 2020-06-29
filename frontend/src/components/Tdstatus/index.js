import React from 'react';
import PropTypes from 'prop-types';

import { Container, Status } from './styles';

function Tdstatus({ start, end, cancel }) {
  if (cancel !== null) {
    return (
      <Container>
        <Status tus color="#ec928f">
          CANCELADA
        </Status>
      </Container>
    );
  }
  if (end !== null) {
    return (
      <Container>
        <Status tus color="#43fbc9">
          ENTREGUE
        </Status>
      </Container>
    );
  }
  if (start === null && end === null && cancel === null) {
    return (
      <Container>
        <Status tus color="#f4f4cb">
          PENDENTE
        </Status>
      </Container>
    );
  }
  if (start !== null && end === null && cancel === null) {
    return (
      <Container>
        <Status tus color="#6ac3f6">
          RETIRADA
        </Status>
      </Container>
    );
  }
}

export default Tdstatus;

Tdstatus.propTypes = {
  start: PropTypes.string,
  end: PropTypes.string,
  cancel: PropTypes.string,
};
