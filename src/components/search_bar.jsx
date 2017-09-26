import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  shouldComponentUpdate(nextProps, nextState) {
    this.state.term !== nextState.term;
  }

  handleChange = (event) => {
    this.setState({ term: event.target.value.toUpperCase() });
    this.props.onQueryChange(this.state.term);
  }

  render() {
    debugger
    return (
      <input
        value={this.state.term}
        placeholder="Look for gifs!"
        className="form-control"
        onChange={this.handleChange}
      />
    );
  }
};

export default SearchBar;
