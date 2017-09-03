import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SearchBox from '../components/SearchBox';
import ResultsTable from '../components/ResultsTable';
import { getResults, getSearchType } from '../reducers/root';
import { submitSearch } from '../actions/searchActions';

const App = props => (
  <div>
    <SearchBox onSubmitSearch={props.onSubmitSearch} />
    <ResultsTable results={props.results} searchType={props.searchType} />
  </div>
);

const stateToProps = state => ({
  results: getResults(state),
  searchType: getSearchType(state),
});

const dispatchToProps = dispatch => ({
  onSubmitSearch: (searchString, searchType) => { dispatch(submitSearch(searchString, searchType)); },
});

App.propTypes = {
  searchType: PropTypes.number.isRequired,
  onSubmitSearch: PropTypes.func.isRequired,
};

export default connect(stateToProps, dispatchToProps)(App);
