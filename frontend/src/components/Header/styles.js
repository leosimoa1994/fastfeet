import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  background: #fff;
  padding: 0 30;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      width: 180px;
      height: 33px;
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }
  }

  aside {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;

    strong {
      font-size: 12px;
      margin-bottom: 8px;
    }

    button {
      color: #ff6666;
      background: none;
      border: 0px;
      font-size: 12px;
    }
  }
`;

export const LinkHeader = styled(Link)`
  font-weight: bold;
  color: ${(props) => (props.headerinfo ? '#000' : '#999')};
  margin-left: 10px;
`;
