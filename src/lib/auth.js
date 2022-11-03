import { firebase, initializeApp } from 'firebase/app';
import firebaseConfig from "./firebaseConfig"
import "firebase/auth";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth"
// eslint-disable-next-line import/no-anonymous-default-export
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

// eslint-disable-next-line import/no-anonymous-default-export
export default {

  googleLogar: async () => {
    signInWithPopup(provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
    })
  }
}

/*export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export function createUser (name, email, password) {
    return createUserWithEmailAndPassword(auth, name, email, password).then((userCredential) => {
    const user = userCredential.user;
    return user;
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
}

export function userLogin(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}*/

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