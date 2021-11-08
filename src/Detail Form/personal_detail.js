import React, { useState } from "react";
import "./personal_detail.css";

function Personal_detail() {
  const [state, setState] = useState({
    name: "",
    email: "",
    contact: "",
    linkedIn: "",
    github: "",
  });

  return (
    <div className="personal_container">
      <div style={{ textAlign: "center" }}>
        <h3 style={{ fontWeight: "bold" }}>Personal Details</h3>
      </div>
      <form>
        <div className="form-group container join_container">
          <div className="col-xs-4">
            <label>Full Name</label>
            <input
              type="text"
              class="form-control"
              placeholder="Name"
              value={state.name}
              onChange={(e) => {
                const val = e.target.value;
                setState((prevState) => {
                  return { ...prevState, name: val };
                });
                console.log(state.name);
              }}
            />
          </div>
          <div className="col-xs-6">
            <label>Email Address</label>
            <input
              type="email"
              class="form-control"
              placeholder="Email"
              value={state.email}
              onChange={(e) => {
                const val = e.target.value;
                setState((prevState) => {
                  return { ...prevState, email: val };
                });
              }}
            />
          </div>
          <div className="col-xs-4">
            <label>Contact Number</label>
            <input
              type="text"
              class="form-control"
              placeholder="Contact Number"
              value={state.contact}
              onChange={(e) => {
                const val = e.target.value;
                setState((prevState) => {
                  return { ...prevState, contact: val };
                });
              }}
            />
          </div>
        </div>
        <div className="form-group container join_container">
          <div className="col-xs-6">
            <label>LinkedIn Profile</label>
            <input
              type="text"
              class="form-control"
              placeholder="LinkedIn Profile"
              value={state.linkedIn}
              onChange={(e) => {
                const val = e.target.value;
                setState((prevState) => {
                  return { ...prevState, linkedIn: val };
                });
              }}
            />
          </div>
          <div className="col-xs-6">
            <label>GitHub Profile</label>
            <input
              type="text"
              class="form-control"
              placeholder="GitHub Profile"
              value={state.github}
              onChange={(e) => {
                const val = e.target.value;
                setState((prevState) => {
                  return { ...prevState, github: val };
                });
              }}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Personal_detail;
