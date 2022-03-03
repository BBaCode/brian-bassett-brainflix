import "./App.scss";
import PageHeader from "./components/PageHeader/PageHeader";
import Video from "./components/Video/Video";
import VideoInfo from "./components/VideoInfo/VideoInfo";
import Comments from "./components/Comments/Comments";
import Sidebar from "./components/Sidebar/Sidebar";
import React from "react";
import videoDetails from "./data/video-details.json";
import HomePage from "./components/HomePage/HomePage";

class App extends React.Component {
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
        <PageHeader />

        <HomePage />
      </div>
    );
  }
}

export default App;
