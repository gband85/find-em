import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { useEffect,useState } from 'react';
//import {firebaseApp} from './firebase-config'
import {GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup} from 'firebase/auth';
import { StyledFirebaseAuth } from 'react-firebaseui';
import { GoogleLoginButton } from 'react-social-login-buttons';
const provider = new GoogleAuthProvider()
// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID
  ],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false,
  },
};

function SignInScreen(props) {
  return (
    <GoogleLoginButton
        onClick={async() => {
          let user=await signInWithPopup(getAuth(), provider)
          console.log(user.user)
          props.setGoogleUser(user.user)
        }}
    />
)
  }
  
  export default SignInScreen;