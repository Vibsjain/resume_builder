import React, { useState } from "react";
import ClassTenth from "./classTenth";
import ClassTwelth from "./classTwelth";
import "./education_detail.css";

export default function Education_detail() {
  return (
    <div className="education_container">
      <div style={{ textAlign: "center" }}>
        <h3 style={{ fontWeight: "bold", marginBottom: "30px" }}>Education Details</h3>
      </div>
      <ClassTenth />
      <hr className="hrStyle" />
      <ClassTwelth />
      <hr className="hrStyle" />
    </div>
  );
}
