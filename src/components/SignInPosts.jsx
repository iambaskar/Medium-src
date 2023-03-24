import "./signinposts.css";
import { CiSearch } from 'react-icons/ci';
import { FaRegEdit } from 'react-icons/fa';

import { BsPersonCircle } from 'react-icons/bs';
import { SlBell } from 'react-icons/sl';
import { MdAdd } from 'react-icons/md';

import { UserAuth } from "./context/MediumContext";
import { useState } from "react";
import Posts from "./Posts";
import { Link } from "react-router-dom";

const SignInPosts = () => {

    const { googleSignIn, user, logOut } = UserAuth();


    // const handlesignin = async () => {
    //     try{
    //         await googleSignIn();
    //     }catch(err){
    //         throw err;
    //     }
    // }

    const signout = async () => {
        try{
            await logOut();
        }catch(err){
            throw err;
        }
    }


    const [fix, setFix] = useState(false);
    const [profile, setProfile] = useState(false);
    
    const fixBanner = () => {
        console.log(window.scrollY);
        if(window.scrollY >= 65){
            setFix(true);
        }else{
            setFix(false);
        }
    }

    window.addEventListener("scroll", fixBanner);

    const profileBox = () => {
        setProfile(!profile);
    }

    return ( 
        <div className="signinpost">
            <div className="post_banner">
            <div style={{display:"flex", alignItems:"center",gap:"20px"}}>
            <div className="readerLogo">
                <Link to="/" ><img src="https://cdn-icons-png.flaticon.com/512/5968/5968885.png" alt="medium" /></Link>                
            </div>
            <CiSearch className="cisearch" style={{fontSize:"25px", color:"#292929d9"}} />
            <div className="searchbar">
                <input type="text" placeholder="Search Medium"/>
            </div>
            </div>

            <div className="userUtil">
                <div className="write">
                    <FaRegEdit style={{fontSize:"20px"}} />
                    Write
                </div>
            
                <div className="signin">
                    <SlBell style={{fontSize:"20px"}}/>
                </div>

                <div className="profile">
                   {
                    user ?<img src={user.photoURL}  onClick={
                        profileBox
                    } alt=""  
                    /> :  <BsPersonCircle  style={{fontSize:"25px"}} />
                   }
                </div>
            </div>

        </div>

        

        
        {
            profile ?  <div className="profilecard">
            <div className="userpro">
                <div>Profile</div>
                <div>Library</div>
                <div>Stories</div>
                <div>Stats</div>
            </div>

            <div className="settings">
                <div>Settings</div>
                <div>Refine Recommendations</div>
                <div>Manage Publications</div>
            </div>

            <div className="member">
                <div>Become a member</div>
                <div>Create a Mastodon account</div>
                <div>Apply for author verification</div>
                <div>Apply to the Partner Program</div>
                <div>Gift a membership</div>
            </div>
            
            <div className="logoutacc" onClick={signout} >
                <div>Sign out</div>
                <div>{user.email}</div>
            </div>
        </div>  : ""
        }

        <div className="content_wrapper">
            
        <div className="leftcont">
           <div style={{padding: "40px 12%"}}>
           <div className={fix ? "for_you sticky" : "for_you"}>
                <p><MdAdd style={{fontSize:"20px", color:"#757575"}} /></p>
                <p className="for">For you</p>
                <p className="for">Folllowing</p>
                <p className="for">Life Style</p>
                <p className="for">React</p>
                <p className="for">UI/UX</p>
                <p className="for">Programming</p>
                <p className="for">Javascript</p>
                <p className="for">Typescript</p>
                <p className="for">Game</p>
                <p className="for">cryptocurreny</p>
                <p className="for">NFT</p>
            </div>
           </div>

           <div style={{marginTop:"-70px"}}>
           <Posts />
           </div>
        </div>

        <div className="recommendations">
            <h1>Recommended topics</h1>
            <div className="buttons">
                <div className="btn">
                    Data Science
                </div>
                <div className="btn">
                    React
                </div>
                <div className="btn">
                    UI/UX
                </div>
                <div className="btn">
                    NFT
                </div>
                <div className="btn">
                    Blockchain
                </div>
                <div className="btn">
                    Web 3.0
                </div>
                <div className="btn">
                    Metaverse
                </div>
            </div>
        </div>
        </div>

        </div>
     );
}
 
export default SignInPosts;