import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  SUBMIT_FETCH_PERSON_BY_ID,
  SUBMIT_FETCH_TITLE_BY_ID,
  SUBMIT_PERSON_SEARCH,
  SUBMIT_TITLE_SEARCH,
} from '../constants/searchTypes';

class SearchBox extends Component {
  state = {
    searchMode: 2,
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

  submitSearch() {
    switch (this.state.searchMode) {
      case SUBMIT_FETCH_PERSON_BY_ID:
        this.props.onSubmitFetchPersonById(this.state.searchString);
        break;
      case SUBMIT_FETCH_TITLE_BY_ID: {
        this.props.onSubmitFetchTitleById(this.state.searchString);
        break;
      }
      case SUBMIT_PERSON_SEARCH: {
        this.props.onSubmitPersonSearch(this.state.searchString);
        break;
      }
      default: {
        this.props.onSubmitTitleSearch(this.state.searchString);
        break;
      }
    }
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
          <option value={SUBMIT_FETCH_PERSON_BY_ID}>Actor/Director By Id</option>
          <option value={SUBMIT_FETCH_TITLE_BY_ID}>Movie By Id</option>
          <option value={SUBMIT_TITLE_SEARCH}>Search Movies</option>
          <option value={SUBMIT_PERSON_SEARCH}>Search Actors/Directors</option>
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
        <button onClick={() => this.submitSearch()}>search</button>
      </div>
    );
  }
}

SearchBox.propTypes = {
  onSubmitFetchPersonById: PropTypes.func.isRequired,
  onSubmitFetchTitleById: PropTypes.func.isRequired,
  onSubmitPersonSearch: PropTypes.func.isRequired,
  onSubmitTitleSearch: PropTypes.func.isRequired,
};

export default SearchBox;
