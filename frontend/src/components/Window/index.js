import React, { useState } from 'react';
import PropType from 'prop-types';
import { BsThreeDots } from 'react-icons/bs';

import { Container, ActionMenu } from './styles';

function Window({ children }) {
  const [visible, setVisible] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  return (
    <Container>
      <button type="button" onClick={handleToggleVisible}>
        <BsThreeDots color="#888" size={20} />
      </button>
      <ActionMenu visible={visible} onClick={handleToggleVisible}>
        {children}
      </ActionMenu>
    </Container>
  );
}

export default Window;

Window.propTypes = {
  children: PropType.element.isRequired,
};
