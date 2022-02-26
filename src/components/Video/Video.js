import "./Video.scss";
import React from "react";

const Video = ({ currentVideo }) => {
  return (
    <section className="video">
      <div className="video-hero-box">
        <video
          className="video-hero"
          controls
          poster={currentVideo.image}
        ></video>
      </div>
    </section>
  );
};

export default Video;
