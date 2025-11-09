import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import { auth } from '../Firebase.init';
import { AuthContext } from './AuthContext';

const AuthProvider = ({children}) => {
    const[user,setUser]=useState(null)
    const [loading, setLoading]=useState(true)
    const provider= new GoogleAuthProvider()

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth ,email,password)
    }
   
    const logInUser=(email,password)=>{
        
         
        return signInWithEmailAndPassword(auth,email,password)

    }

    const signWithGoogle=()=>{
            setLoading(true)
        return signInWithPopup(auth, provider)
    }
    const logOut=()=>{
        return signOut(auth)
    }
    
    const authInfo={
        user,
        createUser,
        setUser,
        logInUser,
        signWithGoogle,
        logOut,
        loading,
        setLoading
        
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, (currentUser)=>{
                setUser(currentUser)
            //    console.log(currentUser)
                setLoading(false)
            
            
        })
        return ()=>{
            unsubscribe()
        }
    },[])
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};


export default AuthProvider;