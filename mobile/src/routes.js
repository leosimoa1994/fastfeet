import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';
import Order from '~/pages/Order';

import Signin from '~/pages/Signin';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Routes = ({ signedIn }) => {
  return (
    <NavigationContainer>
      {signedIn ? (
        <Tab.Navigator
          initialRouteName="Dashboard"
          tabBarOptions={{
            inactiveTintColor: 'rgba(0,0,0,0.5)',
            activeTintColor: '#7d40ea',
            style: { backgroundColor: '#FFF' },
            keyboardHidesTabBar: true,
          }}
        >
          <Tab.Screen
            name="Dashboard"
            component={Dashboard}
            options={{
              title: 'Entregas',
              tabBarIcon: ({ color }) => (
                <Icon name="format-list-bulleted" size={20} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Order"
            component={Order}
            keyboardHidesTabBar
            options={{
              unmountOnBlur: true,
              tabBarButton: () => null,
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              title: 'Meu Perfil',
              tabBarIcon: ({ color }) => (
                <Icon name="person" size={20} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      ) : (
          <Stack.Navigator
            initialRouteName="Signin"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Signin" component={Signin} />
          </Stack.Navigator>
        )}
    </NavigationContainer>
  );
};

export default Routes;
