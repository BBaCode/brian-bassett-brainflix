import "./VideoInfo.scss";
import React from "react";
import viewsIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";

const VideoInfo = ({ currentVideo }) => {
  const commentItem = currentVideo.timestamp;
  const commentDate = new Date(commentItem);
  const finalDate =
    commentDate.getMonth() +
    1 +
    "/" +
    commentDate.getDate() +
    "/" +
    commentDate.getFullYear();

  return (
    <div className="video__info">
      <div className="video__box video__title">
        <h1 className="video__title-item">{currentVideo.title}</h1>
      </div>
      <div className="video__box video__details">
        {/* container for all info under Video title */}
        <div className="video__details-left">
          <h3 className="video__details-header video__details-header--bold">
            By {currentVideo.channel}
          </h3>
          <h3 className="video__details-header">{finalDate}</h3>
        </div>
        <div className="video__details-right">
          <div className="video__icon-box">
            <img className="video__icon" src={viewsIcon} alt="views icon" />
            <h3 className="video__details-header">{currentVideo.views}</h3>
          </div>
          <div className="video__icon-box">
            <img
              className="video__icon video__icon--margin-left"
              src={likesIcon}
              alt="likes icon"
            />
            <h3 className="video__details-header">{currentVideo.likes}</h3>
          </div>
        </div>
      </div>
      <div className="video__box video__description video__box--borderless">
        <p className="video__description-paragraph">
          {currentVideo.description}
        </p>
      </div>
    </div>
  );
};

export default VideoInfo;
