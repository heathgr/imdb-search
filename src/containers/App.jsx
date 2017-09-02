import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SearchBox from '../components/SearchBox';
import {
  submitSearch,
} from '../actions/searchActions';

const App = props => (
  <div>
    <SearchBox
      onSubmitSearch={props.onSubmitSearch}
    />
  </div>
);

const stateToProps = () => ({

});

const dispatchToProps = dispatch => ({
  onSubmitSearch: (searchString, searchType) => { dispatch(submitSearch(searchString, searchType)); },
});

App.propTypes = {
  onSubmitSearch: PropTypes.func.isRequired,
};

export default connect(stateToProps, dispatchToProps)(App);
