import "./PageHeader.scss";
import logo from "../../assets/logos/BrainFlix-logo.svg";
import searchIcon from "../../assets/icons/search.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import uploadIcon from "../../assets/icons/upload.svg";
import { Link } from "react-router-dom";

const PageHeader = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <section className="header__top">
          <Link to="/">
            <img src={logo} alt="play button" className="header__logo" />
          </Link>
        </section>
        <section className="header__middle">
          <div className="header__search">
            <img
              src={searchIcon}
              alt="search button"
              s
              className="header__search-icon"
            />
            <h3 className="header__search-text">Search</h3>
          </div>
          <img src={avatar} alt="avatar" className="header__avatar" />
        </section>

        <Link to="/upload">
          <section className="header__bottom">
            <img
              src={uploadIcon}
              className="header__upload-icon"
              alt="upload"
            />
            <button className="header__button">UPLOAD</button>
          </section>
        </Link>

        <img src={avatar} alt="avatar" className="header__avatar-tablet" />
      </nav>
    </header>
  );
};

export default PageHeader;
