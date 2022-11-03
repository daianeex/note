import { firebase, initializeApp } from 'firebase/app';
import firebaseConfig from "./firebaseConfig"
import "firebase/auth";
import { GoogleAuthProvider, signInWithPopup, getAuth, signInWithEmailAndPassword } from "firebase/auth"
// eslint-disable-next-line import/no-anonymous-default-export
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
// eslint-disable-next-line import/no-anonymous-default-export

export function googleLogar() {
    return signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
    })
  }

/*export function createUser (name, email, password) {
    return createUserWithEmailAndPassword(auth, name, email, password).then((userCredential) => {
    const user = userCredential.user;
    return user;
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
}*/

export function userLogin(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

/*export function LoginGoogle(auth, provider) {
  return signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;  
  })
}*/
