import { RNCamera } from 'react-native-camera';
import { RectButton } from 'react-native-gesture-handler';

import styled from 'styled-components/native';

export const Container = styled.View`
  background: #fff;
  flex: 1;
`;

export const Content = styled.View`
  margin: -60px 20px 0 20px;
  flex: 1;
`;

export const CameraWrapper = styled.View`
  width: 100%;
  height: 90%;
  border-radius: 4px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
`;

export const Camera = styled(RNCamera)`
  flex: 1;
`;

export const Button = styled.TouchableOpacity`
  background: #7d40ea;
  width: 100%;
  padding: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
`;

export const Text = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const TakePictureButton = styled(RectButton)`
  background: rgba(000, 000, 000, 0.5);
  position: absolute;
  padding: 20px;
  border-radius: 100px;
  bottom: 25px;
  align-self: center;
`;
