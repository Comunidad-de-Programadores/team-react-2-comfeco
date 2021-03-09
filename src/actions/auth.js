import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import Swal from 'sweetalert2';
import { saveLocalStorage, deleteLocalStorage } from '../shared/login';

export const startGoogleLogin = (setData) => {
   firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
         // console.log(user.photoURL);
         login(user.uid, user.email, user.displayName, user.photoURL, setData);
      });
};

export const login = (uid, email, displayName, photo1, photo2, setData) => {
   const data = {
         uid: uid,
         email: email,
         name: displayName,
         picture: { thumbnail: photo1, large: photo2},
         logged: true, 
         perfil: false
   
   };

   saveLocalStorage(data);
   setData(data);
};

export const startLogout = async (setUser) => {
   await firebase.auth().signOut();
   await setUser(null);
   deleteLocalStorage();
};

export const recoverPass = (email) => {

   const auth = firebase.auth();

   auth.sendPasswordResetEmail(email).
      then(() => {
         Swal.fire(":)", "Se le envio un mensaje a su correo.", "success");
      }).
      catch((error) => {
         Swal.fire(":(", `${error.message}`, "error");
      })
}

export const registro = (data) => {
   firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
      .then((user) => {
         user = firebase.auth().currentUser;
         user.updateProfile({
            displayName: data.username
         }).then(function () {
            console.log('done');
         }, function (error) {
            Swal(error);
         });
      })
      .catch((error) => {
         var errorCode = error.code;
         var errorMessage = error.message;
         console.log(errorCode);
         console.log(errorMessage);
      });
}


