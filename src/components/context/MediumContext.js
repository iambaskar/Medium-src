import { useContext, createContext, useState, useEffect } from "react";
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";

import { auth } from "../../firebase.config";

const MediumContext = createContext();

export const MediumContextProvider = ({children}) => {

    const [user, setUser] = useState([]);

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    };

    const logOut = () => {
        signOut(auth);
    } 

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,  (currentUser) => {
            setUser(currentUser);
            console.log(currentUser);
        });

        return() => {
            unsubscribe();
        };

    }, []);

    return(
        <MediumContext.Provider value={{googleSignIn, user, logOut}}>
            {children}
        </MediumContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(MediumContext);
}