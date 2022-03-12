import Video from "../../components/Video/Video";
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import Comments from "../../components/Comments/Comments";
import Sidebar from "../../components/Sidebar/Sidebar";
import React from "react";

import "./HomePage.scss";
import axios from "axios";

const apiKey = "?api_key=1365d1b4-93fa-4711-a0e7-dba819fc6bde";
const apiURL = "https://project-2-api.herokuapp.com/videos/";

class HomePage extends React.Component {
  state = {
    allVideos: [],
    currentVideo: {},
    comments: [],
  };

  getVideoById = (videoID) => {
    axios
      .get(apiURL + videoID + apiKey)
      .then((response) => {
        this.setState({
          currentVideo: response.data,
          comments: response.data.comments,
        });
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    axios
      .get(apiURL + apiKey)
      // .get("http://localhost:5050/videos")
      .then((response) => {
        const allVideos = response.data;

        this.setState({ allVideos: allVideos });
        const videoID = this.props.match.params.videoID || response.data[0].id;
        this.getVideoById(videoID);
      })
      .catch((err) => console.log(err));
  }

  componentDidUpdate(prevProps, prevState) {
    const videoID =
      this.props.match.params.videoID || this.state.allVideos[0].id;
    if (prevState.currentVideo && prevState.currentVideo.id !== videoID) {
      this.getVideoById(videoID);
    }
  }

  render() {
    return (
      <div>
        <Video
          allVideos={this.state.allVideos}
          currentVideo={this.state.currentVideo}
        />
        <div className="div-box">
          <div className="div__video-comments">
            <VideoInfo
              allVideos={this.state.allVideos}
              currentVideo={this.state.currentVideo}
            />
            <Comments comments={this.state.comments} />
          </div>
          <Sidebar
            allVideos={this.state.allVideos}
            currentVideo={this.state.currentVideo}
          />
        </div>
      </div>
    );
  }
}

export default HomePage;
