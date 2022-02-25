import "./Video.scss";
import React from "react";
import videoDetails from "../../data/video-details.json";
import viewsIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";

//Still need a way to use state to cycle through and all that

// console.log(videoDetails[0].video);
const videoObj = videoDetails[0];
const videoDate = new Date(videoObj.timestamp);
const finalDate =
  videoDate.getDate() +
  "/" +
  (videoDate.getMonth() + 1) +
  "/" +
  videoDate.getFullYear();
// console.log(finalDate);

const Video = () => {
  return (
    <section className="video">
      <video className="video-hero" controls poster={videoObj.image}></video>
      <div className="video-info">
        <div className="video-box video-title">
          <h2 className="video-title-item">{videoObj.title}</h2>
        </div>
        <div className="video-box video-details">
          {/* container for all info under Video title */}
          <div className="video-details-left">
            <h3 className="video-details-header video-details-header--bold">
              By {videoObj.channel}
            </h3>
            <h3 className="video-details-header">{finalDate}</h3>
          </div>
          <div className="video-details-right">
            <div className="video-icon-box">
              <img className="video-icon" src={viewsIcon} alt="views icon" />
              <h3 className="video-details-header">{videoObj.views}</h3>
            </div>
            <div className="video-icon-box">
              <img className="video-icon" src={likesIcon} alt="likes icon" />
              <h3 className="video-details-header">{videoObj.likes}</h3>
            </div>
          </div>
        </div>
        <div className="video-box video-description video-box--borderless">
          <p className="video-description-paragraph">{videoObj.description}</p>
        </div>
      </div>
    </section>
  );
};

export default Video;
