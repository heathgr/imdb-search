import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SearchBox from '../components/SearchBox';
import ResultsTable from '../components/ResultsTable';
import PageSelector from '../components/PageSelector';
import { getResults, getSearchType, getResultCount, getSearchPage } from '../reducers/root';
import { submitSearch, submitSearchPage } from '../actions/searchActions';

const App = props => (
  <div>
    <h1 className='flexRow strikethrough'>IMDB Search</h1>
    <h1 className='flexRow'>Star Wars Search</h1>
    <SearchBox onSubmitSearch={props.onSubmitSearch} />
    <ResultsTable results={props.results} searchType={props.searchType} />
    <PageSelector
      resultCount={props.resultCount}
      searchPage={props.searchPage}
      onSubmitSearchPage={props.onSubmitSearchPage}
    />
  </div>
);

const stateToProps = state => ({
  results: getResults(state),
  resultCount: getResultCount(state),
  searchType: getSearchType(state),
  searchPage: getSearchPage(state),
});

const dispatchToProps = dispatch => ({
  onSubmitSearch: (searchString, searchType) => { dispatch(submitSearch(searchString, searchType)); },
  onSubmitSearchPage: (searchPage) => { dispatch(submitSearchPage(searchPage)); },
});

App.propTypes = {
  results: PropTypes.array.isRequired,
  resultCount: PropTypes.number.isRequired,
  searchType: PropTypes.number.isRequired,
  searchPage: PropTypes.number.isRequired,
  onSubmitSearch: PropTypes.func.isRequired,
  onSubmitSearchPage: PropTypes.func.isRequired,
};

export default connect(stateToProps, dispatchToProps)(App);
