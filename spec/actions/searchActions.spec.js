import { expect } from 'chai';
import {
  submitSearch,
  gotSearchResults,
  gotSearchError,
  startedHandleSubmitSearchSagas,
} from '../../src/actions/searchActions';
import {
  SUBMIT_SEARCH,
  GOT_SEARCH_RESULTS,
  STARTED_HANDLE_SUBMIT_SEARCH_SAGA,
  GOT_SEARCH_ERROR,
} from '../../src/constants/searchActionTypes';
import {
  PERSON_SEARCH,
} from '../../src/constants/searchTypes';

describe('Search Actions', () => {
  it('Should create a SUBMIT_SEARCH action', () => {
    const expectedAction = {
      type: SUBMIT_SEARCH,
      searchString: 'Tom Cruise',
      searchType: PERSON_SEARCH,
    };
    const testAction = submitSearch('Tom Cruise', PERSON_SEARCH);

    expect(testAction).to.deep.equal(expectedAction);
  });

  it('Should create a GOT_SEARCH_RESULTS action', () => {
    const testData = {
      name: 'Test Data',
      description: 'Just some test data',
    };
    const expectedAction = {
      type: GOT_SEARCH_RESULTS,
      data: testData,
    };
    const testAction = gotSearchResults(testData);

    expect(testAction).to.deep.equal(expectedAction);
  });

  it('Should create a GOT_SEARCH_ERROR action.', () => {
    const expectedAction = {
      type: GOT_SEARCH_ERROR,
      message: 'something broke',
    };
    const testAction = gotSearchError('something broke');

    expect(testAction).to.deep.equal(expectedAction);
  });

  it('Should create a STARTED_HANDLE_SUBMIT_SEARCH_SAGA action.', () => {
    const expectedAction = {
      type: STARTED_HANDLE_SUBMIT_SEARCH_SAGA,
    };
    const testAction = startedHandleSubmitSearchSagas();

    expect(testAction).to.deep.equal(expectedAction);
  });
});
