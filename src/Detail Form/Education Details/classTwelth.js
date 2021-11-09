import React, { useState } from "react";
import Select from 'react-select'
import "./classTwelth.css";

export default function ClassTenth() {
  const [selectedyear, setSelectedyear] = useState("2021");
  const [percentage, setPercentage] = useState(true);
  const [cgpa, setCGPA] = useState(false);

  const handlePercentage = (e) => {
    setPercentage(true);
    setCGPA(false);
  };

  const handleCgpa = (e) => {
    setCGPA(true);
    setPercentage(false);
  };

  var currentYear = new Date().getFullYear()
  var options = [];
  for(let i = 1990; i < currentYear + 5; i++){
    options.push({
      label: i,
      value: i
    })
  }

  return (
    <div>
      <form>
        <h5
          style={{
            fontWeight: "bold",
            fontSize: "20px",
            textDecoration: "underline",
            textAlign: "center"
          }}
        >
          Class XII
        </h5>
        <div className="form-group row">
          <div className="col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <label>Board</label>
            <input type="text" class="form-control" placeholder="Board" />
          </div>
          <div className="col-12 col-xs-12 col-sm-12 col-md-5 col-lg-5">
            <label>Name of Institute</label>
            <input
              type="email"
              className="form-control"
              placeholder="Institute name"
            />
          </div>
          <div className="col-12 col-xs-12 col-sm-12 col-md-3 col-lg-3">
            <label>Passing Year</label>
            <br />
            <Select isClearable="true" isSearchable="true" options={options} />
          </div>
        </div>
        <div className="form-group">
          <label style={{ display: "block" }}>Aggregate</label>
          <div className="row">
            <div class="radio col-12 col-xs-12 col-sm-3 col-md-3 col-lg-3" style={{ marginRight: "30px" }}>
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
            <div class="radio col-12 col-xs-12 col-sm-3 col-md-3 col-lg-3" style={{ marginTop: "10px" }}>
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
