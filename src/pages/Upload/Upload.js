import React from "react";
import axios from "axios";
import "./Upload.scss";
import previewImage from "../../assets/images/Upload-video-preview.jpg";
import publishIcon from "../../assets/icons/publish.svg";
import { Redirect } from "react-router-dom";

class Upload extends React.Component {
  state = {
    redirectHome: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert("Video Submitted");
    this.setState({ redirectHome: true });
    // axios
    //   .post("api/videos", {
    //     title: e.target.title.value,
    //     description: e.target.description.value,
    //     image: "",
    //     channel: e.target.channel.value,
    //   })
    //   .then((res) => {
    //     this.props.history.push(`/video/${res.data}`);
    //   });
  };

  render() {
    const redirectToHome = this.state.redirectHome;
    if (redirectToHome) {
      return <Redirect to="/" />;
    }

    return (
      <div className="upload">
        <h1 className="upload__title">Upload Video</h1>
        <section className="upload__top-box">
          <div className="upload__video-box">
            <h3 className="upload__video-title">VIDEO THUMBNAIL</h3>
            <img
              src={previewImage}
              className="upload__video-thumb"
              alt="thumbnail"
            />
          </div>
          <form onSubmit={this.handleSubmit} className="upload__form">
            <label for="title" className="upload__form-label">
              TITLE YOUR VIDEO
            </label>
            <input
              className="upload__form-input upload__form-input-title"
              name="title"
              placeholder="Add a title to your video"
            ></input>
            <label for="description" className="upload__form-label">
              ADD A VIDEO DESCRIPTION
            </label>
            <input
              className="upload__form-input upload__form-input-description"
              name="description"
              placeholder="Add a description of your video"
            ></input>
            <section className="upload__button-box">
              <div className="upload__button-top">
                <img
                  className="upload__button-icon"
                  src={publishIcon}
                  alt="publish"
                />
                <button className="upload__button-publish">PUBLISH</button>
              </div>

              <div className="upload__button-bottom">
                <button className="upload__button-cancel">CANCEL</button>
              </div>
            </section>
          </form>
        </section>
      </div>
    );
  }
}

export default Upload;
