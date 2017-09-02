import 'babel-polyfill';
import { put, takeLatest } from 'redux-saga/effects';
import { startedHandleSubmitSearchSagas } from '../actions/searchActions';
import { SUBMIT_SEARCH } from '../constants/searchActionTypes';

function* submitSearch(action) {
  /*
  try {
    axios.get
  }
  */
  yield null;
}

function* handleSubmitSearch() {
  yield takeLatest(SUBMIT_SEARCH, submitSearch);
  yield put(startedHandleSubmitSearchSagas());
}

export default handleSubmitSearch;
