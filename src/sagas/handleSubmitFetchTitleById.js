import 'babel-polyfill';
import { put, takeLatest } from 'redux-saga/effects';
import { startedHandleSubmitFetchTitleByIdSaga } from '../actions/searchActions';
import { SUBMIT_FETCH_TITLE_BY_ID } from '../constants/searchActionTypes';

function* submitFetchTitleById(action) {
  console.log('got a SUBMIT_FETCH_TITLE_BY_ID action.', action);
  yield null;
}

function* handleSubmitFetchTitleById() {
  yield takeLatest(SUBMIT_FETCH_TITLE_BY_ID, submitFetchTitleById);
  yield put(startedHandleSubmitFetchTitleByIdSaga());
}

export default handleSubmitFetchTitleById;
