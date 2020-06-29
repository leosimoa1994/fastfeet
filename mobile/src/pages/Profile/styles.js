import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #fff;
`;

export const Avatar = styled.Image`
  align-self: center;
  margin-top: 100px;
  width: 120px;
  height: 120px;
  border-radius: 60px;
  margin-bottom: 20px;
`;

export const Info = styled.View`
  padding: 30px;
`;

export const Data = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  color: #999;
  font-size: 14px;
  font-weight: bold;
`;

export const Text = styled.Text`
  color: #000;
  font-size: 18px;
  font-weight: bold;
`;

export const Button = styled.TouchableOpacity`
  margin-top: 10px;
  background: #e74040;
  padding: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
