import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SearchBox from '../components/SearchBox';
import ResultsTable from '../components/ResultsTable';
import { getResults } from '../reducers/root';
import { submitSearch } from '../actions/searchActions';

const App = props => (
  <div>
    <SearchBox onSubmitSearch={props.onSubmitSearch} />
    <ResultsTable results={props.results} />
  </div>
);

const stateToProps = state => ({
  results: getResults(state),
});

const dispatchToProps = dispatch => ({
  onSubmitSearch: (searchString, searchType) => { dispatch(submitSearch(searchString, searchType)); },
});

App.propTypes = {
  onSubmitSearch: PropTypes.func.isRequired,
};

export default connect(stateToProps, dispatchToProps)(App);
