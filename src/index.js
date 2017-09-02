import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import App from './containers/App';
import root from './reducers/root';
import start from './sagas/start';

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(
  root,
  compose(
    applyMiddleware(sagaMiddleWare),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);
const { dispatch } = store;

function render(Component) {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  );
}

function onStateUpdate() {
  render(App);
}

window.onload = () => {
  store.subscribe(onStateUpdate);
  sagaMiddleWare.run(start);
  onStateUpdate();
};

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./containers/App', () => {
    render(App);
  });
}
