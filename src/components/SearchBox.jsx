import React, { Component } from 'react';
import PropTypes from 'prop-types';
import searchConfig from '../constants/searchConfig';

class SearchBox extends Component {
  state = {
    searchMode: searchConfig.default,
    searchString: '',
  }

  setSearchMode(searchMode) {
    this.setState({
      ...this.state,
      searchMode: parseInt(searchMode, 10),
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
          Search For:
        </div>
        <select
          value={this.state.searchMode}
          onChange={
            (evt) => {
              this.setSearchMode(evt.target.value);
            }
          }
        >
          {
            searchConfig.types.map(
              (type, i) => <option value={i} key={type.name}>{type.name}</option>
            )
          }
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
