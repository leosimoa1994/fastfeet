import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 30px;

  div {
    display: flex;
    flex-direction: row;
  }
`;

export const Button = styled.button`
  display: flex;
  align-content: center;
  padding: 10px 25px;
  border: 0px;
  border-radius: 4px;
  background: ${(props) => (props.color ? props.color : '#ccc')};
  margin-right: 10px;
  font-size: 16px;
  color: #fff;
  font-weight: bold;
`;
