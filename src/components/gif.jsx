import React from 'react';

const Gif = (props) => {
  const url = `https://media1.giphy.com/media/${props.giphyId}/giphy.gif`;
  return (
    <img
      src={url}
      alt=""
      className="gif"
      onClick={() => props.onListItemClick(props.giphyId)}
    />
  );
};

export default Gif;
