import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: 30px;
`;

export const Body = styled.View`
  border: 2px solid #f2f2f2;
  border-radius: 4px;
`;

export const Top = styled.View`
  flex-direction: row;
  padding: 10px;
`;

export const Title = styled.Text`
  color: #7d40ea;
  font-size: 18px;
  font-weight: bold;
  margin-left: 10px;
`;

export const Middle = styled.View`
  margin-top: 20px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Circule = styled.View`
  width: 14px;
  height: 14px;
  border-radius: 7px;
  border: 1px solid #7d40ea;
  background: ${(props) => (props.color ? '#7d40ea' : '#fff')};
`;

export const Line = styled.View`
  height: 1px;
  width: 130px;
  background: #7d40ea;
`;

export const MiddleInfo = styled.View`
  margin-top: 4px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Text = styled.Text`
  color: #999;
  font-size: 12px;
  width: 80px;
  height: 50px;
  text-align: center;
`;

export const Bottom = styled.View`
  flex-direction: row;
  padding: 20px;
  background: #f2f2f2;
  justify-content: space-between;
  align-items: center;
`;

export const BottomInfo = styled.View`
  flex-direction: column;
  align-self: flex-end;
`;

export const BottomTitle = styled.Text`
  color: #999;
  font-size: 12px;
  font-weight: bold;
`;

export const BottomText = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const BottomLinkText = styled.Text`
  color: #7d40ea;
  font-size: 16px;
  font-weight: bold;
`;

export const BottomLink = styled.TouchableOpacity`
  align-self: flex-end;
`;
