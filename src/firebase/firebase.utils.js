import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBYdIlmaLCZl5OY93_TuW7yJb0SI8URVLw",
  authDomain: "e-commerce-24a98.firebaseapp.com",
  databaseURL: "https://e-commerce-24a98.firebaseio.com",
  projectId: "e-commerce-24a98",
  storageBucket: "e-commerce-24a98.appspot.com",
  messagingSenderId: "277107348896",
  appId: "1:277107348896:web:d53b097e9c5406e92480c5",
  measurementId: "G-Z7R3CZNTPN"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
