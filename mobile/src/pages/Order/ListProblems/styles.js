import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: -60px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
  width: 90%;
  margin-left: 5%;
`;

export const Problem = styled.View`
  align-self: stretch;
  background: #fff;
  padding: 15px;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 4px;
  border: 1px solid #f2f2f2;
  width: 100%;
  margin-bottom: 10px;
`;

export const Text = styled.Text`
  color: #999;
  font-size: 16px;
`;

export const Date = styled.Text`
  color: #999;
  font-size: 12px;
`;
