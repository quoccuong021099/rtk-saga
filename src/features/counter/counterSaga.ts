import { delay, put, takeLatest } from '@redux-saga/core/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { incrementAsyncSaga, incrementAsyncSagaSuccess } from './counterSlice';

function* incrementCounter(action: PayloadAction<number>) {
  console.log('await 0.5s');
  yield delay(500);
  yield put(incrementAsyncSagaSuccess(action.payload));
}

export default function* counterSaga() {
  yield takeLatest(incrementAsyncSaga.toString(), incrementCounter);
}
