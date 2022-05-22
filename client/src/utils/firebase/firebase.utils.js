import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCCJ_apNrVaBlKPiNADySfFhdEp4OgtE1c',
  authDomain: 'botanica-shop-db.firebaseapp.com',
  projectId: 'botanica-shop-db',
  storageBucket: 'botanica-shop-db.appspot.com',
  messagingSenderId: '215650093588',
  appId: '1:215650093588:web:899489f32de770e2d33501',
};

// Initialize Firebase
initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.getCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return null;

  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return null;
  const user = await createUserWithEmailAndPassword(auth, email, password);
  return user;
};

export const signInUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return null;
  const signIn = await signInWithEmailAndPassword(auth, email, password);
  return signIn;
};

export const signAuthOut = async () => {
  const signOutFunction = await signOut(auth);
  return signOutFunction;
};

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
