import 'babel-polyfill';
import { expect } from 'chai';
import SagaTester from 'redux-saga-tester';
import start from '../../src/sagas/start';
import {
  STARTED_HANDLE_SUBMIT_SEARCH_SAGA,
} from '../../src/constants/searchActionTypes';

describe('Start Saga', () => {
  let sagaTester = null;

  beforeEach(() => {
    sagaTester = new SagaTester({});
    sagaTester.start(start);
  });

  it('Should fork the sagas needed for api calls.', () => {
    expect(sagaTester.wasCalled(STARTED_HANDLE_SUBMIT_SEARCH_SAGA)).to.equal(true);
  });
});
