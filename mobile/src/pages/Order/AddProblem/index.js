import React, { useState } from 'react';

import { Alert } from 'react-native';

import api from '~/services/api';

import Background from '~/components/Backgroud';

import { Form, Description, Button, ButtonText, FormInput } from './styles';

const AddProblem = ({ route, navigation }) => {
  const [description, setDescription] = useState();

  const { order } = route.params;

  async function handleSubmit() {
    try {
      await api.post(`/delivery/${order.id}/problems`, { description });

      Alert.alert('Sucesso', 'Problema Registado com sucesso');
      navigation.navigate('Details');
    } catch (error) {
      Alert.alert(
        'Error',
        'Error ao registar problema, tente novamente mais tarde!'
      );
    }
  }

  return (
    <Background>
      <Form>
        <FormInput>
          <Description
            placeholder="Inclua aqui o problema que ocorreu na entrega"
            numberOfLines={10}
            multiline
            textAlignVertical="top"
            value={description}
            onChangeText={setDescription}
          />
        </FormInput>
        <Button onPress={handleSubmit}>
          <ButtonText>Enviar</ButtonText>
        </Button>
      </Form>
    </Background>
  );
};

export default AddProblem;
