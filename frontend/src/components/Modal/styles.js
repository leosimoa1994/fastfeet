import styled from 'styled-components';

export const Container = styled.div`
  left: 0;
  height: 100%;
  width: 100%;
  display: ${(props) => (props.visibleModal ? 'flex' : 'none')};
  background: rgba(0, 0, 0, 0.4);
  justify-content: center;
  align-items: center;
  position: absolute;
`;

export const ModalView = styled.div`
  width: 400px;
  background: #fff;
  opacity: 1;
  border-radius: 4px;
  max-width: 400px;
  min-height: 320px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  > strong {
    font-size: 12px;
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: 10px;
  }

  img {
    width: 300px;
    height: 300px;
    margin: auto;
    border-radius: 4px;
  }
`;

export const Datas = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  span {
    margin-left: 5px;
  }
`;
