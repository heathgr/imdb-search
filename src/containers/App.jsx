import React from 'react';
import { connect } from 'react-redux';
import {
  submitFetchPersonById,
  submitFetchTitleById,
  submitPersonSearch,
  submitTitleSearch,
} from '../actions/searchActions';

const App = props => {
  return <div>Welcome to Imdb Search</div>
};

const stateToProps = () => ({

});

const dispatchToProps = dispatch => ({
  onSubmitFetchPersonById: (id) => { dispatch(submitFetchPersonById(id)); },
  onSubmitFetchTitleById: (id) => { dispatch(submitFetchTitleById(id)); },
  onSubmitPersonSearch: (person) => { dispatch(submitPersonSearch(person)); },
  onSubmitTitleSearch: (title, year) => { dispatch(submitTitleSearch(title, year)); },
});

export default connect(stateToProps, dispatchToProps)(App);
