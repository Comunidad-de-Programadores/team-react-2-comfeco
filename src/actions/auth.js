import { db, firebase, googleAuthProvider } from '../firebase/firebase-config';
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

export const login = (uid, email, displayName, photo, setData) => {
   const data = {
         uid: uid,
         email: email,
         name: displayName,
         picture: { thumbnail: photo },
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


export const saveDataFirebase = async ( uid, data, startDate, value, setDataUser  ) => {

   const { 
         Biography,
         confirmPassword,
         email,
         facebook,
         genero,
         gitHub,
         linkedin,
         nick,
         password,
         twitter 
   } = data;

   const information = {

      Biography,
      confirmPassword,
      email,
      facebook,
      genero,
      gitHub,
      linkedin,
      nick,
      password,
      twitter,
      startDate,
      value

   };
    
   await db.collection(`${ uid }`).doc('information').set( information ).then(()=>{
      setDataUser(  information )
   }).catch((()=>{
      console.log("Algo salio mal")
   }));

}

export const loadUser = async ( uid, setCompleto ) => {
   
   const user = await db.collection(`${ uid }`).doc('information').get();

   const { 
      Biography,
      confirmPassword,
      email,
      facebook,
      genero,
      gitHub,
      linkedin,
      nick,
      password,
      twitter,
      startDate,
      value 
   } = user.data();

   if ( Biography !== '' && confirmPassword!== '' && value!== ''
      && email!== '' && facebook!== '' && genero!== '' 
      && gitHub!== '' && linkedin!== '' && nick!== '' 
      && password!== '' && twitter!== '' && startDate!== '' 
   ) {
      setCompleto( true );
   }else{
      setCompleto( false )
   }
}
