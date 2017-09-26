import React from 'react';

const Gif = ({ giphyId, onListItemClick }) => {
  const url = `https://media1.giphy.com/media/${giphyId}/giphy.gif`;
  return (
    <img
      src={url}
      alt=""
      className="gif"
      onClick={() => onListItemClick(giphyId)}
    />
  );
};

export default Gif;
