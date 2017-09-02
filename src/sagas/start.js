import 'babel-polyfill';
import { fork } from 'redux-saga/effects/';
import handleSubmitTitleSearch from './handleSubmitTitleSearch';
import handleSubmitPersonSearch from './handleSubmitPersonSearch';
import handleSubmitFetchTitleById from './handleSubmitFetchTitleById';
import handleSubmitFetchPersonById from './handleSubmitFetchPersonById';

function* start() {
  yield fork(handleSubmitTitleSearch);
  yield fork(handleSubmitPersonSearch);
  yield fork(handleSubmitFetchTitleById);
  yield fork(handleSubmitFetchPersonById);
}

export default start;
