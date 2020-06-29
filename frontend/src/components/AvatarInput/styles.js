import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      margin-top: 20px;
      margin-bottom: 30px;
      width: 150px;
      height: 150px;
      border-radius: 50%;
      border: 2px dashed #7d40ea;
      background: #eee;
    }

    input {
      display: none;
    }
  }
`;
