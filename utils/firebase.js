import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: "AIzaSyD8-zzK4K1ly6JcpqCD6eEiSBNkp5ngiNA",
    authDomain: "rang-4f22f.firebaseapp.com",
    projectId: "rang-4f22f",
    storageBucket: "rang-4f22f.appspot.com",
    messagingSenderId: "904132510987",
    appId: "1:904132510987:web:87b3578898db267d0dce0e",
    measurementId: "G-E7W4MXLK5N"
  };

  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firebaseDatabase = firebase.database();
