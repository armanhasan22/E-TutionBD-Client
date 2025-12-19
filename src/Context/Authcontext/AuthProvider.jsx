import React from 'react';
import { AuthContext } from './Authcontext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../../Firebase/firebase.init';
import { useState } from 'react';
import { useEffect } from 'react';


const googleProvider= new GoogleAuthProvider();


const AuthProvider = ({children}) => {

const[user,setUser]=useState(null)
const [loading,setLoading]= useState(true)





    //Register
const registerUser =(email,password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password)
}


// for update profile
const updateUserProfile= (profile) =>{
    return updateProfile(auth.currentUser,profile)
}





//LOGIN
const signInUser =(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
}





//Google Sign IN
const signInGoogle = () =>{
    setLoading(true);
    return signInWithPopup (auth,googleProvider);
}


// LOG out
const logOut=()=>{

    setLoading(true)
    return signOut(auth) 
}

//observe user state 
useEffect (() =>{
const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
setUser(currentUser);
setLoading(false);
})
return () =>{
  unSubscribe()  ;
}


},[])



const authInfo={
    user,
    loading,
 registerUser ,
 signInUser,
  signInGoogle ,
  logOut,
   updateUserProfile
}


    return (
       <AuthContext value={authInfo}>
{children}
       </AuthContext>
    );
};

export default AuthProvider;