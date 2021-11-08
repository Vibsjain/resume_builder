import React from 'react'
import "./login.css";
import vectorImage from "../Images/online_resume.gif"
import googleLogo from "../Images/google.png"
import linkedinLogo from "../Images/linkedin.png"

function Login() {
    const email = React.useRef(null);
    const password = React.useRef(null);
    
  
    const handleSubmit = e => {
      e.preventDefault();
  
      const data = {
        email: email.current.value,
        password: password.current.value
        
      }
    }
    return (
     <div className="maincontainer">
    <div className="container">
            <div class="col-lg-6 d-sm-none d-md-none d-lg-flex">
            <img className="img-fluid d-none d-sm-block" src={vectorImage} alt="Sign Up Here!" />
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 m-auto col-xs-12">
            <p className="h1 text-center mt-5 text-white">Build Your Resume</p>
            <p className=" text-center text-white">Are You A New User? <small className="text-center text-light">Login</small></p>
           <div>
           <div className="d-lg-block text-center p-5 d-sm-none d-xs-none  d-md-block">
                        <div className="btn btn-md text-center google_button p-4 m-4 text-white">
                            <img className="google_image" src={googleLogo} alt=" " />
                            Login With Google
                        </div>
                        
                        <div className="btn btn-md text-center  google_button p-4 m-4 text-white">
                            <img className="linkedIn_image" src={linkedinLogo} alt=" " />
                           Login With LinkedIn
                        </div>
                        
                       
                    </div>
                    <form>
  <div class="form-group" >
  
    <label for="exampleInputEmail1" className="text-white">Email address<span className="text-danger">*</span></label>
    
    <input type="email" class="form-control" id="exampleInputEmail1" ref={email} aria-describedby="emailHelp" placeholder="Enter email"/>
   
    
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1" className="text-white">Password<span className="text-danger">*</span></label>
    <input type="password" className="form-control" id="exampleInputPassword1" ref={password} placeholder="Password"/>
  </div>
 
  <div className="text-center ">
  <button type="submit" class="btn register_button text-white">Login</button>
  </div>
</form>
</div>

</div>

         </div>
         </div>  
      
        
    
     
    )
}

export default Login;