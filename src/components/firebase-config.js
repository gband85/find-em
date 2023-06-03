
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
//import {initializeApp} from 'firebase/app';
//import {getFirestore} from 'firebase/firestore'
/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
// Your web app's Firebase configuration
const firebaseConfig = { 
  apiKey: "AIzaSyBX0_pP-NQSLagEF6pn8MXM3SARpe4Tug4",
  authDomain: "find-em-afd9c.firebaseapp.com",
  projectId: "find-em-afd9c",
  storageBucket: "find-em-afd9c.appspot.com",
  messagingSenderId: "352900682612",
  appId: "1:352900682612:web:80d7c715cfe7f9788d1221"
};
  console.log(firebase)
  export function getFirebaseConfig() {

    if (!firebaseConfig || !firebaseConfig.apiKey) {
      throw new Error('No Firebase configuration object provided.' + '\n' +
      'Add your web app\'s configuration object to firebase-config.js');
    } else {
      return firebaseConfig;
    }
  }
  
const firebaseApp = firebase.initializeApp(getFirebaseConfig());
export const db= firebaseApp.firestore;
