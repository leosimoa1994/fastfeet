import React from 'react';
import PropType from 'prop-types';
import { BsPlus, BsSearch } from 'react-icons/bs';

import { Container, Searchadd, Search } from './styles';

function HeaderTop({ title, action }) {
  return (
    <Container>
      <h1>{title}</h1>
      <Searchadd>
        <Search>
          <BsSearch color="#ccc" size={14} />
          <input type="text" placeholder="Procurar" />
        </Search>
        {action && (
          <button type="button" onClick={action}>
            <BsPlus color="#fff" size={25} />
            Adicionar
          </button>
        )}
      </Searchadd>
    </Container>
  );
}

export default HeaderTop;

HeaderTop.propTypes = {
  title: PropType.string.isRequired,
  action: PropType.func.isRequired,
};
