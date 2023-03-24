import './banner.css'
import { CiSearch } from 'react-icons/ci';
import { FaRegEdit } from 'react-icons/fa';

import { BsPersonCircle } from 'react-icons/bs';
import { useState } from 'react';

const Banner = () => {

    const [popup, setPopup] = useState(false);

    return ( 
        <div className="post_banner">
            <div style={{display:"flex", alignItems:"center",gap:"20px"}}>
            <div className="readerLogo">
                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968885.png" alt="medium" />
            </div>
            <CiSearch style={{fontSize:"25px", color:"#292929d9"}} />
            <div className="searchbar">
                <input type="text" placeholder="Search Medium"/>
            </div>
            </div>

            <div className="userUtil">
                <div className="write">
                    <FaRegEdit style={{fontSize:"20px"}} />
                    Write
                </div>
                <div className="signup">
                    <button>Sign Up</button>
                </div>
                <div className="signin">Sign In</div>

                <div className="profile">
                    <BsPersonCircle  style={{fontSize:"25px"}} />
                </div>
            </div>

        </div>
     );
}
 
export default Banner;
