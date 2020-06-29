import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #fff;
`;

export const OrderList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 20 },
})``;

export const Info = styled.View`
  padding: 20px 13px;
  padding-bottom: 5px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Title = styled.Text`
  font-size: 26px;
  font-weight: bold;
`;

export const Buttons = styled.View`
  flex-direction: row;
`;

export const Button = styled.TouchableOpacity`
  margin-left: 10px;
`;

export const ButtonText = styled.Text`
  color: ${(props) => (props.focus ? '#7d40ea' : '#999')};
  font-size: 14px;
  font-weight: bold;
  text-decoration: ${(props) => (props.focus ? 'underline' : 'none')};
  text-decoration-color: #7d40ea;
`;
