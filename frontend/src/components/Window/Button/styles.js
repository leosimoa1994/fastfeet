import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  text-align: right;

  > button {
    background: none;
    border: 0;
  }
`;

export const ButtonText = styled.span`
  font-weight: bold;
  color: ${(props) => (props.color ? props.color : '#000')};
`;
