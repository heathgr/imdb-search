import 'babel-polyfill';
import { fork } from 'redux-saga/effects/';
import handleSubmitSearch from './handleSubmitSearch';

function* start() {
  yield fork(handleSubmitSearch);
}

export default start;
