import 'babel-polyfill';
import { put, takeLatest } from 'redux-saga/effects';
import { startedHandleSubmitTitleSearchSaga } from '../actions/searchActions';
import { SUBMIT_TITLE_SEARCH } from '../constants/searchActionTypes';

function* submitTitleSearch(action) {
  console.log('got a SUBMIT_TITLE_SEARCH action', action);
  yield null;
}

function* handleSubmitTitleSearch() {
  yield takeLatest(SUBMIT_TITLE_SEARCH, submitTitleSearch);
  yield put(startedHandleSubmitTitleSearchSaga());
}

export default handleSubmitTitleSearch;
