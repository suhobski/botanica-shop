import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAfO-90vX2nLY-C3MraISn_MKe0ldujmnM",
  authDomain: "botanica-shop.firebaseapp.com",
  projectId: "botanica-shop",
  storageBucket: "botanica-shop.appspot.com",
  messagingSenderId: "922059721226",
  appId: "1:922059721226:web:4079752238e7f5ce2b2df3",
  measurementId: "G-BXVNXEV4W0",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

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
        ...additionalData,
      });
    } catch (error) {
      console.log("error cteacting user", error.message);
    }
  }

  // eslint-disable-next-line consistent-return
  return userRef;
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
