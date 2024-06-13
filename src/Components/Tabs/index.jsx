import React, { useState } from "react";
import profile from "../../Assets/Icons/M.svg";
import secProfile from "../../Assets/Icons/sec-profile.svg";
import time from "../../Assets/Icons/time.svg";
import "./tabs.css";
import { useSelector } from "react-redux";

const Tabs = () => {
  const [active, setActive] = useState({
    name: "Assigned Jobs",
    value: "assigned_jobs",
  });

  const { candidate_details: details } = useSelector(
    (state) => state.candidate
  );

  const TAB_HEADERS = [
    {
      name: "All Details",
      value: "all_details",
    },
    {
      name: "Assigned Jobs",
      value: "assigned_jobs",
    },
    {
      name: "Related Emails",
      value: "related_emails",
    },
    {
      name: "Candidate Questions",
      value: "candiate_questions",
    },
    {
      name: "Hotlists",
      value: "hotlists",
    },
    {
      name: "Related Deals",
      value: "related_deals",
    },
    {
      name: "Contact(s) Pitched",
      value: "contacts",
    },
  ];

  const tabChangeHandler = (val) => {
    setActive(val);
  };

  return (
    <div className="tabs-wrapper">
      <div className="nav-tabs">
        {TAB_HEADERS.map((item, index) => {
          const { name, value } = item;
          return (
            <div
              key={index}
              className={value === active.value ? "active" : ""}
              onClick={() => tabChangeHandler(item)}
            >
              <h3>{name}</h3>
            </div>
          );
        })}
      </div>
      <div className="nav-content-wrapper">
        {active.value === "assigned_jobs" ? (
          <div>
            <div className="tabs-content-header">
              <p>Assigned Job to William Sample</p>
              <div>
                <button>Assign To Job</button>
                <button>View All Assigned Jobs</button>
              </div>
            </div>
            <div className="tabs-content-body">
              {details?.assignedJobs.length !== 0 &&
                details?.assignedJobs.map((item, index) => {
                  return (
                    <div className="tab-card" key={index}>
                      <div className="front-info">
                        <div>
                          <img src={profile} alt="profile" />
                        </div>
                        <div>
                          <h3>{details?.designation}</h3>
                          <p>Recruit CRM</p>
                        </div>
                      </div>
                      <div>
                        <p>
                          <div>
                            {" "}
                            <img src={secProfile} alt="" />
                          </div>{" "}
                          <div>{details?.name}</div>
                        </p>
                        <p>
                          <div>
                            <img src={time} alt="" />
                          </div>
                          <div> {item.timeStamp}</div>
                        </p>
                      </div>
                      <div>
                        <span>{item.type}</span>
                      </div>
                      <div>
                        <button>View Files</button>
                      </div>
                      <div>
                        <label class="switch">
                          <input type="checkbox" />
                          <span class="slider round"></span>
                        </label>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        ) : (
          <h3>{active.name}</h3>
        )}
      </div>
    </div>
  );
};

export default Tabs;
