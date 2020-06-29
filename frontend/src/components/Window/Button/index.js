import React from 'react';
import PropTypes from 'prop-types';

import { Container, ButtonText } from './styles';

function Button({ icon, text, action, color }) {
  return (
    <Container>
      <button type="button" onClick={action}>
        {icon}
        <ButtonText color={color}>{text}</ButtonText>
      </button>
    </Container>
  );
}

export default Button;

Button.propTypes = {
  icon: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
};
