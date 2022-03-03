import React from "react";

const Upload = () => {
  return (
    <div className="upload">
      <h1 className="upload__title">Upload Video</h1>
      <section className="upload__top-box">
        <div className="upload__video-box">
          <h3 className="upload__video-title">VIDEO THUMBNAIL</h3>
          <div className="upload__video-thumb"></div>
        </div>
        <form className="upload__form">
          <label for="title" className="upload__form-title">
            TITLE YOUR VIDEO
          </label>
          <input
            className="upload__form-title-input"
            name="title"
            placeholder="Add a title to your video"
          ></input>
          <label for="description" className="upload__form-description">
            ADD A VIDEO DESCRIPTION
          </label>
          <input
            className="upload__form-description-input"
            name="description"
            placeholder="Add a description of your video"
          ></input>
        </form>
      </section>
      <section className="upload__button-box">
        <button className="upload__button-publish">PUBLISH</button>
        <button className="upload__button-cancel">CANCEL</button>
      </section>
    </div>
  );
};

export default Upload;
