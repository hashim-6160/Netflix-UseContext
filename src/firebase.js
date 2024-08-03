import { initializeApp } from "firebase/app";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB67zVGKx8xQ6gI0fsm9aLgLMeTBt7iQ6k",
  authDomain: "netflix-clone-ab641.firebaseapp.com",
  projectId: "netflix-clone-ab641",
  storageBucket: "netflix-clone-ab641.appspot.com",
  messagingSenderId: "908433259347",
  appId: "1:908433259347:web:cf4b9af343478a9f247fa6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Set persistence for auth session
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log("Persistence set to browserLocalPersistence");
  })
  .catch((error) => {
    console.error("Error setting persistence:", error);
  });

const signup = async (name, email, password) => {
  try {
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    if (!trimmedName) {
      throw new Error("Name cannot be Empty");
    }

    const res = await createUserWithEmailAndPassword(
      auth,
      trimmedEmail,
      trimmedPassword
    );
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name: trimmedName,
      authProvider: "local",
      email: trimmedEmail,
    });
    return user;
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
};

const login = async (email, password) => {
  try {
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    await signInWithEmailAndPassword(auth, trimmedEmail, trimmedPassword);
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
};

const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
};

export { auth, db, login, signup, logout };
