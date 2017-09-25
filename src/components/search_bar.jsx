import React, { Component } from 'react';

class SearchBar extends Component {
  handleChange = (event) => {
    this.props.onQueryChange(event.target.value);
  }

  render() {
    return (
      <input
        placeholder="Look for gifs!"
        className="form-control"
        onChange={this.handleChange}
      />
    );
  }
};

export default SearchBar;
