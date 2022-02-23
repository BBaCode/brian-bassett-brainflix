// Header - flex
// div - logo and header for BrainFlix
// div search bar and avatar
// button and absolute image
import "./Header.scss";
import logo from "../../assets/logos/BrainFlix-logo.svg";
import searchIcon from "../../assets/icons/search.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import uploadIcon from "../../assets/icons/upload.svg";

const Header = (props) => {
  return (
    <header className="header">
      <nav className="header-nav">
        <section className="header-top">
          <img src={logo} alt="play button" className="header-logo" />
        </section>
        <section className="header-middle">
          <div className="header-search">
            <img
              src={searchIcon}
              alt="search button"
              s
              className="header-search-icon"
            />
            <h3 className="header-search-text">Search</h3>
          </div>
          <img src={avatar} alt="avatar" className="header-avatar" />
        </section>
        {/* <img src={avatar} alt="avatar" className="header-avatar" /> */}
        <section className="header-bottom">
          <img src={uploadIcon} className="header-upload-icon" alt="upload" />

          <button className="header-button">UPLOAD</button>
        </section>
      </nav>
    </header>
  );
};

export default Header;
