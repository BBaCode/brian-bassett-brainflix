import "./App.css";
import Header from "./components/Header/Header";
import Video from "./components/Video/Video";
import Comments from "./components/Comments/Comments";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div>
      <Header />
      <Video />
      <Comments />
      <Sidebar />
    </div>
  );
}

export default App;
