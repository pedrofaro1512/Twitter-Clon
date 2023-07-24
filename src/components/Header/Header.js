import React from "react";
import TwitterLogo from "../../assets/img/twitter-logo.png";

import "./Header.scss";

const Header = ({ isDarkMode, onDarkModeToggle }) => {
  return (
    <div className={`header ${isDarkMode ? "dark" : ""}`}>
      <img src={TwitterLogo} alt="Tweets Simulator"></img>
      <h1>Tweets Simulator</h1>

      <button
        className={`switch ${isDarkMode ? "active" : ""}`}
        onClick={onDarkModeToggle}
      >
        <span>
          <i className="fas fa-sun"></i>
        </span>
        <span>
          <i className="fas fa-moon"></i>
        </span>
      </button>
    </div>
  );
};

export default Header;
