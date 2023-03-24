import { useState } from 'react';
import './sideContent.css'

const SideContent = () => {

    const [fixSide, setFixSide] = useState(false);

    const fixSideContent = ()=>{
        console.log(window.scrollY);
        if(window.scrollY >= 780){
            setFixSide(true);
        }else{
            setFixSide(false);
        }
    }

    window.addEventListener('scroll', fixSideContent);

    return (  
        <div className={fixSide ? "side fixside":"side"}>
            <h1>Discover more of what matters to you</h1>
             <div className="recommendation">
                <div className="cont">
                    <h3>programming</h3>
                </div>
                <div className="cont">
                    <h3>Data science</h3>
                </div>
                <div className="cont">
                    <h3>Technology</h3>
                </div>
                <div className="cont">
                    <h3>Self Improvement</h3>
                </div>
                <div className="cont">
                    <h3>React</h3>
                </div>
                <div className="cont">
                    <h3>UI/UX</h3>
                </div>

                
             </div>
             <div style={{width:"100%",borderBottom:"1px solid  #e6e6e6", marginTop:"30px"}}></div>

             <div className="help">
                <p>Help</p>
                <p>Status</p>
                <p>Writers</p>
                <p>Blog</p>
                <p>Careers</p>
                <p>Privacy</p>
                <p>Terms</p>
                <p>About</p>
                <p>Text to speech</p>
             </div>
        </div>
    );
}
 
export default SideContent;