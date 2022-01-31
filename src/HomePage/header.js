import {React, useState} from "react";
import "./header.css";
import { Link } from "react-router-dom";
import logoPic from "../Assests/25.png";
import coinPic from "../Assests/3.png";

import blogIcon from "../Assests/3D-ICONS/Blog Icon/bloger 256.png";
import discordIcon from "../Assests/3D-ICONS/Discord icon/main 256.png";
import teleIcon from "../Assests/3D-ICONS/Telegram/main 256.png";
import twitterIcon from "../Assests/3D-ICONS/Twitter Icon/main 256.png";
import careerIcon from "../Assests/3D-ICONS/Career Icon/front 256.png";
import contactIcon from "../Assests/3D-ICONS/Contact Us Icon/main 256.png";
import WhiteIcon from "../Assests/whitePaper.png";
import Glowcoin from "../Assests/glowCoin.png";

import { AiFillCaretDown, AiFillCaretLeft } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import Login from "./login";
import PDF from "../Assests/PDF.pdf"


const Header = () => {


  const  onResumeClick=()=> {
    window.open(PDF);
  }


  // -------------Modal Code--------------
  const [modalShow, setModalShow] = useState(false);




  const slideOpen = () => {
    document.getElementById("mySidebar").style.display = "block";
  };

  const slideClose = () => {
    document.getElementById("mySidebar").style.display = "none";
  };
  return (
    <div className="header">
      <div className="header-nav col-md-12">
      <Link to="/homepage">
          <div className="logo-head">
            <img src={logoPic} height="70px"></img>
            {/* <h5>ROXO</h5> */}
          </div>
        </Link>
        <Link>Our Games</Link>
        <Link>News</Link>
        <Link>
          <div className="hover-coin">
            <img className="glowCoin" src={Glowcoin} height="50px"></img>
            <div className="coin-logo">
              <img src={coinPic} height="60px"></img>
              <p>$0.0025</p>
            </div>
          </div>
        </Link>
        <Link className="dropbtn">
          Our Community <AiFillCaretDown size={10} />
          <div class="dropdown-content">
            <Link>
              {" "}
              <img src={blogIcon} height="20px" />
              Blog
            </Link>
            <Link>
              <img src={discordIcon} height="20px" />
              Discord
            </Link>
            <Link>
              <img src={twitterIcon} height="20px" />
              Twitter
            </Link>
            <Link>
              <img src={teleIcon} height="20px" />
              Telegram
            </Link>
          </div>
        </Link>
        <Link className="dropbtn1">
          More
          <AiFillCaretDown size={10} />
          <div class="dropdown-content1">
            <Link>
              <img src={contactIcon} height="20px" />
              Support
            </Link>
            <Link>
              <img src={careerIcon} height="20px" />
              Careers
            </Link>
            <Link onClick={onResumeClick}>
              <img src={WhiteIcon} height="20px" />
              White Paper
            </Link>
            <Link>
              <img src={contactIcon} height="20px" />
              Contact Us
            </Link>
          </div>
        </Link>
        {/* <Link  to="/login"> */}
        <button data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setModalShow(true)}>
        <b>  GAME EARNINGS </b>
        </button>
        {/* <button data-bs-toggle="modal" data-bs-target="#exampleModal">
          GAME EARNINGS
        </button> */}
        {/* </Link> */}
      </div>
      <div className="header-nav-sml col 12">
      <Link to="/homepage">
          <div className="logo-head">
            <img src={logoPic} height="50px"></img>
            {/* <h5>ROXO</h5> */}
          </div>
        </Link>
        <Link>
          <div className="coin-logo">
            <img src={coinPic} height="50px"></img>
            <p>$0.0025</p>
          </div>
        </Link>
        <Link>
          <button className="menu-btn" onClick={slideOpen}>
            <FiMenu size={35} />
          </button>
        </Link>
      </div>
      <div className="slides" id="mySidebar">
        <div className="slide-down-1" onClick={slideClose}>
          <p>Close</p>
        </div>
        <div className="slide-down">
          <Link className="nav-links  single active " href="#homepage">
            <p> Our Games </p>
          </Link>
        </div>
        <div className="slide-down">
          <Link className="nav-links  single active " href="#vision">
            <p>News </p>{" "}
          </Link>{" "}
        </div>
        <div className="slide-down">
          <Link className="nav-links-1 single " id="target2" href="#tools">
            <AiFillCaretLeft size={15} />
            <div class="dropdown-content">
              <Link>
                {" "}
                <img src={blogIcon} height="20px" />
                Blog
              </Link>
              <Link>
                <img src={discordIcon} height="20px" />
                Discord
              </Link>
              <Link>
                <img src={twitterIcon} height="20px" />
                Twitter
              </Link>
              <Link>
                <img src={teleIcon} height="20px" />
                Telegran
              </Link>
            </div>Our Community
            <p>O</p>
          </Link>
        </div>
        <div className="slide-down">
          <Link className="nav-links-2 single" id="target3" href="#news">
            <AiFillCaretLeft size={15} />
            <div class="dropdown-content1">
              <Link>
                <img src={contactIcon} height="20px" />
                Support
              </Link>
              <Link>
                <img src={careerIcon} height="20px" />
                Careers
              </Link>
              <Link>
                <img src={contactIcon} height="20px" />
                Contact Us
              </Link>
              <Link onClick={onResumeClick}>
                <img src={WhiteIcon} height="20px" />
                White Paper
              </Link>
            </div>
            <p>More</p>
          </Link>
        </div>
        <div className="slide-down">
          {/* <Link className="nav-links single " to="/login"> */}
       
         <p onClick={() => setModalShow(true)}>GAME EARNINGS</p>{" "}
            <Login
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
