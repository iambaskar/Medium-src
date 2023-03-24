// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { UserAuth } from "./context/MediumContext";

// import { FcGoogle } from 'react-icons/fc';
// import { GrFacebook } from 'react-icons/gr';
// import { DiApple } from 'react-icons/di';
// import { BsTwitter } from 'react-icons/bs';
// import { TfiEmail } from 'react-icons/tfi';

// import "./signinOptions.css"

// const SignOpetions = () => {

//     const { googleSignIn, user, logOut } = UserAuth();

//     const navigate = useNavigate();
//     const handlesignin = async () => {
//         try{
//             await googleSignIn();
//         }catch(err){
//             throw err; 
//         }
//     }

//     // const signout = async () => {
//     //     try{
//     //         await logOut();
//     //         window.location.reload();
//     //     }catch(err){
//     //         throw err;
//     //     }
//     // }

//     useEffect(() => {
//         if(user != null){
//             navigate('/account');
//             window.location.reload();
//         }
//     }, [user]);

//     return (  
//         <div className="signoptions">
//             <div className="welcome">
//                 <h1>Welcome back.</h1>

//                 <div className="options">
//                     <div className="google sign" onClick={googleSignIn}>
//                        <FcGoogle  style={{fontSize:"20px"}} />
//                        <p>Sign in with Google</p>
//                     </div>
//                     <div className="fb sign">
//                         <GrFacebook  style={{color:"#3b5998", fontSize:"20px"}} />
//                         <p>Sign in with Facebook</p>
//                     </div>
//                     <div className="apple sign">
//                         <DiApple  style={{fontSize:"20px"}} />
//                         <p>Sign in with Apple</p>
//                     </div>
//                     <div className="twitter sign">
//                         <BsTwitter style={{color:"#3586d6", fontSize:"20px"}} />
//                         <p>Sign in with Twitter</p>
//                     </div>
//                     <div className="email sign">
//                         <TfiEmail style={{fontSize:"20px"}} />
//                         <p>Sign in with email</p>
//                     </div>
//                 </div>

//                 <p>No account? <span style={{color:"green",fontWeight:"bold"}}>Create one</span></p>

//                 <div className="agree">
//                     <p>Forgot email or trouble signing in? Get help.</p>
//                     <p>Click “Sign In” to agree to Medium’s Terms of Service and acknowledge that Medium’s Privacy Policy applies to you.</p>
//                 </div>

//             </div>
//             {/* {
//             user ? (
//                 ""
//                 // <button onClick={signout}>sign out</button>
//             ) : <button onClick={handlesignin}>signin</button>
//         } */}
//         </div>
//     );
// }
 
// export default SignOpetions;

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "./context/MediumContext";

import { FcGoogle } from 'react-icons/fc';
import { GrFacebook } from 'react-icons/gr';
import { DiApple } from 'react-icons/di';
import { BsTwitter } from 'react-icons/bs';
import { TfiEmail } from 'react-icons/tfi';

import "./signinOptions.css"

const SignOpetions = () => {

    const { googleSignIn, user, logOut } = UserAuth();

    const navigate = useNavigate();
    // const handlesignin = async () => {
    //     try{
    //         await googleSignIn();
    //     }catch(err){
    //         throw err; 
    //     }
    // }

    // const signout = async () => {
    //     try{
    //         await logOut();
    //         window.location.reload();
    //     }catch(err){
    //         throw err;
    //     }
    // }

    useEffect(() => {
        if(user != null){
            navigate('/account');
            window.location.reload();
        }
    }, [user]);

    return (  
        <div className="cardbody">
		
            <div className="card1">
			
                <h1>Welcome back.</h1>

                <div className="options1">
				
                    <div className="google sign" onClick={googleSignIn}>
                       <FcGoogle  style={{fontSize:"20px"}} />
                       <p>Sign in with Google</p>
                    </div>
					
                    <div className="fb sign">
                        <GrFacebook  style={{color:"#3b5998", fontSize:"20px"}} />
                        <p>Sign in with Facebook</p>
                    </div>
					
                    <div className="apple sign">
                        <DiApple  style={{fontSize:"20px"}} />
                        <p>Sign in with Apple</p>
                    </div>

                    <div className="twitter sign">
                        <BsTwitter style={{color:"#3586d6", fontSize:"20px"}} />
                        <p>Sign in with Twitter</p>
                    </div>
					
                    <div className="email sign">
                        <TfiEmail style={{fontSize:"20px"}} />
                        <p>Sign in with email</p>
                    </div>
                </div>

                <p>No account? <span style={{color:"green",fontWeight:"bold"}}>Create one</span></p>

                <div className="agree">
                    <p>Forgot email or trouble signing in? Get help.</p>
                    <p>Click “Sign In” to agree to Medium’s Terms of Service and acknowledge that Medium’s Privacy Policy applies to you.</p>
                </div>

            </div>
            {/* {
            user ? (
                ""
                // <button onClick={signout}>sign out</button>
            ) : <button onClick={handlesignin}>signin</button>
        } */}
        </div>
    );
}
 
export default SignOpetions;