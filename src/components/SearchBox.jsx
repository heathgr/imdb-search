import React, { Component } from 'react';
import PropTypes from 'prop-types';

const SUBMIT_FETCH_PERSON_BY_ID = 0;
const SUBMIT_FETCH_TITLE_BY_ID = 1;
const SUBMIT_PERSON_SEARCH = 2;
const SUBMIT_TITLE_SEARCH = 3;

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
          Search By:
        </div>
        <select
          value={this.state.searchMode}
          onChange={
            (evt) => {
              const searchMode = parseInt(evt.target.value, 10);

              this.setSearchMode(searchMode);
            }
          }
        >
          <option value={0}>Actor/Director By Id</option>
          <option value={1}>Movie By Id</option>
          <option value={2}>Search Movies</option>
          <option value={3}>Search Actors/Directors</option>
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
