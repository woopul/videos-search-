import React from "react";
import VideoItem from "./VideoItem";

const ViedoList = ({ videos, onVideoSelect }) => {
  const renderList = () => videos.map((video, index) => (
    <VideoItem
      onVideoSelect={onVideoSelect}
      key={index}
      video={video}
    />
  ));

  return <div className="ui relaxed divided list">{renderList()}</div>;
};

export default ViedoList;
