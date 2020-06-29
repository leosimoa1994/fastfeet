import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #7d40ea;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(0,0,0,0.5)',
})`
  margin-top: 40px;
  background: #fff;
  font-size: 15px;
  width: 100%;
  border-radius: 4px;
  padding: 15px;
  font-size: 16px;
`;

export const SubmitButton = styled.TouchableOpacity`
  background: #fff;
  margin-top: 15px;
  font-size: 15px;
  width: 100%;
  border-radius: 4px;
  padding: 15px;
  justify-content: center;
  align-items: center;
  background: #82bf18;
`;

export const Text = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;
