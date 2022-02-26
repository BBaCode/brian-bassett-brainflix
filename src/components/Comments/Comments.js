import "./Comments.scss";
import React from "react";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import commentIcon from "../../assets/icons/add_comment.svg";
import CommentCard from "../CommentCard/CommentCard";

const Comments = ({ allVideos, currentVideo, handleVideoChange }) => {
  return (
    <section className="comments">
      <h3 className="comments-header">3 Comments</h3>
      <div className="comments-container">
        <img
          className="comments-avatar comments-avatar-form"
          alt="man looking to the left"
          src={avatar}
        />
        <form id="form" className="comments-form">
          <label for="comment" className="comments-label">
            JOIN THE CONVERSATION
          </label>
          <div className="comments-form-box">
            <input
              type="text"
              id="comment"
              name="comment"
              className="comments-field"
              placeholder="Add a new comment"
            />

            <div className="comments-button-box">
              <img
                src={commentIcon}
                className="comments-icon"
                alt="comment icon"
              />
              <button
                type="submit"
                id="button"
                name="button"
                className="comments-button"
              >
                COMMENT
              </button>
            </div>
          </div>
        </form>
      </div>
      {allVideos
        .filter((video) => video.id === currentVideo.id)
        .map((video) => {
          return (
            <CommentCard
              key={video.id}
              id={video.id}
              name={video.comments[0].name}
              timestamp={video.comments[0].timestamp}
              comment={video.comments[0].comment}
              handleVideoChange={handleVideoChange}
            />
          );
        })}
      {allVideos
        .filter((video) => video.id === currentVideo.id)
        .map((video) => {
          return (
            <CommentCard
              key={video.id}
              id={video.id}
              name={video.comments[1].name}
              timestamp={video.comments[1].timestamp}
              comment={video.comments[1].comment}
              handleVideoChange={handleVideoChange}
            />
          );
        })}
      {allVideos
        .filter((video) => video.id === currentVideo.id)
        .map((video) => {
          return (
            <CommentCard
              key={video.id}
              id={video.id}
              name={video.comments[2].name}
              timestamp={video.comments[2].timestamp}
              comment={video.comments[2].comment}
              handleVideoChange={handleVideoChange}
            />
          );
        })}
    </section>
  );
};

export default Comments;
