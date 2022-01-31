import  {React, useState}  from 'react'
import "./modalSignUp.css"
import Logo from "../Assests/3.png";

import {Link} from "react-router-dom"

const  ModalOpen=()=> {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        birthDate:"",
      });
    return (
        <div>
 
               <div
      class="modal fade"
      id="Data"
      tabindex="-1"
      aria-labelledby="DataLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content modal-border-style">
         
          <div class=" modal-body-signup">
         


          <div className="signup-form-style">
      <div className="col-md-12 row login-divs">
        <div className="col-md-6 signup-image-side">
   
          <h4 >SignUp</h4>

          <img
          
                    src={Logo}
                    alt="logologin"
                    height="250px"
                    width="250px"
                  />
        </div>
        <div className="col-md-6 display-signup-style">
          <div>
            <h4 className="signup-fields-heading">SignUp to your Account</h4>
          </div>

          <form>
          <label className="signup-birthDate-label" for="birthday">Name:</label>
<br/>

            <input
              type="text"
              className="signup-name-login"
              placeholder="Name"
              value={user.name}
              onChange={(e) => {
                setUser({ ...user, name: e.target.value });
              }}
            />
           
           <label className="signup-birthDate-label" for="birthday">Email:</label>
<br/>

            <input
              type="email"
              className="signup-email-login"
              placeholder="Email"
              value={user.email}
              onChange={(e) => {
                setUser({ ...user, email: e.target.value });
              }}
            />
           
           <label className="signup-birthDate-label" for="birthday">Password:</label>
<br/>

            <input
              type="password"
              placeholder="Password"
              className="signup-password-login"
              value={user.password}
              onChange={(e) => {
                setUser({ ...user, password: e.target.value });
              }}
            />

<label className="signup-birthDate-label" for="birthday">Birth Date :</label>
<br/>
  <input               className="signup-birthDate-login"
 type="date" id="birthday" name="birthday" min="1950-01-01" max="2040-12-31"   value={user.birthDate}    onChange={(e) => {
                setUser({ ...user, birthDate: e.target.value });
              }}/>
              <label className="signup-birthDate-label" for="birthday">Gender:</label>
<br/>

<div className="signup-Gender-login">
<input className="signup-gender-inputs" type="radio" name="gender" value="male"/> Male
<input className="signup-gender-inputs" type="radio" name="gender" value="female"/> Female 
<input className="signup-gender-inputs" type="radio" name="gender" value="unknown" /> Custom
</div>





          <button className="signup-button-style">  <Link to="/homepage"> Sign Up</Link> </button>
          </form>

          {/* <p className="signup-have-account">Don’t you have an account?</p> */}
          <p className="signup-register-now">
            {/* <Link to="/homepage" > Login </Link> */}
          </p>
        </div>
      </div>



          </div>
       
      
        </div>
      </div>
    </div>


    </div>  
    </div>  

    )
}

export default ModalOpen;
