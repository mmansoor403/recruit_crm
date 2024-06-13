import React, { useState } from "react";
import profile from "../../Assets/Icons/profile-icon.svg";
import facebook from "../../Assets/Icons/facebook.svg";
import twitter from "../../Assets/Icons/twitter.svg";
import linkedin from "../../Assets/Icons/linkedin.svg";
import github from "../../Assets/Icons/github.svg";
import kay from "../../Assets/Icons/kay.svg";
import star from "../../Assets/Icons/star.svg";
import fire from "../../Assets/Icons/fire.svg";
import edit from "../../Assets/Icons/edit.svg";
import options from "../../Assets/Icons/options.svg";
import mail from "../../Assets/Icons/sec-mail.svg";
import call from "../../Assets/Icons/call.svg";
import time from "../../Assets/Icons/time.svg";
import smallProfile from "../../Assets/Icons/sec-profile.svg";
import { useSelector, useDispatch } from "react-redux";
import Modal from "../../Components/Modal";
import { editCandidate } from "../../Redux/reducer/candidate";
import { toast } from "react-toastify";

const CandidateProfile = () => {
  const { candidate_details: details } = useSelector(
    (state) => state.candidate
  );
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);
  const [formValues, setFormValues] = useState(details);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formValues.name) newErrors.name = "Full name is required";
    if (!formValues.designation)
      newErrors.designation = "Designation is required";
    if (!formValues.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formValues.email))
      newErrors.email = "Email is invalid";
    if (!formValues.phone) newErrors.phone = "Phone number is required";
    if (!formValues.city) newErrors.city = "City is required";
    if (!formValues.country) newErrors.country = "Country is required";
    if (!formValues.currentOrganization)
      newErrors.currentOrganization = "Current Organization is required";
    if (!formValues.skills) newErrors.skills = "Skills is required";
    if (!formValues.available_from)
      newErrors.available_from = "Available from is required";
    if (!formValues.currentSalary)
      newErrors.currentSalary = "Current Salary is required";
    if (!formValues.notice_period)
      newErrors.notice_period = "Notice period is required";
    if (!formValues.address) newErrors.address = "Address is required";
    if (!formValues.total_experience)
      newErrors.total_experience = "Total experience is required";
    if (!formValues.summary) newErrors.summary = "Summary is required";
    if (!formValues.employment_status)
      newErrors.employment_status = "Employment status is required";
    if (!formValues.dob) newErrors.dob = "Date of Birth is required";
    if (!formValues.relevant_experience)
      newErrors.relevant_experience = "Relevant experience is required";
    if (!formValues.expected_salary)
      newErrors.expected_salary = "Expected salary is required";
    if (!formValues.status) newErrors.status = "Status is required";
    if (!formValues.salary_type)
      newErrors.salary_type = "Salary type is required";
    if (!formValues.language) newErrors.language = "Language is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(editCandidate(formValues));
      setIsVisible(false);
      toast.success("Candidate info updated successfully");
    }
  };

  return (
    <>
      <div className="candidate-profile-wrapper">
        <div className="candidate-primary-details">
          <div className="candidate-left-wrapper">
            <div className="candidate-profile-icon">
              <img src={profile} alt="profile" />
            </div>
            <div className="candidate-content">
              <h3>
                <span> {details?.name} </span>
                <span>
                  {details?.links.map((item) => {
                    return (
                      <img
                        src={
                          item.name === "fb"
                            ? facebook
                            : item.name === "twitter"
                            ? twitter
                            : item.name === "github"
                            ? linkedin
                            : item.name === "linkedin"
                            ? github
                            : kay
                        }
                        alt={item.name}
                      />
                    );
                  })}
                </span>
              </h3>
              <p>
                {details?.designation}
                <span>{details?.country}</span>
                <span>{details?.city}</span>
              </p>
            </div>
          </div>
          <div className="candidate-right-wrapper">
            {details?.isLinked && <label>Contact Linked</label>}
            <div className="option-wrapper">
              <img src={star} alt="star" />
              <img src={fire} alt="fire" />
              <img src={edit} alt="edit" onClick={() => setIsVisible(true)} />
              <img src={options} alt="options" />
            </div>
          </div>
        </div>
        <div className="candidate-secondary-details">
          <div className="candidate-secondary-left">
            <div>
              <img src={mail} alt="mail" />
              <label>{details?.email}</label>
            </div>
            <div>
              <img src={call} alt="call" />
              <label>{details?.phone}</label>
            </div>
          </div>
          <div className="candidate-secondary-right">
            <div>
              <img src={smallProfile} alt="mail" />
              <label>{details?.crm_candidate}</label>
            </div>
            <div>
              <img src={time} alt="call" />
              <label>{details?.created_at}</label>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        title="Candidate Info"
        onSubmit={handleSubmit}
      >
        <div className="form-container">
          <div className="modal-body-form">
            <p>
              <b>Personal Information</b>
            </p>
            <div className="form-row">
              <div>
                <label>Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Full Name"
                  value={formValues.name}
                  onChange={handleInputChange}
                  className={errors.name ? "error" : ""}
                />
                {errors.name && (
                  <span className="error-message">{errors.name}</span>
                )}
              </div>
              <div>
                <label>Designation</label>
                <input
                  type="text"
                  id="designation"
                  name="designation"
                  placeholder="Designation"
                  value={formValues.designation}
                  onChange={handleInputChange}
                  className={errors.designation ? "error" : ""}
                />
                {errors.designation && (
                  <span className="error-message">{errors.designation}</span>
                )}
              </div>
              <div>
                <label>Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email address"
                  value={formValues.email}
                  onChange={handleInputChange}
                  className={errors.email ? "error" : ""}
                />
                {errors.email && (
                  <span className="error-message">{errors.email}</span>
                )}
              </div>
            </div>
            <div className="form-row">
              <div>
                <label>Mobile Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Phone number"
                  value={formValues.phone}
                  onChange={handleInputChange}
                  className={errors.phone ? "error" : ""}
                />
                {errors.phone && (
                  <span className="error-message">{errors.phone}</span>
                )}
              </div>
              <div>
                <label>City</label>
                <select
                  id="city"
                  name="city"
                  value={formValues.city}
                  onChange={handleInputChange}
                  className={errors.city ? "error" : ""}
                >
                  <option value="" disabled>
                    Select City
                  </option>
                  <option value="dallas">Dallas</option>
                </select>
                {errors.city && (
                  <span className="error-message">{errors.city}</span>
                )}
              </div>
              <div>
                <label>Country</label>
                <select
                  id="country"
                  name="country"
                  value={formValues.country}
                  onChange={handleInputChange}
                  className={errors.country ? "error" : ""}
                >
                  <option value="" disabled>
                    Select Country
                  </option>
                  <option value="United States">United States</option>
                </select>
                {errors.country && (
                  <span className="error-message">{errors.country}</span>
                )}
              </div>
            </div>
            <div>
              <p>
                <b>Employment Information</b>
              </p>
              <div className="form-row">
                <div>
                  <label>Current Organization</label>
                  <input
                    type="text"
                    id="currentOrganization"
                    name="currentOrganization"
                    placeholder="Current Organization"
                    value={formValues.currentOrganization}
                    onChange={handleInputChange}
                    className={errors.currentOrganization ? "error" : ""}
                  />
                  {errors.currentOrganization && (
                    <span classcurrentOrganization="error-message">
                      {errors.currentOrganization}
                    </span>
                  )}
                </div>
                <div>
                  <label>Skills</label>
                  <input
                    type="text"
                    id="skills"
                    name="skills"
                    placeholder="Skills"
                    value={formValues.skills}
                    onChange={handleInputChange}
                    className={errors.skills ? "error" : ""}
                  />
                  {errors.skills && (
                    <span className="error-message">{errors.skills}</span>
                  )}
                </div>
                <div>
                  <label>Available From</label>
                  <input
                    type="date"
                    id="available_from"
                    name="available_from"
                    placeholder="Available From"
                    value={formValues.available_from}
                    onChange={handleInputChange}
                    className={errors.available_from ? "error" : ""}
                  />
                  {errors.available_from && (
                    <span className="error-message">
                      {errors.available_from}
                    </span>
                  )}
                </div>
              </div>
              <div className="form-row">
                <div>
                  <label>Current Salary</label>
                  <input
                    type="number"
                    id="currentSalary"
                    name="currentSalary"
                    placeholder="Current Salary"
                    value={formValues.currentSalary}
                    onChange={handleInputChange}
                    className={errors.currentSalary ? "error" : ""}
                  />
                  {errors.currentSalary && (
                    <span className="error-message">
                      {errors.currentSalary}
                    </span>
                  )}
                </div>
                <div>
                  <label>Notice Period</label>
                  <select
                    id="notice_period"
                    name="notice_period"
                    value={formValues.notice_period}
                    onChange={handleInputChange}
                    className={errors.notice_period ? "error" : ""}
                  >
                    <option value="" disabled>
                      Select Notice Periiod
                    </option>
                    <option value="30">30</option>
                    <option value="60">60</option>
                    <option value="90">90</option>
                  </select>
                  {errors.notice_period && (
                    <span className="error-message">
                      {errors.notice_period}
                    </span>
                  )}
                </div>
                <div>
                  <label>Address</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Address"
                    value={formValues.address}
                    onChange={handleInputChange}
                    className={errors.address ? "error" : ""}
                  />
                  {errors.address && (
                    <span className="error-message">{errors.address}</span>
                  )}
                </div>
              </div>
              <div className="form-row">
                <div>
                  <label>Total Experience</label>
                  <input
                    type="number"
                    id="total_experience"
                    name="total_experience"
                    placeholder="Total Experience"
                    value={formValues.total_experience}
                    onChange={handleInputChange}
                    className={errors.total_experience ? "error" : ""}
                  />
                  {errors.total_experience && (
                    <span className="error-message">
                      {errors.total_experience}
                    </span>
                  )}
                </div>

                <div>
                  <label>Summary</label>
                  <input
                    type="text"
                    id="summary"
                    name="summary"
                    placeholder="summary"
                    value={formValues.summary}
                    onChange={handleInputChange}
                    className={errors.summary ? "error" : ""}
                  />
                  {errors.summary && (
                    <span className="error-message">{errors.summary}</span>
                  )}
                </div>
                <div>
                  <label>Employment Status</label>
                  <select
                    id="employment_status"
                    name="employment_status"
                    value={formValues.employment_status}
                    onChange={handleInputChange}
                    className={errors.employment_status ? "error" : ""}
                  >
                    <option value="" disabled>
                      Select Employment Status
                    </option>
                    <option value="Employed">Employed</option>
                    <option value="UnEmployed">UnEmployed</option>
                  </select>
                  {errors.employment_status && (
                    <span className="error-message">
                      {errors.employment_status}
                    </span>
                  )}
                </div>
              </div>
              <div className="form-row">
                <div>
                  <label>Date of Birth</label>
                  <input
                    type="date"
                    id="dob"
                    name="dob"
                    placeholder="dob"
                    value={formValues.dob}
                    onChange={handleInputChange}
                    className={errors.dob ? "error" : ""}
                  />
                  {errors.dob && (
                    <span className="error-message">{errors.dob}</span>
                  )}
                </div>
                <div>
                  <label>Relevant Experience</label>
                  <input
                    type="number"
                    id="relevant_experience"
                    name="relevant_experience"
                    placeholder="Relevant Experience"
                    value={formValues.relevant_experience}
                    onChange={handleInputChange}
                    className={errors.relevant_experience ? "error" : ""}
                  />
                  {errors.relevant_experience && (
                    <span className="error-message">
                      {errors.relevant_experience}
                    </span>
                  )}
                </div>
                <div>
                  <label>Expected Salary</label>
                  <input
                    type="number"
                    id="expected_salary"
                    name="expected_salary"
                    placeholder="Expected Experience"
                    value={formValues.expected_salary}
                    onChange={handleInputChange}
                    className={errors.expected_salary ? "error" : ""}
                  />
                  {errors.expected_salary && (
                    <span className="error-message">
                      {errors.expected_salary}
                    </span>
                  )}
                </div>
              </div>
              <div className="form-row">
                <div>
                  <label>Status</label>
                  <select
                    id="status"
                    name="status"
                    value={formValues.status}
                    onChange={handleInputChange}
                    className={errors.status ? "error" : ""}
                  >
                    <option value="" disabled>
                      Select status
                    </option>
                    <option value="Submitted to Client">
                      {" "}
                      Submitted to Client
                    </option>
                    <option value="Rejected"> Rejected</option>
                  </select>
                  {errors.status && (
                    <span className="error-message">{errors.status}</span>
                  )}
                </div>
                <div>
                  <label>Salary Type</label>
                  <select
                    id="salary_type"
                    name="salary_type"
                    value={formValues.salary_type}
                    onChange={handleInputChange}
                    className={errors.salary_type ? "error" : ""}
                  >
                    <option value="" disabled>
                      Select salary type
                    </option>
                    <option value="Annual">Annual</option>
                    <option value="Monthlt">Monthlt</option>
                    <option value="Daily">Daily</option>
                  </select>
                  {errors.salary_type && (
                    <span className="error-message">{errors.salary_type}</span>
                  )}
                </div>
                <div>
                  <label>Language</label>
                  <select
                    id="language"
                    name="language"
                    value={formValues.language}
                    onChange={handleInputChange}
                    className={errors.language ? "error" : ""}
                  >
                    <option value="" disabled>
                      Select language
                    </option>
                    <option value="English (Elementary Proficiency)">
                      English (Elementary Proficiency)
                    </option>
                    <option value="English (Fluent)">English (Fluent)</option>
                  </select>
                  {errors.language && (
                    <span className="error-message">{errors.language}</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CandidateProfile;
