import React from "react";
import "./breadcrumb.css";

const BreadCrumb = () => {
  return (
    <div className="breadcrumb-wrapper">
      <nav>
        <ol className="breadcrumb">
          <li className="active">Candidate Profile</li>
          <li>Robert Hardy</li>
          <li>
            <label>ID-231</label>
          </li>
        </ol>
      </nav>
      <div className="breadcrumb-button">
        <button>Request Profile Update</button>
        <button>Previous</button>
        <button>Next</button>
      </div>
    </div>
  );
};

export default BreadCrumb;
