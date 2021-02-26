import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import Swal from "sweetalert2";


export const startGoogleLogin = (setData) => {
   firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
         // console.log(user.photoURL);
         login( user.uid, user.email, user.displayName, user.photoURL, setData );
      });
};

export const login = ( uid, email, displayName, photo, setData ) => {
   const data = {
         user:{
            uid: uid,
            email: email,
            name: displayName,
            picture: { thumbnail: photo }
         }
      }
   setData(data);
};

export const startLogout = async ( setUser )=>{

   await firebase.auth().signOut();
   await setUser({
      user:{}
   });
}



export const recoverPass =  (  email  ) => {
   const auth = firebase.auth();

   auth.sendPasswordResetEmail( email ).
         then(()=>{
            Swal.fire(":)", "Se le envio un mensaje a su correo.", "success");
         }).
         catch(( error )=>{
            Swal.fire(":(",`${ error.message }`,"error");
         })
}
