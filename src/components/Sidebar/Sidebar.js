import "./Sidebar.scss";
import SidebarCard from "../SidebarCard/SidebarCard";

const Sidebar = ({ allVideos, currentVideo, handleVideoChange }) => {
  return (
    <section className="sidebar">
      <h3 className="sidebar__header">NEXT VIDEOS</h3>
      <ul className="sidebar__list"></ul>
      {allVideos
        .filter((video) => video.id !== currentVideo.id)
        .map((video) => {
          return (
            <SidebarCard
              key={video.id}
              id={video.id}
              image={video.image}
              title={video.title}
              channel={video.channel}
              handleVideoChange={handleVideoChange}
            />
          );
        })}
    </section>
  );
};

export default Sidebar;
