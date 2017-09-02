import {
  SUBMIT_PERSON_SEARCH,
  SUBMIT_TITLE_SEARCH,
  SUBMIT_FETCH_PERSON_BY_ID,
  SUBMIT_FETCH_TITLE_BY_ID,
  STARTED_HANDLE_SUBMIT_PERSON_SEARCH_SAGA,
  STARTED_HANDLE_SUBMIT_TITLE_SEARCH_SAGA,
  STARTED_HANDLE_SUBMIT_FETCH_PERSON_BY_ID_SAGA,
  STARTED_HANDLE_SUBMIT_FETCH_TITLE_BY_ID_SAGA,
} from '../constants/searchActionTypes';

export const submitPersonSearch = person => ({
  type: SUBMIT_PERSON_SEARCH,
  person,
});

export const submitTitleSearch = (title, year = null) => ({
  type: SUBMIT_TITLE_SEARCH,
  title,
  year,
});

export const submitFetchPersonById = id => ({
  type: SUBMIT_FETCH_PERSON_BY_ID,
  id,
});

export const submitFetchTitleById = id => ({
  type: SUBMIT_FETCH_TITLE_BY_ID,
  id,
});

export const startedHandleSubmitPersonSearchSaga = () => ({
  type: STARTED_HANDLE_SUBMIT_PERSON_SEARCH_SAGA,
});

export const startedHandleSubmitTitleSearchSaga = () => ({
  type: STARTED_HANDLE_SUBMIT_TITLE_SEARCH_SAGA,
});

export const startedHandleSubmitFetchPersonByIdSaga = () => ({
  type: STARTED_HANDLE_SUBMIT_FETCH_PERSON_BY_ID_SAGA,
});

export const startedHandleSubmitFetchTitleByIdSaga = () => ({
  type: STARTED_HANDLE_SUBMIT_FETCH_TITLE_BY_ID_SAGA,
});
