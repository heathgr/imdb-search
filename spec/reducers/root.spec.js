import { expect } from 'chai';
import { SUBMIT_SEARCH, GOT_SEARCH_RESULTS } from '../../src/constants/searchActionTypes';
import { submitSearch, gotSearchResults } from '../../src/actions/searchActions';
import root from '../../src/reducers/root';

describe('Root Reducer', () => {
  it('Should correctly handle SUBMIT_SEARCH actions.', () => {
    const testAction = submitSearch('coruscant', 1);
    const testState = root(undefined, testAction);
    const expectedState = {
      searchType: 1,
      searchString: 'coruscant',
      searchPage: 1,
      resultCount: 0,
      results: [],
    };

    expect(testState).to.deep.equal(expectedState);
  });

  it('Should correctly handle GOT_SEARCH_RESULTS actions.', () => {
    const testAction = gotSearchResults({
      count: 3,
      results: [
        { name: 'one' },
        { name: 'two' },
        { name: 'three' },
      ],
    });
    const testState = root(undefined, testAction);
    const expectedState = {
      searchType: 0,
      searchString: '',
      searchPage: 0,
      resultCount: 3,
      results: [
        { name: 'one' },
        { name: 'two' },
        { name: 'three' },
      ],
    };

    expect(testState).to.deep.equal(expectedState);
  });

  it('Should correctly handle default actions.', () => {
    const testAction = {
      type: 'JUST_SOME_ACTION',
    };
    const pastState = {
      searchType: null,
      searchString: null,
      searchPage: 0,
      resultCount: 0,
      results: [],
    };
    const testState = root(pastState, testAction);
    const expectedState = {
      searchType: null,
      searchString: null,
      searchPage: 0,
      resultCount: 0,
      results: [],
    };

    expect(testState).to.deep.equal(expectedState);
  });
});
