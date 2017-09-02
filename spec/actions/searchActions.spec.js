import { expect } from 'chai';
import {
  submitPersonSearch,
  submitTitleSearch,
  submitFetchPersonById,
  submitFetchTitleById,
  startedHandleSubmitPersonSearchSaga,
  startedHandleSubmitTitleSearchSaga,
  startedHandleSubmitFetchPersonByIdSaga,
  startedHandleSubmitFetchTitleByIdSaga,
} from '../../src/actions/searchActions';
import {
  SUBMIT_PERSON_SEARCH,
  SUBMIT_TITLE_SEARCH,
  SUBMIT_FETCH_PERSON_BY_ID,
  SUBMIT_FETCH_TITLE_BY_ID,
  STARTED_HANDLE_SUBMIT_PERSON_SEARCH_SAGA,
  STARTED_HANDLE_SUBMIT_TITLE_SEARCH_SAGA,
  STARTED_HANDLE_SUBMIT_FETCH_PERSON_BY_ID_SAGA,
  STARTED_HANDLE_SUBMIT_FETCH_TITLE_BY_ID_SAGA,
} from '../../src/constants/searchActionTypes';

describe('Search Actions', () => {
  it('Should create a SUBMIT_PERSON_SEARCH action', () => {
    const expectedAction = {
      type: SUBMIT_PERSON_SEARCH,
      person: 'Tom Cruise',
    };
    const testAction = submitPersonSearch('Tom Cruise');

    expect(testAction).to.deep.equal(expectedAction);
  });

  it('Should create a SUBMIT_TITLE_SEARCH action.', () => {
    const expectedAction = {
      type: SUBMIT_TITLE_SEARCH,
      title: 'Stargate',
      year: null,
    };

    const testAction = submitTitleSearch('Stargate');

    expect(testAction).to.deep.equal(expectedAction);
  });

  it('Should create a SUBMIT_TITLE_SEARCH action with year.', () => {
    const expectedAction = {
      type: SUBMIT_TITLE_SEARCH,
      title: '2001',
      year: 1968,
    };

    const testAction = submitTitleSearch('2001', 1968);

    expect(testAction).to.deep.equal(expectedAction);
  });

  it('Should create a SUBMIT_FETCH_PERSON_BY_ID action', () => {
    const expectedAction = {
      type: SUBMIT_FETCH_PERSON_BY_ID,
      id: 'nm0000120',
    };
    const testAction = submitFetchPersonById('nm0000120');

    expect(testAction).to.deep.equal(expectedAction);
  });

  it('Should create a SUBMIT_FETCH_TITLE_BY_ID action', () => {
    const expectedAction = {
      type: SUBMIT_FETCH_TITLE_BY_ID,
      id: 'aa0000139',
    };
    const testAction = submitFetchTitleById('aa0000139');

    expect(testAction).to.deep.equal(expectedAction);
  });

  it('Should create a STARTED_SUBMIT_PERSON_SEARCH_SAGA action', () => {
    const expectedAction = {
      type: STARTED_HANDLE_SUBMIT_PERSON_SEARCH_SAGA,
    };
    const testAction = startedHandleSubmitPersonSearchSaga();

    expect(testAction).to.deep.equal(expectedAction);
  });

  it('Should create a STARTED_SUBMIT_TITLE_SEARCH_SAGA action.', () => {
    const expectedAction = {
      type: STARTED_HANDLE_SUBMIT_TITLE_SEARCH_SAGA,
    };
    const testAction = startedHandleSubmitTitleSearchSaga();

    expect(testAction).to.deep.equal(expectedAction);
  });

  it('Should create a STARTED_HANDLE_SUBMIT_FETCH_PERSON_BY_ID_SAGA action.', () => {
    const expectedAction = {
      type: STARTED_HANDLE_SUBMIT_FETCH_PERSON_BY_ID_SAGA,
    };
    const testAction = startedHandleSubmitFetchPersonByIdSaga();

    expect(testAction).to.deep.equal(expectedAction);
  });

  it('Should create a STARTED_HANDLE_SUBMIT_FETCH_TITLE_BY_ID_SAGA action.', () => {
    const expectedAction = {
      type: STARTED_HANDLE_SUBMIT_FETCH_TITLE_BY_ID_SAGA,
    };
    const testAction = startedHandleSubmitFetchTitleByIdSaga();

    expect(testAction).to.deep.equal(expectedAction);
  });
});
