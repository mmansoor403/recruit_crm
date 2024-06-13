import React from "react";
import "./header.css";
import search from "../../Assets/Icons/search.svg";
import logo from "../../Assets/Icons/logo.svg";
import add from "../../Assets/Icons/add.svg";
import gift from "../../Assets/Icons/gift.svg";
import mail from "../../Assets/Icons/mail.svg";
import notifications from "../../Assets/Icons/notification.svg";
import profile from "../../Assets/Icons/profile.png";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="search-wrapper">
        <div className="header-input">
          <img src={search} alt="search" />
          <input type="text" name="search" placeholder="Search Pipedrive" />
        </div>
      </div>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="profile-wrapper">
        <div className="quick-actions">
          <img src={add} alt="add" className="bordered-img" />
          <img src={gift} alt="gift" />
          <img src={mail} alt="mail" />
          <img src={notifications} alt="notifications" />
        </div>
        <div className="profile-card">
          <div>
            <img src={profile} alt="profile" />
          </div>
          <div className="profile-content">
            <h3>Phyllis Yang</h3>
            <p>Silicon Links Inc</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
