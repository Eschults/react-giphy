import React, { Component } from 'react';

class Gif extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.giphyId !== nextProps.giphyId;
  }

  render() {
    const url = `https://media1.giphy.com/media/${this.props.giphyId}/giphy.gif`;

    if (!this.props.giphyId) {
      return <p>Loading...</p>;
    }

    return (
      <img
        src={url}
        alt=""
        className="gif"
        onClick={() => this.props.onListItemClick(this.props.giphyId)}
      />
    );
  }
};

export default Gif;
