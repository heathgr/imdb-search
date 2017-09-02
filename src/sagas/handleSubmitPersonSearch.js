import 'babel-polyfill';
import { put, takeLatest } from 'redux-saga/effects';
import { startedHandleSubmitPersonSearchSaga } from '../actions/searchActions';
import { SUBMIT_PERSON_SEARCH } from '../constants/searchActionTypes';

function* submitPersonSearch(action) {
  console.log('got a SUBMIT_PERSON_SEARCH action', action);
  yield null;
}

function* handleSubmitPersonSearch() {
  yield takeLatest(SUBMIT_PERSON_SEARCH, submitPersonSearch);
  yield put(startedHandleSubmitPersonSearchSaga());
}

export default handleSubmitPersonSearch;
