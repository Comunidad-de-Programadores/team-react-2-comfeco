import { firebase, googleAuthProvider } from '../firebase/firebase-config'


export const startGoogleLogin = ( setData ) => {
    firebase.auth().signInWithPopup( googleAuthProvider )
        .then(( { user } ) => {
            login( user.uid, user.displayName, setData );
        })
}

export const login = ( uid, displayName, setData ) => {
    const data = { uid, displayName };
    setData( data )
};