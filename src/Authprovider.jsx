import React, { createContext, useEffect, useState } from 'react';
import { app } from './Firebase.confid';
import { getAuth, onAuthStateChanged } from "firebase/auth";


export const AuthContext = createContext();
const auth = getAuth(app)

const Authprovider = ({children}) => {
      
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser =>{
         setUser(currentUser)
         console.log('user', currentUser)
         setLoading(false);
        });

        return () =>{
            return unsubscribe()
        }
    },[])

    const authInfo ={
        user,
        loading
    }
        return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
            
        </div>
    );
};

export default Authprovider;