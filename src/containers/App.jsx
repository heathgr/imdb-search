import React from 'react';
import { connect } from 'react-redux';
import SearchBox from '../components/SearchBox';
import {
  submitFetchPersonById,
  submitFetchTitleById,
  submitPersonSearch,
  submitTitleSearch,
} from '../actions/searchActions';

const App = props => (
  <div>
    <SearchBox
      onSubmitFetchPersonById={props.onSubmitFetchPersonById}
      onSubmitFetchTitleById={props.onSubmitFetchTitleById}
      onSubmitPersonSearch={props.onSubmitPersonSearch}
      onSubmitTitleSearch={props.onSubmitTitleSearch}
    />
  </div>
);

const stateToProps = () => ({

});

const dispatchToProps = dispatch => ({
  onSubmitFetchPersonById: (id) => { dispatch(submitFetchPersonById(id)); },
  onSubmitFetchTitleById: (id) => { dispatch(submitFetchTitleById(id)); },
  onSubmitPersonSearch: (person) => { dispatch(submitPersonSearch(person)); },
  onSubmitTitleSearch: (title, year) => { dispatch(submitTitleSearch(title, year)); },
});

export default connect(stateToProps, dispatchToProps)(App);
