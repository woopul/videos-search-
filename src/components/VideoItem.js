import React from "react";
import "./VideoItem.css";

const VideoItem = ({
  video,
  video: {
    snippet: { title, thumbnails }
  },
  onVideoSelect,
}) => {
  const handleClick = () => onVideoSelect(video);

  return (
    <div onClick={handleClick} className="item video-item">
    {`
      My awesome title is: 
      ${title}
    `}
      <img className="ui image" src={thumbnails.medium.url} alt="" />
      <div className="content">
        <div className="header">{title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
