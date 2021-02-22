import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCjFhHKwYL3SyyfFJ-68r3bwiqgdEljrfs",
    authDomain: "team-react-2.firebaseapp.com",
    projectId: "team-react-2",
    storageBucket: "team-react-2.appspot.com",
    messagingSenderId: "145023215842",
    appId: "1:145023215842:web:ebcc0884711e31a09296bb",
    measurementId: "G-RLRRS3NJ10"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// base de datos    
const db = firebase.firestore();

// proveedor de google
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}


