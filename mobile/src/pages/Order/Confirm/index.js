import React, { useRef, useState } from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Backgroud';

import api from '~/services/api';

import {
  Container,
  Content,
  CameraWrapper,
  Camera,
  Button,
  TakePictureButton,
  Text,
} from './styles';

export default function Confirm({ navigation, route }) {
  const { order } = route.params;
  // eslint-disable-next-line prefer-const
  const cameraRef = useRef(null);
  const [pictureUri, setPictureUri] = useState('');

  async function handleSubmit() {
    // eslint-disable-next-line no-undef
    const dataFile = new FormData();
    dataFile.append('sign', {
      type: 'image/jpg',
      uri: pictureUri,
      name: 'assignature.jpg',
    });

    const pictureResponse = await api.post('signatures', dataFile);

    console.tron.log(pictureResponse);

    await api.put(`/delivery/${order.id}/finish`, {
      sign: pictureResponse.data.id,
    });
    navigation.navigate('Dashboard');
  }

  async function handletakePicture() {
    if (cameraRef) {
      const options = { quality: 0.5, base64: true };
      const data = await cameraRef.current.takePictureAsync(options);
      await setPictureUri(data.uri);
    }
  }

  return (
    <Background>
      <Container>
        <Content>
          {pictureUri ? (
            <CameraWrapper>
              <Image source={{ uri: pictureUri }} style={{ height: '100%' }} />
            </CameraWrapper>
          ) : (
              <CameraWrapper>
                <Camera ref={cameraRef} type="back" captureAudio={false} />
                <TakePictureButton onPress={handletakePicture}>
                  <Icon name="photo-camera" color="#fff" size={30} />
                </TakePictureButton>
              </CameraWrapper>
            )}
          <Button onPress={handleSubmit} loading={false}>
            <Text>Enviar</Text>
          </Button>
        </Content>
      </Container>
    </Background>
  );
}
