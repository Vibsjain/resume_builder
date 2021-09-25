import React from 'react'
import "./signup.css";
import vectorImage from "../Images/online_resume.gif"
import googleLogo from "../Images/google.png"
import linkedinLogo from "../Images/linkedin.png"

function signup() {

    return (
        <div className="signup_outer_div">
            <div className="signup_box">
                <img className="vector_image" src={vectorImage} alt="Sign Up Here!" />
                <div className="signup_details">
                    <h1 className="signup_heading">Build Your Resume</h1>
                    <p className="signup_change">Already have an account? <span className="login_link">Log in</span></p>
                    <div className="login_buttons">
                        <button className="google_button">
                            <img className="google_image" src={googleLogo} alt=" " />
                            Sign up with google
                        </button>
                        <button className="google_button">
                            <img className="linkedIn_image" src={linkedinLogo} alt=" " />
                            Sign up with linkedIn
                        </button>
                    </div>
                    <p className="or_text">or</p>
                    <div className="email_box">
                        <p className="field_label">Email<span className="essential">*</span></p>
                        <div className="input_box">
                            <i class="fa fa-envelope icon"></i>
                            <input className="cred_input" type="email"></input>
                        </div>
                    </div>
                    <div className="email_box">
                        <p className="field_label">Password<span className="essential">*</span></p>
                        <div className="input_box">
                        <i class="fa fa-key icon"></i>
                            <input className="cred_input" type="password"></input>
                        </div>
                    </div>
                    <button className="register_button">Register Now!</button>
                </div>
            </div>
        </div>
    )
}

export default signup;