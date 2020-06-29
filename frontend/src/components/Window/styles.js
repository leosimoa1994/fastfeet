import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.td`
  position: relative;
  text-align: right;
  margin-right: 5px;

  > button {
    background: none;
    border: 0;
  }
`;

export const ActionMenu = styled.ul`
  z-index: 1;
  list-style: none;
  width: 150px;
  position: absolute;
  right: calc(50% - 90px);
  top: calc(50% + 10px);
  background: rgba(250, 250, 250, 1);

  border-radius: 4px;
  text-align: left;
  box-shadow: 5px 5px 5px 0px rgba(220, 220, 220, 1);
  display: ${(props) => (props.visible ? 'block' : 'none')};

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 10px);
    top: -10px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid rgba(250, 250, 250, 1);
  }

  button {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    padding: 6px 10px;
    border: 0px;
    background: none;
    border-bottom: 1px solid #ddd;

    svg {
      margin-right: 10px;
    }

    &:hover {
      background: ${darken(0.03, '#fafafa')};
    }
  }
`;
