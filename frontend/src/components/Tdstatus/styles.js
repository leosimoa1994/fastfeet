import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.td``;

export const Status = styled.span`
  background: ${(props) => (props.color ? props.color : '#FFF')};
  border-radius: 20px;
  padding: 5px;
  padding-right: 10px;
  padding-left: 20px;
  color: ${(props) => darken(0.35, props.color ? props.color : '#FFF')};
  font-weight: bold;

  &::before {
    position: absolute;
    width: 10px;
    height: 10px;
    margin-left: -15px;
    background: ${(props) => darken(0.35, props.color ? props.color : '#FFF')};
    content: '';
    border-radius: 50%;
    margin-top: 3px;
  }
`;
