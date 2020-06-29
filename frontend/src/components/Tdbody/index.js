import React from 'react';
import PropTypes from 'prop-types';

import { Container, DeliverymanInfo } from './styles';

function Tdbody({ info, type, avatar }) {
  switch (type) {
    case 'text':
      return <Container>{info}</Container>;
    case 'image':
      return (
        <Container>
          <DeliverymanInfo>
            <img
              src={
                avatar
                  ? avatar.url
                  : 'https://api.adorable.io/avatars/50/abott@adorable.png'
              }
              alt={info}
            />
          </DeliverymanInfo>
        </Container>
      );
    case 'duble':
      return (
        <Container>
          <DeliverymanInfo>
            <img
              src={
                avatar
                  ? avatar.url
                  : 'https://api.adorable.io/avatars/50/abott@adorable.png'
              }
              alt={info}
            />
            {info}
          </DeliverymanInfo>
        </Container>
      );
    default:
      break;
  }
}

export default Tdbody;

Tdbody.propTypes = {
  info: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  avatar: PropTypes.shape({
    url: PropTypes.string,
  }),
};
