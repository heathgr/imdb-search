import {
  SUBMIT_SEARCH,
  SUBMIT_SEARCH_PAGE,
  GOT_SEARCH_RESULTS,
  STARTED_HANDLE_SUBMIT_SEARCH_SAGA,
  STARTED_HANDLE_SUBMIT_SEARCH_PAGE_SAGA,
  GOT_SEARCH_ERROR,
} from '../constants/searchActionTypes';

export const submitSearch = (searchString, searchType, searchPage = 1) => ({
  type: SUBMIT_SEARCH,
  searchString,
  searchType,
  searchPage,
});

export const submitSearchPage = searchPage => ({
  type: SUBMIT_SEARCH_PAGE,
  searchPage,
});

export const gotSearchResults = data => ({
  type: GOT_SEARCH_RESULTS,
  data,
});

export const gotSearchError = message => ({
  type: GOT_SEARCH_ERROR,
  message,
});

export const startedHandleSubmitSearchSaga = () => ({
  type: STARTED_HANDLE_SUBMIT_SEARCH_SAGA,
});

export const startedHandleSubmitSearchPageSaga = () => ({
  type: STARTED_HANDLE_SUBMIT_SEARCH_PAGE_SAGA,
});
