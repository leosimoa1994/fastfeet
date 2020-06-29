import React from 'react';
import PropTypes from 'prop-types';
import { IoIosArrowBack } from 'react-icons/io';
import { MdDone } from 'react-icons/md';

import { Container, Button } from './styles';

function FormHeader({ title, action }) {
  return (
    <Container>
      <div>
        <h1>{title}</h1>
      </div>
      <div>
        <Button type="button" color="#ccc" onClick={action}>
          <IoIosArrowBack color="#fff" size={18} />
          Voltar
        </Button>
        <Button type="submit" color="#7d40ea">
          <MdDone color="#fff" size={18} />
          Salvar
        </Button>
      </div>
    </Container>
  );
}

export default FormHeader;

FormHeader.propTypes = {
  title: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};
