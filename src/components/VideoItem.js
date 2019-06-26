import React from "react";
import "./VideoItem.css";

const VideoItem = ({
  onVideoSelect,
  video,
  video: {
    snippet: { title, thumbnails }
  },
}) => {
  const handleClick = () => onVideoSelect(video);

  return (
    <div onClick={handleClick} className="item video-item">
      <img className="ui image" src={thumbnails.medium.url} alt="" />
      <div className="content">
        <div className="header">{title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
