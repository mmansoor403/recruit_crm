import React from "react";
import "./modal.css";

const Modal = ({ isVisible, setIsVisible, title, onSubmit, children }) => {
  return (
    <div className={`modal ${isVisible ? "modal-active" : ""}`}>
      <div className="modal-content">
        <div className="modal-header">
          <h2>{title}</h2>
        </div>
        <div className="modal-body">{children}</div>
        <div className="modal-footer">
          <button
            className="btn-outline-primary"
            onClick={() => setIsVisible(false)}
          >
            Cancel
          </button>
          <button className="btn-primary" onClick={onSubmit}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
