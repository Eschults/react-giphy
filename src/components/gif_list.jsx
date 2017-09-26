import React from 'react';
import Gif from './gif';

const GifList = (props) => {
  const renderList = () => {
    return props.gifs.map((gif) => {
      return <Gif giphyId={gif.giphyId} onListItemClick={props.selectGif} />;
    });
  };

  return (
    <div className="gif-list">
      {renderList()}
    </div>
  );
};

export default GifList;
