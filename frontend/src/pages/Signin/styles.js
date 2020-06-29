import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Login = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  max-width: 350px;
  width: 350px;
  padding: 50px 30px;
  border-radius: 4px;

  img {
    width: 260px;
    height: 44px;
    margin-bottom: 30px;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;

    strong {
      margin-top: 15px;
      font-weight: bold;
      color: #555;
      margin-bottom: 5px;
    }

    input {
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;

      &::placeholder {
        color: #ccc;
      }
    }

    span {
      color: #ff8080;
      font-size: 12px;
      margin-top: 0;
    }

    button {
      margin-top: 30px;
      border: 0;
      background: #7d40ea;
      color: #fff;
      font-size: 16px;
      padding: 10px;
      border-radius: 4px;
      transition: 0.2s;

      &:hover {
        background: ${darken(0.05, '#7d40ea')};
      }
    }
  }
`;
