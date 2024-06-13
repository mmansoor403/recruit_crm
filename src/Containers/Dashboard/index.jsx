import React, { useState, useEffect } from "react";
import Layout from "../../Components/Layout";
import "./dashboard.css";
import Candidate from "./candidate";
import QuickLinks from "../../Components/QuickLinks";
import Tasks from "../../Components/Tasks";
import Loader from "../../Components/Loader";
import { useDispatch } from "react-redux";
import { editCandidate } from "../../Redux/reducer/candidate";
import { SAMPLE_DATA } from "../../Constants";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(editCandidate(SAMPLE_DATA));
    const timerId = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timerId);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <Layout>
      <div className="dashboard-wrapper">
        <div className="dashboard-profile-details">
          <Candidate />
        </div>
        <div className="dashboard-notifications">
          <QuickLinks />
          <Tasks />
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
