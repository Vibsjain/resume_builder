import React from 'react'
import Education_detail from './Education Details/education_detail';
import "./main_form.css";
import Personal_detail from "./personal_detail";

export default function Main_form() {
    return (
        <div className="mainDiv">
            <Personal_detail className="personal_box" />
            <Education_detail className="education_box" />
        </div>
    )
}