import { GOT_SEARCH_RESULTS, SUBMIT_SEARCH } from '../constants/searchActionTypes';

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
export const getSearchType = state => state.searchType;

export default root;
