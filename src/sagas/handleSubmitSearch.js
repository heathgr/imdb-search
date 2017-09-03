import 'babel-polyfill';
import { put, takeLatest, select } from 'redux-saga/effects';
import { get } from 'axios';
import { startedHandleSubmitSearchSaga, gotSearchResults, gotSearchError, submitSearch } from '../actions/searchActions';
import { SUBMIT_SEARCH, SUBMIT_SEARCH_PAGE } from '../constants/searchActionTypes';
import { getSearchType, getSearchString } from '../reducers/root';
import searchConfig from '../constants/searchConfig';

function* fetchData(action) {
  try {
    console.log('shit');
    const searchTypeString = searchConfig.types[action.searchType].name;
    const searchString = action.searchString.replace(/ /g, '+');
    const searchURL = `https://swapi.co/api/${searchTypeString}/?search=${searchString}&page=${action.searchPage}`;
    console.log('search URL: ', searchURL);
    const result = yield get(searchURL);
    yield put(gotSearchResults(result.data));
  } catch (e) {
    yield put(gotSearchError(e));
  }
  yield null;
}

function* executeSearch(action) {
  if (action.type === SUBMIT_SEARCH) {
    yield fetchData(action);
  } else if (action.type === SUBMIT_SEARCH_PAGE) {
    const searchString = yield select(getSearchString);
    const searchType = yield select(getSearchType);
    console.log('ok: ', searchString, searchType);
    yield fetchData(submitSearch(searchString, searchType, action.searchPage));
  }
}

function* handleSubmitSearch() {
  yield takeLatest([SUBMIT_SEARCH, SUBMIT_SEARCH_PAGE], executeSearch);
  yield put(startedHandleSubmitSearchSaga());
}

export default handleSubmitSearch;
