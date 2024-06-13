import React from "react";
import "./quick-link.css";
import notes from "../../Assets/Icons/notes.svg";
import attend from "../../Assets/Icons/attend.svg";
import tick from "../../Assets/Icons/tick.svg";
import calendar from "../../Assets/Icons/calendar.svg";

const QuickLinks = () => {
  return (
    <div className="quick-link-wrapper">
      <div>
        <img src={notes} alt="notes" />
      </div>
      <div>
        <img src={attend} alt="attend" />
      </div>
      <div>
        <img src={tick} alt="tick" />
      </div>
      <div>
        <img src={calendar} alt="calendar" />
      </div>
    </div>
  );
};

export default QuickLinks;
