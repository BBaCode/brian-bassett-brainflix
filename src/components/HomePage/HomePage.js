import Video from "../Video/Video";
import VideoInfo from "../VideoInfo/VideoInfo";
import Comments from "../Comments/Comments";
import Sidebar from "../Sidebar/Sidebar";
import React from "react";
import videoDetails from "../../data/video-details.json";
import "./HomePage.scss";

class HomePage extends React.Component {
  state = {
    allVideos: videoDetails,
    currentVideo: videoDetails[0],
  };

  handleVideoChange = (id) => {
    const newVideoId = this.state.allVideos.findIndex(
      (video) => id === video.id
    );
    this.setState({ currentVideo: this.state.allVideos[newVideoId] });
  };

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
            <Comments
              allVideos={this.state.allVideos}
              currentVideo={this.state.currentVideo}
            />
          </div>
          <Sidebar
            allVideos={this.state.allVideos}
            currentVideo={this.state.currentVideo}
            handleVideoChange={this.handleVideoChange}
          />
        </div>
      </div>
    );
  }
}

export default HomePage;