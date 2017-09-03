import 'babel-polyfill';
import { put, takeLatest } from 'redux-saga/effects';
import { get } from 'axios';
import { startedHandleSubmitSearchSagas, gotSearchResults, gotSearchError } from '../actions/searchActions';
import { SUBMIT_SEARCH } from '../constants/searchActionTypes';
import searchConfig from '../constants/searchConfig';

function* submitSearch(action) {
  try {
    const searchTypeString = searchConfig.types[action.searchType].name;
    const searchString = action.searchString.replace(/ /g, '+');
    const searchURL = `https://swapi.co/api/${searchTypeString}/?search=${searchString}&page=${action.searchPage}`;
    const result = yield get(searchURL);
    yield put(gotSearchResults(result.data));
  } catch (e) {
    yield put(gotSearchError(e));
  }
  yield null;
}

function* handleSubmitSearch() {
  yield takeLatest(SUBMIT_SEARCH, submitSearch);
  yield put(startedHandleSubmitSearchSagas());
}

export default handleSubmitSearch;
