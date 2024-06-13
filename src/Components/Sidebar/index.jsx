import React from "react";
import "./sidebar.css";
import { SIDEBAR_MENUS } from "../../Constants";

const Sidebar = () => {
  return (
    <div className="sidebar-wrapper">
      {SIDEBAR_MENUS.map((item, index) => {
        return (
          <div
            className={`sidebar-icon ${index === 1 ? "active" : ""}`}
            key={index}
          >
            <img src={item.img} alt={item.name} />
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
