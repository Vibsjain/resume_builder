import React, { useState } from "react";
import { YearPicker } from "react-dropdown-date";
import "./classTenth.css";

export default function ClassTwelth() {
  const [selectedyear, setSelectedyear] = useState("2021");
  const [percentage, setPercentage] = useState(true);
  const [cgpa, setCGPA] = useState(false);

  const handlePercentage = (e) => {
    setPercentage(true);
    setCGPA(false);
    // console.log("Percentage Selected");
  };

  const handleCgpa = (e) => {
    setCGPA(true);
    setPercentage(false);
    //   console.log("CGPA Selected");
  };

  return (
    <div>
      <form>
        <h5
          style={{
            fontWeight: "bold",
            marginLeft: "30px",
            textDecoration: "underline",
          }}
        >
          Class XII
        </h5>
        <div className="form-group container join_container">
          <div className="col-xs-4">
            <label>Board</label>
            <input type="text" class="form-control" placeholder="Board" />
          </div>
          <div className="col-xs-6">
            <label>Name of Institute</label>
            <input
              type="email"
              className="form-control"
              placeholder="Institute name"
            />
          </div>
          <div className="col-xs-4">
            <label>Passing Year</label>
            <br />
            <YearPicker
              defaultValue={"Select Year"}
              start={1980}
              reverse
              required={true}
              value={selectedyear.year}
              onChange={(year) => {
                setSelectedyear({ year });
              }}
              id={"year"}
              name={"year"}
              classes={"classes"}
              optionClasses={"option classes"}
            />
          </div>
        </div>
        <div className="form-group container" style={{ marginLeft: "25px" }}>
          <label style={{ display: "block" }}>Aggregate</label>
          <div className="flexAggre">
            <div class="radio" style={{ marginRight: "30px" }}>
              <label className="aggreLabel">
                <input
                  type="radio"
                  name="grade"
                  id="grade"
                  value="Percentage"
                  checked={percentage === true}
                  onChange={handlePercentage}
                />
                Percentage
                <input
                  class="form-control form-control-sm textAggre"
                  type="text"
                  placeholder="Percentage"
                  disabled={percentage === false}
                ></input>
              </label>
            </div>
            <div class="radio" style={{ marginTop: "10px" }}>
              <label className="aggreLabel">
                <input
                  type="radio"
                  name="grade"
                  value="CGPA"
                  checked={cgpa === true}
                  onChange={handleCgpa}
                />
                C.G.P.A.
                <input
                  class="form-control form-control-sm textAggre"
                  type="text"
                  placeholder="CGPA"
                  disabled={cgpa === false}
                ></input>
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
