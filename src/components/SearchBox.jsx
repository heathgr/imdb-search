import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  FETCH_PERSON_BY_ID,
  FETCH_TITLE_BY_ID,
  PERSON_SEARCH,
  TITLE_SEARCH,
} from '../constants/searchTypes';

class SearchBox extends Component {
  state = {
    searchMode: TITLE_SEARCH,
    searchString: '',
  }

  setSearchMode(searchMode) {
    this.setState({
      ...this.state,
      searchMode,
    });
  }

  setSearchString(searchString) {
    this.setState({
      ...this.state,
      searchString,
    });
  }

  render() {
    return (
      <div style={{ display: 'flex' }}>
        <div>
          Search Type:
        </div>
        <select
          value={this.state.searchMode}
          onChange={
            (evt) => {
              this.setSearchMode(evt.target.value);
            }
          }
        >
          <option value={FETCH_PERSON_BY_ID}>Actor/Director By Id</option>
          <option value={FETCH_TITLE_BY_ID}>Movie By Id</option>
          <option value={TITLE_SEARCH}>Search Movies</option>
          <option value={PERSON_SEARCH}>Search Actors/Directors</option>
        </select>
        <input
          type='text'
          value={this.state.searchString}
          onChange={
            (evt) => {
              this.setSearchString(evt.target.value);
            }
          }
        />
        <button
          onClick={
            () => this.props.onSubmitSearch(this.state.searchString, this.state.searchMode)
          }
        >
          search
        </button>
      </div>
    );
  }
}

SearchBox.propTypes = {
  onSubmitSearch: PropTypes.func.isRequired,
};

export default SearchBox;
