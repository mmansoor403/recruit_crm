import moment from "moment/moment";
import React from "react";
import { useSelector } from "react-redux";

const CandidateInfo = () => {
  const { candidate_details: details } = useSelector(
    (state) => state.candidate
  );

  return (
    <div className="candidate-info-wrapper">
      <div className="candidate-info-left">
        <div className="candidate-info-row">
          <h3>Current Organization</h3>
          <p>{details?.currentOrganization || "-"}</p>
        </div>
        <div className="candidate-info-row">
          <h3>Skills</h3>
          <p>{details?.skills || "-"}</p>
        </div>
        <div className="candidate-info-row">
          <h3>Available From</h3>
          <p>
            {details?.available_from
              ? moment(details?.available_from).format("DD MMM, YYYY")
              : "-"}
          </p>
        </div>
        <div className="candidate-info-row">
          <h3>Current Salary</h3>
          <p>$ {details?.currentSalary || "-"}</p>
        </div>
        <div className="candidate-info-row">
          <h3>Notice Period</h3>
          <p>{details?.notice_period} Days</p>
        </div>
        <div className="candidate-info-row">
          <h3>Full Address</h3>
          <p>{details?.address || "-"}</p>
        </div>
        <div className="candidate-info-row">
          <h3>Resume</h3>
          <p>{details?.resume || "-"}</p>
        </div>
        <div className="candidate-info-row">
          <h3>Total Experience</h3>
          <p>{details?.total_experience} Years</p>
        </div>
      </div>
      <div className="candidate-info-right">
        <div className="candidate-info-row">
          <h3>Summary</h3>
          <p>{details?.summary || "-"}</p>
        </div>
        <div className="candidate-info-row">
          <h3>Current Employment Status</h3>
          <p>{details?.employment_status || "-"}</p>
        </div>
        <div className="candidate-info-row">
          <h3>Date of Birth</h3>
          <p>
            {" "}
            {details?.dob ? moment(details?.dob).format("DD MMM, YYYY") : "-"}
          </p>
        </div>
        <div className="candidate-info-row">
          <h3>Relevant Experience</h3>
          <p>{details?.relevant_experience} Years</p>
        </div>
        <div className="candidate-info-row">
          <h3>Salary Expectation</h3>
          <p>$ {details?.expected_salary}</p>
        </div>
        <div className="candidate-info-row">
          <h3>Status</h3>
          <p>{details?.status || "-"}</p>
        </div>
        <div className="candidate-info-row">
          <h3>Salary Type</h3>
          <p>{details?.salary_type || "-"}</p>
        </div>
        <div className="candidate-info-row">
          <h3>Language</h3>
          <p>{details?.language || "-"}</p>
        </div>
      </div>
    </div>
  );
};

export default CandidateInfo;
