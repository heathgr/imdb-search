import 'babel-polyfill';
import { put, takeLatest } from 'redux-saga/effects';
import { startedHandleSubmitFetchPersonByIdSaga } from '../actions/searchActions';
import { SUBMIT_FETCH_PERSON_BY_ID } from '../constants/searchActionTypes';

function* submitFetchPersonById(action) {
  console.log('got a SUBMIT_FETCH_PERSON_BY_ID action!!!', action);
  yield null;
}

function* handleSubmitFetchPersonById() {
  yield takeLatest(SUBMIT_FETCH_PERSON_BY_ID, submitFetchPersonById);
  yield put(startedHandleSubmitFetchPersonByIdSaga());
}

export default handleSubmitFetchPersonById;
