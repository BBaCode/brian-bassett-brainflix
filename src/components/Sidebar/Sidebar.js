import "./Sidebar.scss";
import videoDetails from "../../data/video-details.json";
import SidebarCard from "../SidebarCard/SidebarCard";

const video1 = videoDetails[1];

const Sidebar = () => {
  return (
    <section className="sidebar">
      <h3 className="sidebar-header">NEXT VIDEOS</h3>
      <SidebarCard />
      <SidebarCard />
      <SidebarCard />
      <SidebarCard />
      <SidebarCard />
      <SidebarCard />
      <SidebarCard />
      <SidebarCard />
    </section>
  );
};

export default Sidebar;
