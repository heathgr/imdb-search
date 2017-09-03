import { GOT_SEARCH_RESULTS, SUBMIT_SEARCH, SUBMIT_SEARCH_PAGE } from '../constants/searchActionTypes';

const initialState = {
  searchType: 0,
  searchString: '',
  searchPage: 0,
  resultCount: 0,
  results: [],
};

const root = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_SEARCH: {
      return {
        ...state,
        searchType: action.searchType,
        searchString: action.searchString,
        searchPage: action.searchPage,
      };
    }
    case SUBMIT_SEARCH_PAGE: {
      return {
        ...state,
        searchPage: action.searchPage,
      };
    }
    case GOT_SEARCH_RESULTS: {
      return {
        ...state,
        results: action.data.results,
        resultCount: action.data.count,
      };
    }
    default: {
      return state;
    }
  }
};

export const getResults = state => state.results;
export const getResultCount = state => state.resultCount;
export const getSearchType = state => state.searchType;
export const getSearchString = state => state.searchString;
export const getSearchPage = state => state.searchPage;

export default root;
