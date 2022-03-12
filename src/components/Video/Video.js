import "./Video.scss";
import React from "react";

const Video = ({ currentVideo }) => {
  return (
    <section className="video">
      <div className="video__hero-box">
        <video
          className="video__hero"
          controls
          poster={currentVideo.image}
        ></video>
      </div>
    </section>
  );
};

export default Video;
