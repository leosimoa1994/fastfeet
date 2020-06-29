import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { signOut } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.png';

import { Container, Content, LinkHeader } from './styles';

function Header({ path }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="FastFeet" />
          <LinkHeader
            to="/order"
            headerinfo={path.includes('order') ? path : null}
          >
            ENCOMENDAS
          </LinkHeader>
          <LinkHeader
            to="/deliverymans"
            headerinfo={path.includes('deliverymans') ? path : null}
          >
            ENTREGADORES
          </LinkHeader>
          <LinkHeader
            to="/recipients"
            headerinfo={path.includes('recipients') ? path : null}
          >
            DESTINATÁRIOS
          </LinkHeader>
          <LinkHeader
            to="/problems"
            headerinfo={path.includes('problems') ? path : null}
          >
            PROBLEMAS
          </LinkHeader>
        </nav>
        <aside>
          <strong>{user.name}</strong>
          <button type="button" onClick={handleSignOut}>
            Sair do sistema
          </button>
        </aside>
      </Content>
    </Container>
  );
}

export default Header;

Header.propTypes = {
  path: PropTypes.string.isRequired,
};
