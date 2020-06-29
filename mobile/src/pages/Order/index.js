import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Details from '~/pages/Order/Details';
import AddProblem from '~/pages/Order/AddProblem';
import ListProblems from '~/pages/Order/ListProblems';
import Confirm from '~/pages/Order/Confirm';

const Stack = createStackNavigator();

const Order = ({ navigation, route }) => {
  const { order } = route.params;

  return (
    <Stack.Navigator
      initialRouteName="Details"
      screenOptions={{
        headerTransparent: true,
        headerTintColor: '#fff',
        headerLeftContainerStyle: { marginLeft: 20 },
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen
        name="Details"
        component={Details}
        initialParams={{ order }}
        options={{
          title: 'Detalhes da encomenda',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Dashboard');
              }}
            >
              <Icon name="chevron-left" size={20} color="#fff" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="AddProblem"
        component={AddProblem}
        initialParams={{ order }}
        options={{
          title: 'Informar problema',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Details');
              }}
            >
              <Icon name="chevron-left" size={20} color="#fff" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="ListProblems"
        component={ListProblems}
        initialParams={{ order }}
        options={{
          title: 'Visualizar encomenda',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Details');
              }}
            >
              <Icon name="chevron-left" size={20} color="#fff" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Confirm"
        component={Confirm}
        initialParams={{ order }}
        options={{
          title: 'Confirmar Entrega',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Details');
              }}
            >
              <Icon name="chevron-left" size={20} color="#fff" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default Order;
