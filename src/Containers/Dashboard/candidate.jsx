import React from "react";
import BreadCrumb from "../../Components/BreadCrumb";
import CandidateProfile from "./candidateProfile";
import CandidateInfo from "./candidateInfo";
import Tabs from "../../Components/Tabs";

const Candidate = () => {
  return (
    <div>
      <BreadCrumb />
      <CandidateProfile />
      <CandidateInfo />
      <Tabs />
    </div>
  );
};

export default Candidate;
