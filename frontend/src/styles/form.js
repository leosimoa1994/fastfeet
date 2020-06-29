import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1100px;
  width: 1100px;
  margin: 0 auto;
`;

export const Body = styled.div`
  width: 100%;
  background: #fff;
  padding: 20px;
  border-radius: 4px;

  p {
    font-weight: bold;
  }

  > input {
    margin-top: 8px;
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    margin-bottom: 20px;
    border-radius: 4px;

    &::placeholder {
      color: #ccc;
    }
  }
`;

export const SecondLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SecondLineFirst = styled.div`
  flex: 1;
  margin-right: 20px;
  input {
    margin-top: 8px;
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    margin-bottom: 20px;
    border-radius: 4px;

    &::placeholder {
      color: #ccc;
    }
  }
`;

export const SecondLineSecond = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    & + div {
      margin-left: 20px;
    }
  }
  input {
    margin-top: 8px;
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    margin-bottom: 20px;
    border-radius: 4px;

    &::placeholder {
      color: #ccc;
    }
  }
`;

export const LastLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    flex: 1;
    margin-right: 20px;
  }

  input {
    margin-top: 8px;
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    margin-bottom: 20px;
    border-radius: 4px;

    &::placeholder {
      color: #ccc;
    }
  }
`;
