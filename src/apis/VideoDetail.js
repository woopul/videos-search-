import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <div style={{ height: "50px" }} className="ui segment">
        <div className="ui active inverted dimmer">
          <div className="ui mini text loader">
            Waitng for video to be clicked...
          </div>
        </div>
      </div>
    );
  }
  
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  console.log(videoSrc);
  
  return (
    <div>
      <div className="ui embed">
        <iframe title={video.snippet.title} src={videoSrc} frameborder="0"></iframe>
      </div>
      <div className="ui segment">
        <h4 className="header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
