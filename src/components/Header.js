import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Main } from "./Main";
// import { OurStory } from "./OurStory";

import './header.css'
import Post from "./Post";
import SignInPosts from "./SignInPosts";
import SignOptions from "./SignOptions";
import Protected from "./Protected";

import { VscClose } from "react-icons/vsc"


export const Header = () => {

  const [navFix, setNavFix] = useState(false);

  const [pop, setPop] = useState(false);

  const changeBack = () =>{
    // console.log(window.scrollY)
    
    if(window.scrollY >= 385){
        setNavFix(true);
    }else{
        setNavFix(false);
    }
  }

  window.addEventListener('scroll', changeBack);

  const popUp = () =>{
    setPop(!pop);
  }

  return (
    <div>
      <Router>
        <div className={navFix ? "nav navchange" : "nav"}>
          <div className="navbar">
            <div className="logo">
              <Link to="/">
                <img
                  src="https://seeklogo.com/images/M/medium-logo-33836F45D2-seeklogo.com.png"
                  style={{ height: "25px" }}
                  alt="medium logo"
                />
              </Link>
            </div>
            <div className="links">
              <Link to="/ourstory" className="hide" >Our story</Link>
              <Link to="/membership" className="hide">Membership</Link>
              <Link to="/write" className="hide">Write</Link>
              <Link onClick={popUp} className="hide">Sign In</Link>
          
              <button className={navFix ? "getstarted getchange" : "getstarted"} >
                <Link onClick={popUp}>Get started</Link>
              </button>
            </div>
          </div>
        </div>

       {
        pop ?  <div className="pop">
        <div>
        <button onClick={popUp} style={{fontSize:"20px"}} className="closebtn" ><VscClose /></button>
          <SignOptions />
        </div>
      </div> : ""
       }

        <Routes>
          <Route exact path="/" element={<Main />}></Route> 
          <Route exact path="/post/1" element={<Post />}></Route> 
          <Route exact path="/account" element={
            <Protected>
              <SignInPosts />
            </Protected>
          }></Route> 
          {/* <Route exact path="/signin" element={<SignOpetions />}></Route>  */}
          {/* <Route exact path="/ourstory" element={<OurStory />}></Route> */}
        </Routes>
      </Router>
    </div>  
  );
};
