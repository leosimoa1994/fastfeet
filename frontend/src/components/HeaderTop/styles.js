import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: auto;
  margin-top: 50px;

  h1 {
    align-self: flex-start;
    margin-bottom: 30px;
  }
`;

export const Search = styled.div`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;

  svg {
    margin-top: 6px;
    margin-left: 6px;
  }

  input {
    padding: 6px;
    border: 0px;

    &::placeholder {
      color: #ccc;
    }
  }
`;

export const Searchadd = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  button {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border: 0;
    background: #7d40ea;
    color: #fff;
    font-size: 16px;
    padding: 6px 15px;
    border-radius: 4px;
    transition: 0.2s;

    &:hover {
      background: ${darken(0.05, '#7d40ea')};
    }
  }
`;
