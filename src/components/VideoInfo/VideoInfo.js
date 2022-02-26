import "./VideoInfo.scss";
import React from "react";
import videoDetails from "../../data/video-details.json";
import viewsIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";

const VideoInfo = (props) => {
  const commentItem = props.currentVideo.timestamp;

  const commentDate = new Date(commentItem);
  const finalDate =
    commentDate.getMonth() +
    1 +
    "/" +
    commentDate.getDate() +
    "/" +
    commentDate.getFullYear();

  return (
    <div className="video-info">
      <div className="video-box video-title">
        <h1 className="video-title-item">{props.currentVideo.title}</h1>
      </div>
      <div className="video-box video-details">
        {/* container for all info under Video title */}
        <div className="video-details-left">
          <h3 className="video-details-header video-details-header--bold">
            By {props.currentVideo.channel}
          </h3>
          <h3 className="video-details-header">{finalDate}</h3>
        </div>
        <div className="video-details-right">
          <div className="video-icon-box">
            <img className="video-icon" src={viewsIcon} alt="views icon" />
            <h3 className="video-details-header">{props.currentVideo.views}</h3>
          </div>
          <div className="video-icon-box">
            <img
              className="video-icon video-icon--margin-left"
              src={likesIcon}
              alt="likes icon"
            />
            <h3 className="video-details-header">{props.currentVideo.likes}</h3>
          </div>
        </div>
      </div>
      <div className="video-box video-description video-box--borderless">
        <p className="video-description-paragraph">
          {props.currentVideo.description}
        </p>
      </div>
    </div>
  );
};

export default VideoInfo;
