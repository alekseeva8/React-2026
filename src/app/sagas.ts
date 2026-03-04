import { call, put, takeLatest, all } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit';
import * as api from "../app/api";
import { fetchRequested, fetchSucceeded, fetchFailed } from "../features/login-redux/activitySlice";

// worker Saga (will be fired on Activity actions)
function* fetchActivity({payload}: PayloadAction<{id:number}>) : Generator {
  try {
    const activity = yield call(api.getActivity, payload.id);
    yield put({ type: fetchSucceeded.type, payload: activity });
  } catch (error) {
    yield put({ type: fetchFailed.type, payload: (error instanceof Error) ? error.message : 'Error' });
  }
}

function* watchFetchActivity() {
    yield takeLatest(fetchRequested.type, fetchActivity);
}

export default function* rootSaga() {
 yield all([watchFetchActivity()]);
}

