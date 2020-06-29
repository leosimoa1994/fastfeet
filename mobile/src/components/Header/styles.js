import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 10px;
  flex-direction: row;
  padding: 0 30px;
`;

export const Avatar = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 35px;
`;

export const Info = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 10px;
`;

export const Welcome = styled.Text`
  font-size: 14px;
  color: #999;
`;

export const Name = styled.Text`
  font-size: 22px;
  font-weight: bold;
`;

export const Logout = styled.TouchableOpacity`
  align-self: flex-end;
  width: 70px;
  height: 70px;
  align-items: flex-end;
  justify-content: center;
  margin-left: 10px;
`;
