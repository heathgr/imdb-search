import {
  SUBMIT_SEARCH,
  GOT_SEARCH_RESULTS,
  STARTED_HANDLE_SUBMIT_SEARCH_SAGA,
  GOT_SEARCH_ERROR,
} from '../constants/searchActionTypes';

export const submitSearch = (searchString, searchType, searchPage = 1) => ({
  type: SUBMIT_SEARCH,
  searchString,
  searchType,
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

export const startedHandleSubmitSearchSagas = () => ({
  type: STARTED_HANDLE_SUBMIT_SEARCH_SAGA,
});
