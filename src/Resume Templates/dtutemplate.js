import React from 'react'
import "./dtutemplate.css";
import { details } from '../Detail Form/temp';

function Dtutemplate() {
    // console.log(details)
    // console.log(details[0].personal_detail);

    var eduDetail = details[0].education_detail;
    var experience = details[0].experience;

    return (
        <div className="outerDiv">
            <div className="personalDetails">
                <h1 className="name">{details[0].personal_detail.name}</h1>
                <p className="otherDetails">{details[0].personal_detail.contact} | {details[0].personal_detail.email} | <a href={details[0].personal_detail.linkedIn} target="_blank">linkedIn</a> | <a href={details[0].personal_detail.gitHub} target="_blank">github</a></p>
            </div>
            <div className="educationDetails">
                <h4 className="sectionHeading">EDUCATION</h4>
                <table>
                    <tr>
                        <th>DEGREE</th>
                        <th>YEAR</th>
                        <th>INSTITUTE</th>
                        <th>AGGREGATE</th>
                    </tr>
                    <tr>
                        <td>{eduDetail.college.degree} ({eduDetail.college.branch})</td>
                        <td>{eduDetail.college.start}-{eduDetail.college.end}</td>
                        <td>{eduDetail.college.name}</td>
                        <td>{eduDetail.college.aggregate} {eduDetail.college.type == "CGPA" ? "CGPA" : "%"}</td>
                    </tr>
                    <tr>
                        <td>{eduDetail.twelth.board} (Class XII)</td>
                        <td>{eduDetail.twelth.year}</td>
                        <td>{eduDetail.twelth.name}</td>
                        <td>{eduDetail.twelth.aggregate} {eduDetail.twelth.type == "CGPA" ? "CGPA" : "%"}</td>
                    </tr>
                    <tr>
                        <td>{eduDetail.tenth.board} (Class X)</td>
                        <td>{eduDetail.tenth.year}</td>
                        <td>{eduDetail.tenth.name}</td>
                        <td>{eduDetail.tenth.aggregate} {eduDetail.tenth.type == "CGPA" ? "CGPA" : "%"}</td>
                    </tr>
                </table>
            </div>
            <div className="pastExperience">
                <h4 className="sectionHeading">INTERNSHIP AND EXPERIENCE</h4>
                <ul className="experience">
                    <li className="companyName">Ewently, Incampus Pvt. Ltd. <span className="date">March 2021 - May 2021</span></li>
                    <span className="profile">Web Developer, Tech Department</span>
                    <ul>
                        <li className="detail">Built frontend of an event hosting platform and integrated it with backend using React Js, SQL and API calls</li>
                    </ul>
                </ul>
                <ul className="experience">
                    <li className="companyName">Ewently, Incampus Pvt. Ltd. <span className="date">March 2021 - May 2021</span></li>
                    <span className="profile">Web Developer, Tech Department</span>
                    <ul>
                        <li className="detail">Built frontend of an event hosting platform and integrated it with backend using React Js, SQL and API calls</li>
                    </ul>
                </ul>
            </div>
            <div className="academicProjects">
                <h4 className="sectionHeading">ACADEMIC PROJECTS</h4>
                <ul className="experience">
                    <li className="companyName">Mission Qabil <span className="date">June 2021 - Present</span></li>
                    <ul>
                        <li className="detail">It is an initiative that provides internship and placement training to specially abled students</li>
                        <li className="detail">Developing official website of Mission Qabil using MERN Stack to systematize work of tracking progress of registered members.</li>
                    </ul>
                </ul>
                <ul className="experience">
                    <li className="companyName">Project It <span className="date">Jan 2021 - Feb 2021</span></li>
                    <ul>
                        <li className="detail">Built website that provides platform for tech enthusiasts to showcase their projects and get ideas from other tech projects (React Js, Express, Javascript)</li>
                        <li className="detail">Designed Database Schema and implemented the same using MongoDB.</li>
                        <ul>
                            <li className="resultDetail">Provided tech project ideas to tech enthusiast beginners with 50+ registered users on the website</li>
                        </ul>
                    </ul>
                </ul>
            </div>
            <div className="por">
                <h4 className="sectionHeading">POSITION OF RESPONSIBILITY</h4>
                <ul className="experience">
                    <li className="companyName">Co-Head, Creative Team, Engifest DTU <span className="date">March 2021 - Present</span></li>
                    <ul>
                        <li className="detail">Team Lead of creative team for various events of college and organized the cultural fest of DTU.</li>
                        <li className="detail">Worked as a team member of creative team to plan and manage engifest in the year 2019-2020</li>
                    </ul>
                </ul>
            </div>
            <div className="extraCir">
                <h4 className="sectionHeading">EXTRA CURRICULAR ACTIVITIES</h4>
                <ul className="experience">
                    <li className="companyName">Associate, Mission Qabil <span className="date">January 2021 - Present</span></li>
                    <ul>
                        <li className="detail">Buddy of 1 among 30+ differently abled students in Mission Qabil.</li>
                        <li className="detail">Solved doubts of buddy regarding data structure and algorithms, he got an internship at FreshOK</li>
                    </ul>
                </ul>
            </div>
            <div className="techStack">
                <h4 className="sectionHeading">Tech Stack</h4>
                <div className="techDetail">C++, Python, OOPS, DBMS, SQL, Data Structure, Algorithms, Problem Solving, MERN Stack, HTML, CSS, JS</div>
            </div>
            <div>
                <h4 className="sectionHeading">Declaration</h4>
                <div className="techDetail">I hereby declare that the details furnished above are true and coorect to best of my knowledge and belief.</div>
            </div>
        </div>
    )
}

export default Dtutemplate;