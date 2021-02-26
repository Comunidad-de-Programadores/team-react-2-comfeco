import { firebase, googleAuthProvider } from '../firebase/firebase-config';

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
   const data = [
      {
         uid: uid,
         email: email,
         name: displayName,
         picture: { thumbnail: photo },
      },
   ];
   console.log(data);
   setData(data);
};
