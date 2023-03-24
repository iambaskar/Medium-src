import './main.css'
import banner from './banner.png'
import Trending from './Trending';
import Posts from './Posts';
import SideContent from './SideContet';
import { useNavigate } from 'react-router-dom';

import { UserAuth } from './context/MediumContext';
import { useEffect } from 'react';

export const Main = () => {
    const { googleSignIn, user, logOut } = UserAuth();

    const navigate = useNavigate();
    
    useEffect(() => {
      if(user != null){
          navigate('/account');
          window.location.reload();
      }
    }, [user]);

    return (
      <>
        <div className="main">
        <div className="main-split">
          <div className="hero">
            <h2>Stay curious.</h2>
            <h3>
              Discover stories, thinking, and expertise from writers on any topic.
            </h3>
            <button className="startreading" onClick={googleSignIn}>Start reading</button>
          </div>
  
          <div className="svg">
            <img src={banner} alt="" />
          </div>
        </div>
      </div>
      <Trending />
      <div className="main2">
      <Posts />
      <SideContent />
      </div>
      </>
    );
  };
  