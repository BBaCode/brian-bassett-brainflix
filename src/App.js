import "./App.css";
import Header from "./components/Header/Header";
import Video from "./components/Video/Video";
import Comments from "./components/Comments/Comments";

function App() {
  return (
    <div>
      <Header />
      <Video title="video" />
      <Comments />
    </div>
  );
}

export default App;
