import {React, useState}  from 'react'
import Logo from "../Assests/3.png";
import { Link } from "react-router-dom";
import "./loginModal.css"


const  LoginModal=()=> {
    const [user, setUser] = useState({
        email: "",
        password: "",
      });
      const [error, setError] = useState({
       
        formError: "",
      });
      const handleRegister = () => {
        if (user.name !== "" && user.email !== "" && user.rollNumber !== "") {
    
          // setUserArr([...userArr, user]);
          setUser({ email: "", password: ""});
          setError({ error, formError: "" });
    
    
        } else {
          setError({ error, formError: "Fill all fields" });
        }
      };
    return (
        <div>
             <div
        class="modal fade "
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content modal-border-style">
            <div class="modal-body">
              <div className="login-form-style-roxo">
                <div className="col-md-6 login-image-side">
                  <h4 className="login-form-heading"> Welcome to ROXO </h4>
                  <img
                    className="login-image"
                    src={Logo}
                    alt="logologin"
                    height="250px"
                    width="250px"
                  />
           
                  {/* <Link to="/signUp"> */}
                    <button className="register-button-loginForm display: none"  data-bs-toggle="modal"
            data-bs-target="#Data"  >
                      Sign Up!
                    </button>
                  {/* </Link> */}
                </div>
                <div className="col-md-6 login-form-display">
                  <div>
                    <h3 className="login-fields-heading">
                      Login to your Account
                    </h3>
                  </div>
                  <div className="login-input-fiedls">
                    <input
                      className="input-email-login"
                      type="email"
                      placeholder="Email"
                      value={user.email}
                      onChange={(e) => {
                        setUser({ ...user, email: e.target.value });
                      }}

                    />

                    <input
                      className="input-password-login"
                      type="password"
                      placeholder="Password"
                      value={user.password}
                      onChange={(e) => {
                        setUser({ ...user, password: e.target.value });
                      }}
                    />

                  </div>
                <button className="login-button-style" onClick={handleRegister}>  <Link to="/dashboard"> Login </Link></button> 
                {error.formError && <p> {error.formError}</p>}

                  <div className="forget-password">
                    <p>Forgot Password</p>
                  </div>
                  <p className="have-account">Don’t you have an account?</p>
                  <p className="register-now">
                    <Link to="/signUp"> Register Now! </Link>
                  </p>
                  {/* <p className="bottom-text-login">It’s really simple
            become part of ROXO Network!
          </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    )
}

export default LoginModal;
