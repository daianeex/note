/*import { getAuth, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup, 
    GoogleAuthProvider } from "firebase/auth";

export const auth = getAuth();
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
}

export function LoginGoogle(auth, provider) {
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