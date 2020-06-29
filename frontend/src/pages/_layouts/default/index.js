import React from 'react';
import PropTypes from 'prop-types';

import Header from '~/components/Header';
import { Wrapper } from './styles';

function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Header path={children.props.match.path} />
      {children}
    </Wrapper>
  );
}

export default DefaultLayout;

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
