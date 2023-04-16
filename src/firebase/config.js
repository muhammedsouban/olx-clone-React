import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCk7409iZgcwivFTK2PxSdk8KXQCDkhozk",
    authDomain: "olx-clone-f715d.firebaseapp.com",
    projectId: "olx-clone-f715d",
    storageBucket: "olx-clone-f715d.appspot.com",
    messagingSenderId: "591175460824",
    appId: "1:591175460824:web:c82302d3a2b00e6cf1f4ad",
    measurementId: "G-FK5K8WCJ4M"
  };

  export default firebase.initializeApp(firebaseConfig)