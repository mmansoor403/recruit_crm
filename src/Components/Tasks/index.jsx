import React, { useState } from "react";
import "./tasks.css";
import notes from "../../Assets/Icons/notes.svg";
import profile from "../../Assets/Icons/sec-profile.svg";
import time from "../../Assets/Icons/time.svg";
import { TOTAL_TASKS } from "../../Constants";

const Tasks = () => {
  const TAB_HEADERS = [
    {
      name: "All",
      value: "all",
    },
    {
      name: "Notes & Calls",
      value: "notes",
    },
    {
      name: "Related Emails",
      value: "related_emails",
    },
    {
      name: "Tasks",
      value: "tasks",
    },
    {
      name: "Meetings",
      value: "meetings",
    },
    {
      name: "Files",
      value: "files",
    },
  ];

  const [active, setActive] = useState({
    name: "All",
    value: "all",
  });

  const tabChangeHandler = (val) => {
    setActive(val);
  };

  return (
    <div className="tasks-wrapper">
      <div className="task-nav">
        {TAB_HEADERS.map((item, index) => {
          return (
            <p
              key={index}
              className={item.value === active.value ? "active" : ""}
              onClick={() => tabChangeHandler(item)}
            >
              {item.name}
            </p>
          );
        })}
      </div>
      <div className="task-content-wrapper">
        {active.value === "all" ? (
          <div>
            {TOTAL_TASKS.map((item, index) => {
              return (
                <div className="task-list" key={index}>
                  <div className="task-head">
                    <div>
                      <img src={notes} alt="note" />
                    </div>
                    <label>Note</label>
                    <span>{item?.status}</span>
                  </div>
                  <div className="task-body">
                    <p>{item?.description}</p>
                    <span>{item?.no_of_association} Association(s)</span>
                  </div>
                  <div className="task-footer">
                    <div>
                      <img src={profile} alt="profile" />
                      <p>{item?.name}</p>
                    </div>
                    <div>
                      <img src={time} alt="time" />
                      <p>{item?.time}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <h3>{active.name}</h3>
        )}
      </div>
    </div>
  );
};

export default Tasks;
