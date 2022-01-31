import React from 'react'
import "./homePage.css"
import Header from "./header"
import Slider from "./slider"
import Roxo from "./roxo"
import Vision from "./vision"
import Video from "./video"
import Play from "./play"
import TesCards from "./TesCards"
import Login from "./login"
import SignUp from "./signUp"
// import FontTest from "./fontTest"
// import ModalOpen from "../ModalSignUp/modalSignUp"
// import LoginModal from "../Login-Modal/loginModal"

import Footer from "./footer"




const HomePage=()=> {
    
    return (
        <div className="background-color-main" >
            <Header/>
            <SignUp/>
            <Login/>
            {/* <FontTest/> */}
            {/* <ModalOpen/> */}
            {/* <LoginModal/> */}
            <Slider/>
            <TesCards/>
            <Roxo/>
            <Vision/>
            <Video/>
            <Play/>
            <Footer/>
            
        </div>
    )
}

export default HomePage;
