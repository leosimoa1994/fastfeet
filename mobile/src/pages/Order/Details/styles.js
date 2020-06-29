import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const OrderInfo = styled.View`
  background: #fff;
  border: 1px solid #f2f2f2;
  border-radius: 4px;
  width: 90%;
  margin-left: 5%;
  margin-top: -70px;
`;

export const StatusInfo = styled.View`
  margin-top: 10px;
  background: #fff;
  border: 1px solid #f2f2f2;
  border-radius: 4px;
  width: 90%;
  margin-left: 5%;
`;

export const HeaderOrder = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 3%;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: #7d40ea;
  font-weight: bold;
  margin-left: 10px;
`;

export const Info = styled.View`
  padding: 3%;
`;

export const InfoTitle = styled.Text`
  font-size: 14px;
  color: #999;
  font-weight: bold;
`;

export const InfoDetails = styled.Text`
  font-size: 16px;
  color: #555;
  margin-bottom: 20px;
  margin-top: 4px;
`;

export const Bottom = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const InfoBottom = styled.View`
  flex-direction: column;
`;

export const Buttons = styled.View`
  flex-direction: row;
  margin-top: 10px;
  background: #f2f2f2;
  border: 1px solid #f2f2f2;
  border-radius: 4px;
  width: 90%;
  margin-left: 5%;
  justify-content: center;
  align-items: center;
`;

export const Button = styled(RectButton)`
  max-width: 33%;
  width: 33%;
  padding: 5%;
  justify-content: center;
  align-items: center;
`;

export const ButtonMiddle = styled(RectButton)`
  max-width: 34%;
  width: 33%;
  padding: 5%;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  border-top-width: 0px;
  border-bottom-width: 0px;
`;

export const ButtonText = styled.Text`
  text-align: center;
  font-size: 12px;
  color: #555;
`;
