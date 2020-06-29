import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Form = styled.View`
  width: 90%;
  margin-left: 5%;
`;

export const FormInput = styled.View`
  margin-top: -60px;
  width: 100%;
  height: auto;
`;

export const Description = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(0,0,0,0.3)',
})`
  padding: 20px;
  height: 300px;
  width: 100%;
  background: #fff;
  border-radius: 4px;
  border: 1px solid #f2f2f2;
  font-size: 18px;
`;

export const Button = styled(RectButton)`
  width: 100%;
  padding: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: #7d40ea;
  margin-top: 10px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;
