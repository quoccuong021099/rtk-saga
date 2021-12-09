import { PayloadAction } from '@reduxjs/toolkit';
import { call, delay, fork, put, take } from 'redux-saga/effects';
import { authAction, LoginPayload } from './authSlice';

function* handleLogin(payload: LoginPayload) {
  try {
    yield delay(1000);
    localStorage.setItem('access_token', 'Tim');
    yield put(authAction.loginSuccess({ id: 1, name: 'Cừn' }));
    // redirect to admin page
  } catch (error: any) {
    yield put(authAction.loginFailed(error.message));
  }
}
function* handleLogout() {
  yield delay(1000);
  localStorage.removeItem('access_token');
  // redirect to login page
}

function* watchLoginFlow() {
  while (true) {
    const isLoggedIn = Boolean(localStorage.getItem('access_token'));
    if (!isLoggedIn) {
      const action: PayloadAction<LoginPayload> = yield take(authAction.login.type);
      yield fork(handleLogin, action.payload);
    }
    yield take(authAction.logout.type);
    yield call(handleLogout);
  }
}

export function* authSaga() {
  yield fork(watchLoginFlow);
}
