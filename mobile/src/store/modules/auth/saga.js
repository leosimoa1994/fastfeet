import { all, takeLatest, call, put } from 'redux-saga/effects';
import { Alert } from 'react-native';
import { signInSuccess, signInFailure } from './actions';
import api from '~/services/api';

export function* signIn({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.post, 'session-deliveryman', { id });

    console.tron.log(response);

    const { token, deliveryman } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, deliveryman));
  } catch (error) {
    Alert.alert('Error', 'Error de autenticação');
    yield put(signInFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
]);
